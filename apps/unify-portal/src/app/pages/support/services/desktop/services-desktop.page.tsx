import { AddIcon } from "@chakra-ui/icons"
import { Badge } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { useMediaQuery } from "@chakra-ui/media-query"
import {
  ListingDesktopTemplate,
  ListingTouchTemplate,
} from "@ui/lib/templates/listing"
import { date } from "@ui/lib/util"
import { DataExport } from "@unify/components"
import { SERVICE_STATUSES } from "@unify/entities"
import { useQueryParams, useServices } from "@unify/hooks"
import isDate from "date-fns/isDate"
import { flow } from "fp-ts/lib/function"
import always from "ramda/es/always"
import ifElse from "ramda/es/ifElse"
import path from "ramda/es/path"
import prop from "ramda/es/prop"
import { BiFlag } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"

const DEFAULT_QUERY = {
  _order: "desc",
  _limit: 10,
  _page: 1,
  _sort: "created_at",
} as const

const DEFAULT_DATA = {
  items: [],
  totals: {
    cancellation_requested: 0,
    progressing: 0,
    completed: 0,
    in_delay: 0,
    records: 0,
    ceased: 0,
    pages: 0,
    count: 0,
  },
}

const querySchema = z.object({
  _order: z.optional(z.enum(["asc", "desc"])),
  _sort: z.optional(z.string()),
  q: z.string().optional(),
  _limit: z.number(),
  _page: z.number(),
})

const serviceQuerySchema = querySchema.extend({
  status: z.enum(SERVICE_STATUSES).optional(),
  ref_like: z.optional(z.string()),
})

type ServiceQuery = z.infer<typeof serviceQuerySchema>

const renderCellDate = flow(
  prop<"value", Date>("value"),
  ifElse(isDate, date.toDateString, always("N/A"))
)

const TABLE_COLUMNS = [
  {
    Header: "Service Ref",
    accessor: "service_reference",
    disableFilters: true,
    Cell: ({ value }: any) => (
      <Button to={`/services/${value}`} variant="link" size="sm" as={Link}>
        {value}
      </Button>
    ),
  },
  {
    Header: "Customer Ref",
    accessor: "customer_reference",
    disableFilters: true,
  },
  {
    Header: "Status",
    accessor: "status",
    disableFilters: true,
    Cell: ({ value }: any) => (
      <Badge colorScheme="orange" rounded={4} px={2} py={0.5}>
        {value}
      </Badge>
    ),
  },
  {
    id: "product.name",
    Header: "Product",
    accessor: path(["product", "name"]),
    disableFilters: true,
  },
  {
    Header: "Site",
    accessor: "site",
    disableFilters: true,
    disableSortBy: true,
    Cell: ({ value }: any) =>
      `${value.building} ${value.street}, ${value.city}, ${value.postcode}`,
  },
  {
    id: "product.line_profile",
    Header: "Line Profile",
    accessor: path(["product", "line_profile"]),
    disableFilters: true,
  },
  {
    Header: "Created Date",
    accessor: "created_at",
    Cell: renderCellDate,
    disableFilters: true,
  },
  {
    id: "contract.start",
    Header: "Contract Start",
    accessor: path(["contract", "start"]),
    Cell: renderCellDate,
    disableFilters: true,
  },
  {
    id: "contract.end",
    Header: "Contract End",
    accessor: path(["contract", "end"]),
    Cell: renderCellDate,
    disableFilters: true,
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
    mr={2}
    as={Link}
  >
    Raise an incident
  </Button>,
  <DataExport columns={Object.entries(COLUMN_MAP)} />,
]

const ServicesDesktopPage = () => {
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<ServiceQuery>(DEFAULT_QUERY, serviceQuerySchema.parse)
  const { data = DEFAULT_DATA, isLoading, isFetching } = useServices(params)
  const [isTouch] = useMediaQuery("(max-width: 1024px)")
  const { totals, items } = data
  const navigate = useNavigate()

  const serviceActions = [
    {
      icon: BiFlag,
      label: "Raise Incident",
      handler: (data: any) =>
        navigate(
          `/incidents/create?service_reference=${data.service_reference}`,
          {
            replace: true,
          }
        ),
      isBatchable: false,
    },
  ]

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

  const stats = [
    { label: "Total", value: totals.records },
    { label: "Live", value: totals.completed },
    { label: "In Delivery", value: totals.in_delay },
    { label: "Ceased", value: totals.ceased },
    { label: "Cancelled", value: totals.cancellation_requested },
  ]

  const filters = [
    {
      label: `Status ${params?.status ?? "All"}`,
      onSelect: (value: ServiceQuery["status"]) => setParam("status", value),
      options: [
        { label: "All", value: undefined },
        { label: "In Delay", value: "In Delay" },
        { label: "Progressing", value: "Progressing" },
        { label: "Completed", value: "Completed" },
        { label: "Cancelled", value: "Cancelled" },
        { label: "Ceased", value: "Ceased" },
      ],
    },
  ]

  const search = {
    onFieldChange: renameParam,
    onSearch: searchHandler,
    placeholder: "Search services...",
    fields: [
      { value: "q", label: "All" },
      { value: "customer_reference_like", label: "Customer Reference" },
      { value: "service_reference_like", label: "Service Reference" },
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
        actions: PAGE_ACTIONS,
        title: "Services",
      }}
      initialState={initialState}
      actions={serviceActions}
      pagination={pagination}
      isFetching={isFetching}
      columns={TABLE_COLUMNS}
      isLoading={isLoading}
      filters={filters}
      onSort={_onSort}
      search={search}
      stats={stats}
      data={items}
    />
  )
}

export default ServicesDesktopPage
