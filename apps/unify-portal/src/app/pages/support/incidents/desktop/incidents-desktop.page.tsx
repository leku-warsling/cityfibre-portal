import { AddIcon } from "@chakra-ui/icons"
import { Badge } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { ListingTemplate, util } from "@ui/lib"
import { DataExport } from "@unify/components"
import { useIncidents, useQueryParams } from "@unify/hooks"
import { flow } from "fp-ts/lib/function"
import pathOr from "ramda/es/pathOr"
import prop from "ramda/es/prop"
import { Link } from "react-router-dom"
import { z } from "zod"

const DatetimeCell = flow(
  prop<"value", Date>("value"),
  util.date.toDatetimeString
)

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
    Cell: ({ value }: any) => (
      <Badge colorScheme={getColorScheme(value)} rounded={4} px={2} py={0.5}>
        {value}
      </Badge>
    ),
  },
  {
    Header: "Date Raised",
    accessor: "created_at",
    Cell: DatetimeCell,
    disableFilters: true,
  },
  {
    Header: "Last Updated",
    accessor: "updated_at",
    Cell: flow(prop<"value", Date>("value"), util.date.toDateString),
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
    mr={4}
    as={Link}
  >
    Raise an incident
  </Button>,
  <DataExport columns={Object.entries(COLUMN_MAP)} />,
]

const IncidentsDesktopPage = () => {
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<IncidentQuery>(DEFAULT_QUERY, incidentQuerySchema.parse)
  const { data = defaultValues, isLoading, isFetching } = useIncidents(params)
  const { totals, items } = data

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

  return (
    <ListingTemplate
      page={{
        actions: PAGE_ACTIONS,
        title: "Incidents",
      }}
      filters={[
        {
          label: `Status ${params?.status ?? "All"}`,
          onSelect: (value: IncidentQuery["status"]) =>
            setParam("status", value),
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
      ]}
      stats={[
        { label: "Total incidents", value: totals.records },
        { label: "Open incidents", value: totals.open },
        { label: "Resolved incidents", value: totals.resolved },
        { label: "Closed incidents", value: totals.closed },
      ]}
      search={{
        onFieldChange: renameParam,
        onSearch: searchHandler,
        placeholder: "Search incidents...",
        fields: [
          { value: "q", label: "All" },
          { value: "ref_like", label: "Incident Reference" },
          { value: "service_ref_like", label: "Service Reference" },
          { value: "user.email_like", label: "Raised By" },
        ],
      }}
      initialState={initialState}
      pagination={{
        onSizeChange: (size) => {
          console.log("size", size)
          _onSizeChange(size)
        },
        pageSize: params._limit,
        onChange: _onPaginate,
        current: params._page,
        total: totals.pages,
      }}
      isFetching={isFetching}
      columns={TABLE_COLUMNS}
      isLoading={isLoading}
      onSort={_onSort}
      data={items}
    />
    // <Page maxH="93vh" overflowY="auto">
    //   <Page.Header mb={6} pb={2} actions={PAGE_ACTIONS}>
    //     Incidents
    //   </Page.Header>
    //   <Flex gap={6} width="100%" mb={6}>
    //     <Statistic label="Total incidents" value={totals.records} />
    //     <Statistic label="Open incidents" value={totals.open} />
    //     <Statistic label="Resolved incidents" value={totals.resolved} />
    //     <Statistic label="Closed incidents" value={totals.closed} />
    //   </Flex>
    //   <Flex align="center" gap={6} mb={6}>
    //     <ColumnVisibility
    //       onChange={setVisibleColumns}
    //       value={visibleColumns}
    //       options={Object.entries(COLUMN_MAP)}
    //     />
    //     <SelectFilter
    //       onSelect={(value) =>
    //         setParam("status", value as IncidentQuery["status"])
    //       }
    //       options={[
    //         { label: "All", value: undefined },
    //         { label: "New", value: "New" },
    //         { label: "In Progress", value: "In Progress" },
    //         { label: "Submitted", value: "Submitted" },
    //         { label: "Closed", value: "Closed" },
    //         { label: "Resolved", value: "Resolved" },
    //         { label: "Cancelled", value: "Cancelled" },
    //       ]}
    //     >
    //       Status {params?.status ?? "All"}
    //     </SelectFilter>
    //     <Spacer />
    //     <FieldSearch
    //       onFieldChange={renameParam}
    //       onChange={searchHandler}
    //       placeholder="Search incidents..."
    //       defaultField="q"
    //       bgColor="white"
    //       maxWidth="400px"
    //       fields={[
    //         { value: "q", label: "All" },
    //         { value: "ref_like", label: "Incident Reference" },
    //         { value: "service_ref_like", label: "Service Reference" },
    //         { value: "user.email_like", label: "Raised By" },
    //       ]}
    //     />
    //   </Flex>
    //   <Table
    //     hiddenColumns={difference(COLUMN_KEYS, visibleColumns)}
    //     initialState={initialState}
    //     pagination={{
    //       onSizeChange: (size) => {
    //         console.log("size", size)
    //         _onSizeChange(size)
    //       },
    //       pageSize: params._limit,
    //       onChange: _onPaginate,
    //       current: params._page,
    //       total: totals.pages,
    //     }}
    //     isFetching={isFetching}
    //     columns={TABLE_COLUMNS}
    //     isLoading={isLoading}
    //     onSort={_onSort}
    //     boxShadow="base"
    //     overflowY="auto"
    //     bgColor="white"
    //     data={items}
    //     isSticky
    //     rounded={5}
    //     maxH="80vh"
    //     size="md"
    //   />
    // </Page>
  )
}

export default IncidentsDesktopPage
