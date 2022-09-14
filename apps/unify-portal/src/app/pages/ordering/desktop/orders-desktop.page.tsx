import { Button, Spacer, Badge, Flex } from "@chakra-ui/react"
import { useQueryParams, useOrders } from "@unify/hooks"
import { ORDER_STATUSES } from "@unify/entities"
import { difference, path, prop } from "ramda"
import { AddIcon } from "@chakra-ui/icons"
import { useMemo, useState } from "react"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { get } from "lodash-es"
import { z } from "zod"
import {
  ColumnVisibility,
  SelectFilter,
  FieldSearch,
  DataExport,
  Statistic,
  LinkMenu,
} from "@unify/components"

const DEFAULT_QUERY = {
  _order: "desc",
  _limit: 10,
  _page: 1,
  _sort: "created_at",
} as const

const querySchema = z.object({
  _order: z.optional(z.enum(["asc", "desc"])),
  _sort: z.optional(z.string()),
  q: z.string().optional(),
  _limit: z.number(),
  _page: z.number(),
})

const orderQuerySchema = querySchema.extend({
  service_reference_like: z.optional(z.string()),
  seller_reference_like: z.optional(z.string()),
  buyer_reference_like: z.optional(z.string()),
  "customer.name_like": z.optional(z.string()),
  status: z.enum(ORDER_STATUSES).optional(),
})

type OrderQuery = z.infer<typeof orderQuerySchema>

const DEFAULT_VALUES = {
  items: [],
  totals: {
    acknowledged: 0,
    cancelled: 0,
    committed: 0,
    completed: 0,
    records: 0,
    pending: 0,
    placed: 0,
    count: 0,
    pages: 0,
  },
} as const

const STATUS_MAP = {
  Acknowledged: "KCI 1",
  Committed: "KCI 2",
  Completed: "KCI 3",
} as const

const getColorScheme = (state: string) => {
  switch (state) {
    case "Cancelled":
      return "red"
    case "Acknowledged":
      return "teal"
    case "Completed":
      return "green"
    case "Placed":
      return "cyan"
    case "Pending":
      return "orange"
    case "Committed":
      return "blue"
    default:
      return "gray"
  }
}

const TABLE_COLUMNS = [
  {
    Header: "Buyer Ref",
    accessor: "buyer_reference",
    disableFilters: true,
    Cell: ({ value }: any) => (
      <Button to={`/orders/${value}`} variant="link" size="sm" as={Link}>
        {value}
      </Button>
    ),
  },
  {
    Header: "Seller Ref",
    accessor: "seller_reference",
    disableFilters: true,
  },
  {
    Header: "Service Ref",
    accessor: "service_reference",
    disableFilters: true,
  },
  {
    id: "service.name",
    Header: "Product",
    accessor: path(["service", "name"]),
    disableFilters: true,
    disableSortBy: true,
  },
  {
    accessor: path(["customer", "address"]),
    id: "customer.address",
    disableFilters: true,
    disableSortBy: true,
    Header: "Address",
    Cell: ({ value }: any) =>
      `${value.building} ${value.street}, ${value.city}, ${value.postcode}`,
  },
  {
    id: "appointment.start",
    Header: "Appointment Date",
    accessor: path(["appointment", "start"]),
    disableFilters: true,
    Cell: flow(
      prop<"value", string>("value"),
      util.date.formatDateString("dd/MM/yyyy")
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    disableFilters: true,
    Cell: ({ value = "" }) => (
      <Badge colorScheme={getColorScheme(value)} rounded={4} px={2} py={0.5}>
        {value} {get(STATUS_MAP, value, "")}
      </Badge>
    ),
  },
  {
    Header: "Ordered On",
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
      util.date.formatDateString("dd/MM/yyyy, HH:mm")
    ),
    disableFilters: true,
  },
  {
    id: "customer.name",
    Header: "Ordered By",
    accessor: path(["customer", "name"]),
    disableFilters: true,
  },
] as const

const COLUMN_MAP = TABLE_COLUMNS.reduce<Record<string, string>>((m, item) => {
  const key = "id" in item ? item.id : item.accessor
  m[key] = item.Header
  return m
}, {})

const COLUMN_KEYS = Object.keys(COLUMN_MAP)

const PRODUCT_LINKS = [
  { title: "FTTP Services", url: "/orders/fttp" },
  { title: "Ethernet Services", url: "/orders/ethernet" },
]

const PAGE_ACTIONS = [
  <LinkMenu leftIcon={<AddIcon fontSize="12px" />} items={PRODUCT_LINKS}>
    New Order
  </LinkMenu>,
  <DataExport columns={Object.entries(COLUMN_MAP)} />,
]

const OrdersDesktopPage = () => {
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<OrderQuery>(DEFAULT_QUERY, orderQuerySchema.parse)
  const { data = DEFAULT_VALUES, isLoading, isFetching } = useOrders(params)
  const [visibleColumns, setVisibleColumns] = useState(Object.keys(COLUMN_MAP))
  const { totals, items } = data
  const columns = useMemo(() => TABLE_COLUMNS, [])

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
        desc: true,
      },
    ],
  }

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header actions={PAGE_ACTIONS} mb={6} pb={2}>
        Orders
      </Page.Header>
      <Flex gap={6} width="100%" mb={6}>
        <Statistic label="Total" value={totals.records} />
        <Statistic label="In Progress" value={totals.pending} />
        <Statistic label="Completed" value={totals.completed} />
        <Statistic label="Cancelled" value={totals.cancelled} />
      </Flex>
      <Flex align="center" gap={4} mb={6}>
        <ColumnVisibility
          onChange={setVisibleColumns}
          value={visibleColumns}
          options={Object.entries(COLUMN_MAP)}
        />
        <SelectFilter
          onSelect={(value) =>
            setParam("status", value as OrderQuery["status"])
          }
          options={[
            { label: "All", value: undefined },
            { label: "Acknowledged", value: "Acknowledged" },
            { label: "Committed", value: "Committed" },
            { label: "Pending", value: "Pending" },
            { label: "Completed", value: "Completed" },
            { label: "Placed", value: "Placed" },
            { label: "Cancelled", value: "Cancelled" },
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
            { value: "buyer_reference_like", label: "Buyer Reference" },
            { value: "service_reference_like", label: "Service Reference" },
            { value: "seller_reference_like", label: "Seller Reference" },
            { value: "customer.name_like", label: "Ordered By" },
          ]}
        />
      </Flex>
      <Table
        hiddenColumns={difference(COLUMN_KEYS, visibleColumns)}
        initialState={initialState}
        onPaginate={_onPaginate}
        pageCount={totals.pages}
        isFetching={isFetching}
        isLoading={isLoading}
        columns={columns}
        onSort={_onSort}
        manualPagination
        overflowY="auto"
        boxShadow="base"
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

export default OrdersDesktopPage
