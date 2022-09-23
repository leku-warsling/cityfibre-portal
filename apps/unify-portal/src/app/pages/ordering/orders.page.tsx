import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Badge } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/media-query"
import { util } from "@ui/lib"
import {
  ListingDesktopTemplate,
  ListingTouchTemplate,
} from "@ui/lib/templates/listing"
import { DataExport, LinkMenu } from "@unify/components"
import { ORDER_STATUSES } from "@unify/entities"
import { useOrders, usePage, useQueryParams } from "@unify/hooks"
import { flow } from "fp-ts/lib/function"
import get from "lodash-es/get"
import path from "ramda/es/path"
import prop from "ramda/es/prop"
import { Link } from "react-router-dom"
import { z } from "zod"

const DEFAULT_QUERY = {
  _page: 1,
  _limit: 10,
  _sort: "created_at",
  _order: "desc",
} as const

const querySchema = z.object({
  _order: z.optional(z.enum(["asc", "desc"])),
  _sort: z.optional(z.string()),
  q: z.optional(z.string()),
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
    required: true,
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
    required: true,
    Cell: ({ value }: any) => (
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

const COLUMN_MAP = TABLE_COLUMNS.reduce<Record<string, string>>(
  (m, item: any) => {
    const key = "id" in item ? item.id : item.accessor
    m[key] = item.Header
    return m
  },
  {}
)

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

const OrdersPage = () => {
  usePage({ title: "Orders" })
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<OrderQuery>(DEFAULT_QUERY, orderQuerySchema.parse)
  const { data = DEFAULT_VALUES, isLoading, isFetching } = useOrders(params)
  const [isTouch] = useMediaQuery("(max-width: 1024px)")
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

  const Listing = isTouch ? ListingTouchTemplate : ListingDesktopTemplate

  const filters = [
    {
      label: `Status ${params?.status ?? "All"}`,
      onSelect: (value: OrderQuery["status"]) => setParam("status", value),
      options: [
        { label: "All", value: undefined },
        { label: "Acknowledged", value: "Acknowledged" },
        { label: "Committed", value: "Committed" },
        { label: "Pending", value: "Pending" },
        { label: "Completed", value: "Completed" },
        { label: "Placed", value: "Placed" },
        { label: "Cancelled", value: "Cancelled" },
      ],
    },
  ]

  const stats = [
    { label: "Total", value: totals.records },
    { label: "In Progress", value: totals.pending },
    { label: "Completed", value: totals.completed },
    { label: "Cancelled", value: totals.cancelled },
  ]

  const search = {
    onFieldChange: renameParam,
    onSearch: searchHandler,
    placeholder: "Search orders...",
    fields: [
      { value: "q", label: "All" },
      { value: "buyer_reference_like", label: "Buyer Reference" },
      { value: "service_reference_like", label: "Service Reference" },
      { value: "seller_reference_like", label: "Seller Reference" },
      { value: "customer.name_like", label: "Ordered By" },
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

export default OrdersPage
