import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Badge } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
import { util } from "@ui/lib"
import {
  ListingDesktopTemplate,
  ListingTouchTemplate,
} from "@ui/lib/templates/listing"
import { DataExport } from "@unify/components"
import { useIncidents, usePage, useQueryParams } from "@unify/hooks"
import { flow } from "fp-ts/lib/function"
import pathOr from "ramda/es/pathOr"
import prop from "ramda/es/prop"
import { Link } from "react-router-dom"
import { z } from "zod"

const DEFAULT_QUERY = {
  _page: 1,
  _limit: 10,
  _sort: "created_at",
  _order: "desc",
  status: "New",
} as const

const querySchema = z.object({
  _order: z.optional(z.enum(["asc", "desc"])),
  _sort: z.optional(z.string()),
  q: z.optional(z.string()),
  _limit: z.number(),
  _page: z.number(),
})

const incidentQuerySchema = querySchema.extend({
  status: z.optional(
    z.enum([
      "New",
      "In Progress",
      "Closed",
      "Submitted",
      "On Hold",
      "Resolved",
      "Cancelled",
    ])
  ),
  ref_like: z.optional(z.string()),
  service_ref_like: z.optional(z.string()),
  "user.email_like": z.optional(z.string()),
})

type IncidentQuery = z.infer<typeof incidentQuerySchema>

const defaultValues = {
  totals: {
    resolved: 0,
    records: 0,
    closed: 0,
    count: 0,
    pages: 0,
    open: 0,
  },
  items: [],
}

const getColorScheme = (state: string) => {
  switch (state) {
    case "Cancelled":
      return "red"
    case "New":
    case "In Progress":
    case "Submitted":
      return "blue"
    default:
      return "green"
  }
}

const TABLE_COLUMNS = [
  {
    Header: "Incident Reference",
    accessor: "ref",
    disableFilters: true,
    required: true,
    Cell: ({ value }: any) => (
      <Button size="sm" as={Link} variant="link" to={`/incidents/${value}`}>
        {value}
      </Button>
    ),
  },
  {
    Header: "Service Reference",
    accessor: "service_reference",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Status",
    accessor: "status",
    disableFilters: true,
    required: true,
    Cell: ({ value }: any) => (
      <Badge colorScheme={getColorScheme(value)} rounded={4} px={2} py={0.5}>
        {value}
      </Badge>
    ),
  },
  {
    Header: "Date Raised",
    accessor: "created_at",
    Cell: flow(
      prop<"value", string>("value"),
      util.date.formatDateString("dd/MM/yyyy, HH:mm")
    ),
    disableFilters: true,
  },
  {
    Header: "Last Updated",
    accessor: "updated_at",
    Cell: flow(
      prop<"value", string>("value"),
      util.date.formatDateString("dd/MM/yyyy")
    ),
    disableFilters: true,
  },
  {
    id: "email",
    Header: "Raised By",
    accessor: pathOr("", ["user", "email"]),
    disableFilters: true,
    disableSortBy: true,
  },
] as const

const COLUMN_MAP = TABLE_COLUMNS.reduce<Record<string, string>>((m, item) => {
  const key = "id" in item ? item.id : item.accessor
  m[key] = item.Header
  return m
}, {})

const PAGE_ACTIONS = [
  <Button
    leftIcon={<AddIcon fontSize="12px" />}
    to="/incidents/create"
    alignItems="center"
    as={Link}
  >
    Raise incident
  </Button>,
  <DataExport columns={Object.entries(COLUMN_MAP)} />,
]

const IncidentsPage = () => {
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<IncidentQuery>(DEFAULT_QUERY, incidentQuerySchema.parse)
  const { data = defaultValues, isLoading, isFetching } = useIncidents(params)
  const [isTouch] = useMediaQuery("(max-width: 1024px)")
  const { totals, items } = data

  usePage({ title: "Support" })

  const _onSort = ({
    id,
    desc,
  }: {
    id: string
    desc?: boolean | undefined
  }) => {
    mergeParams({
      _sort: id ?? "created_at",
      _order: desc ? "desc" : "asc",
    })
  }

  const _onPaginate = setParam("_page")
  const _onSizeChange = setParam("_limit")

  const initialState = {
    sortBy: [
      {
        id: "created_at",
        desc: true,
      },
    ],
  }

  const Listing = isTouch ? ListingTouchTemplate : ListingDesktopTemplate

  const filters = [
    {
      label: `Status ${params?.status ?? "All"}`,
      onSelect: (value: IncidentQuery["status"]) => setParam("status", value),
      options: [
        { label: "All", value: undefined },
        { label: "New", value: "New" },
        { label: "In Progress", value: "In Progress" },
        { label: "Submitted", value: "Submitted" },
        { label: "Closed", value: "Closed" },
        { label: "Resolved", value: "Resolved" },
        { label: "Cancelled", value: "Cancelled" },
      ],
    },
  ]

  const stats = [
    { label: "Total", value: totals.records },
    { label: "Open", value: totals.open },
    { label: "Resolved", value: totals.resolved },
    { label: "Closed", value: totals.closed },
  ]

  const search = {
    onFieldChange: renameParam,
    onSearch: searchHandler,
    placeholder: "Search incidents...",
    fields: [
      { value: "q", label: "All" },
      { value: "ref_like", label: "Incident Reference" },
      { value: "service_ref_like", label: "Service Reference" },
      { value: "user.email_like", label: "Raised By" },
    ],
  }

  const pagination = {
    onSizeChange: _onSizeChange,
    pageSize: params._limit,
    onChange: _onPaginate,
    current: params._page,
    total: totals.pages,
  }

  return (
    <Listing
      page={{
        title: "Incidents",
        actions: PAGE_ACTIONS,
      }}
      filters={filters}
      stats={stats}
      search={search}
      initialState={initialState}
      pagination={pagination}
      isFetching={isFetching}
      columns={TABLE_COLUMNS}
      isLoading={isLoading}
      onSort={_onSort}
      data={items}
    />
  )
}

export default IncidentsPage
