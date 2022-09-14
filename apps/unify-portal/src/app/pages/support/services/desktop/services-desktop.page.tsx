import { Button, Spacer, Badge, Flex } from "@chakra-ui/react"
import { always, difference, ifElse, path, prop } from "ramda"
import { useServices, useQueryParams } from "@unify/hooks"
import { Link, useNavigate } from "react-router-dom"
import { SERVICE_STATUSES } from "@unify/entities"
import { AddIcon } from "@chakra-ui/icons"
import { useMemo, useState } from "react"
import { BiFlag } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Page, Table, util } from "@ui"
import { isDate } from "date-fns"
import { z } from "zod"
import {
  ColumnVisibility,
  SelectFilter,
  FieldSearch,
  DataExport,
  Statistic,
} from "@unify/components"

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
  prop<"value", string>("value"),
  ifElse(isDate, util.date.formatDateString("dd/MM/yyyy"), always("N/A"))
)

const TABLE_COLUMNS = [
  {
    Header: "Service Ref",
    accessor: "service_reference",
    disableFilters: true,
    Cell: ({ value }: any) => (
      <Button to={`/orders/${value}`} variant="link" size="sm" as={Link}>
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

const COLUMN_KEYS = Object.keys(COLUMN_MAP)

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
  const [visibleColumns, setVisibleColumns] = useState(Object.keys(COLUMN_MAP))
  const { totals, items } = data
  const columns = useMemo(() => TABLE_COLUMNS, [])
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

  const _onPaginate = ({
    pageIndex,
    pageSize,
  }: {
    pageIndex: number
    pageSize: number
  }) => {
    mergeParams({
      _page: pageIndex,
      _limit: pageSize,
    })
  }

  const initialState = {
    pageIndex: params._page,
    pageSize: params._limit,
    sortBy: [
      {
        id: "created_at",
        desc: false,
      },
    ],
  }

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2} actions={PAGE_ACTIONS}>
        Services
      </Page.Header>
      <Flex gap={6} width="100%" mb={6}>
        <Statistic label="Total" value={totals.records} />
        <Statistic label="Live Services" value={totals.completed} />
        <Statistic label="Services in Delivery" value={totals.in_delay} />
        <Statistic label="Ceased" value={totals.ceased} />
        <Statistic label="Cancelled" value={totals.cancellation_requested} />
      </Flex>
      <Flex gap={4} mb={6}>
        <ColumnVisibility
          options={Object.entries(COLUMN_MAP)}
          onChange={setVisibleColumns}
          value={visibleColumns}
        />
        <SelectFilter
          onSelect={(value) =>
            setParam("status", value as ServiceQuery["status"])
          }
          options={[
            { label: "All", value: undefined },
            { label: "In Delay", value: "In Delay" },
            { label: "Progressing", value: "Progressing" },
            { label: "Completed", value: "Completed" },
            { label: "Cancelled", value: "Cancelled" },
            { label: "Ceased", value: "Ceased" },
          ]}
        >
          Status {params?.status ?? "All"}
        </SelectFilter>
        <Spacer />
        <FieldSearch
          onFieldChange={renameParam}
          onChange={searchHandler}
          placeholder="Search incidents..."
          defaultField="q"
          bgColor="white"
          maxWidth="400px"
          fields={[
            { value: "q", label: "All" },
            { value: "customer_reference_like", label: "Customer Reference" },
            { value: "service_reference_like", label: "Service Reference" },
          ]}
        />
      </Flex>
      <Table
        hiddenColumns={difference(COLUMN_KEYS, visibleColumns)}
        initialState={initialState}
        actions={serviceActions}
        pageCount={totals.pages}
        onPaginate={_onPaginate}
        isFetching={isFetching}
        isLoading={isLoading}
        columns={columns}
        onSort={_onSort}
        boxShadow="base"
        manualPagination
        overflowY="auto"
        bgColor="white"
        data={items}
        isPaginated
        rounded={5}
        maxH="80vh"
        size="md"
        isSticky
      />
    </Page>
  )
}

export default ServicesDesktopPage
