// @ts-nocheck
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Badge, Button, Select } from "@chakra-ui/react"
import { useOrders } from "@partner-portal/hooks"
import get from "lodash-es/get"
import { path } from "ramda"
import { Link } from "react-router-dom"
import TableCard from "./table-card"

const DEFAULT_QUERY = {
  _limit: 5,
  _sort: "created_at",
  _order: "desc",
} as const

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
    disableSortBy: true,
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
    disableSortBy: true,
  },
  {
    Header: "Service Ref",
    accessor: "service_reference",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    id: "service.name",
    Header: "Product",
    accessor: path(["service", "name"]),
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Status",
    accessor: "status",
    disableFilters: true,
    disableSortBy: true,
    required: true,
    Cell: ({ value }: any) => (
      <Badge colorScheme={getColorScheme(value)} rounded={4} px={2} py={0.5}>
        {value} {get(STATUS_MAP, value, "")}
      </Badge>
    ),
  },
  {
    id: "customer.name",
    Header: "Ordered By",
    disableSortBy: true,
    accessor: path(["customer", "name"]),
    disableFilters: true,
  },
] as const

const OrdersTableCard = () => {
  const {
    data = DEFAULT_VALUES,
    isLoading,
    isFetching,
  } = useOrders(DEFAULT_QUERY)
  return (
    <TableCard
      flex={1}
      columns={TABLE_COLUMNS}
      data={data.items}
      isLoading={isLoading}
      isFetching={isFetching}
      title="Orders"
      actions={[
        <Select variant="outline" maxW="200px">
          <option value="">Latest</option>
          <option value="1">Delayed</option>
          <option value="2">Resolved</option>
        </Select>,
      ]}
      footer={
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="gray"
          variant="ghost"
        >
          View all orders
        </Button>
      }
    />
  )
}

export default OrdersTableCard
