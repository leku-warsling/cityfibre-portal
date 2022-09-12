import { RiBarChartGroupedLine } from "react-icons/ri"
import { useMemo, useState } from "react"
import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons"
import { BiDownload } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { difference, path, prop } from "ramda"
import { useOrders } from "../../../hooks/use-orders.hook"
import { z } from "zod"
import { ORDER_STATUSES } from "../../../entities"
import { useQueryParams } from "../../../hooks/use-query-params"
import {
  InputRightElement,
  InputGroup,
  Button,
  Spacer,
  HStack,
  Badge,
  Input,
  Flex,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  PopoverBody,
  CheckboxGroup,
  Checkbox,
  VStack,
} from "@chakra-ui/react"
import { SelectFilter } from "../../../components/filters/select-filter"
import { BsEye } from "react-icons/bs"

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
  status: z.enum(ORDER_STATUSES).optional(),
  ref_like: z.optional(z.string()),
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
    Cell: ({ value }: any) => (
      <Badge colorScheme="orange" rounded={4} px={2} py={0.5}>
        {value}
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
    disableSortBy: true,
  },
  {
    id: "customer.name",
    Header: "Ordered By",
    accessor: path(["customer", "name"]),
    disableFilters: true,
    disableSortBy: true,
  },
] as const

const COLUMN_MAP = TABLE_COLUMNS.reduce<Record<string, string>>((m, item) => {
  const key = "id" in item ? item.id : item.accessor
  m[key] = item.Header
  return m
}, {})

const COLUMN_KEYS = Object.keys(COLUMN_MAP)

type ColumnVisibilityProps = {
  onChange: (value: string[]) => void
  options: [string, string][]
  value: string[]
}

const ColumnVisibility = ({
  options,
  onChange,
  value,
}: ColumnVisibilityProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          rightIcon={<ChevronDownIcon fontSize="xl" />}
          leftIcon={<BsEye />}
          variant="outline"
        >
          Columns
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody p={4}>
            <CheckboxGroup onChange={onChange} value={value}>
              <VStack spacing={4} align="flex-start">
                {options.map(([value, label]) => (
                  <Checkbox key={value} value={value}>
                    {label}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

const PAGE_ACTIONS = [
  <Menu>
    <MenuButton as={Button} mr={4} leftIcon={<AddIcon fontSize="12px" />}>
      New Order
    </MenuButton>
    <MenuList fontSize="md">
      <MenuItem as={Link} to="/orders/fttp">
        FTTP Services
      </MenuItem>
      <MenuItem as={Link} to="/orders/ethernet">
        Ethernet Services
      </MenuItem>
    </MenuList>
  </Menu>,
  <Button leftIcon={<BiDownload fontSize="12px" />}>Export</Button>,
]

const OrdersDesktopPage = () => {
  const { params, mergeParams, renameParam, searchHandler, setParam } =
    useQueryParams<OrderQuery>(DEFAULT_QUERY, orderQuerySchema.parse)
  const { data = DEFAULT_VALUES, isLoading, isFetching } = useOrders(params)
  const [visibleColumns, setVisibleColumns] = useState(Object.keys(COLUMN_MAP))
  const { totals, items } = data
  const columns = useMemo(() => TABLE_COLUMNS, [])

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header actions={PAGE_ACTIONS} mb={6} pb={2}>
        Orders
      </Page.Header>
      <Flex gap={6} width="100%" mb={6}>
        <HStack
          bgColor="white"
          boxShadow="base"
          flexGrow={1}
          rounded={4}
          py={4}
          px={6}
        >
          <Text fontSize="2xl" fontWeight={800} mr={2}>
            {totals.records}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Total Orders
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
        <HStack
          bgColor="white"
          boxShadow="base"
          rounded={4}
          flexGrow={1}
          py={4}
          px={6}
        >
          <Text fontSize="2xl" fontWeight={800} mr={2}>
            {totals.pending}
          </Text>
          <Text fontWeight={600} color="gray.500">
            In Progress Orders
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
        <HStack
          bgColor="white"
          boxShadow="base"
          flexGrow={1}
          rounded={4}
          py={4}
          px={6}
        >
          <Text fontSize="2xl" fontWeight={800} mr={2}>
            {totals.completed}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Completed Orders
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
        <HStack
          bgColor="white"
          boxShadow="base"
          flexGrow={1}
          rounded={4}
          py={4}
          px={6}
        >
          <Text fontSize="2xl" fontWeight={800} mr={2}>
            {totals.cancelled}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Cancelled Orders
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
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
            { label: "Acknowledged", value: "acknowledged" },
            { label: "Committed", value: "committed" },
            { label: "Pending", value: "pending" },
            { label: "Completed", value: "completed" },
            { label: "Placed", value: "placed" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
        >
          Status {params?.status ?? "All"}
        </SelectFilter>
        <Spacer />
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search orders" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
        </InputGroup>
        {/* <IconButton
          icon={<BiDotsVerticalRounded />}
          fontSize="xl"
          colorScheme="gray"
          aria-label="menu"
          variant="ghost"
        /> */}
      </Flex>
      <Table
        hiddenColumns={difference(COLUMN_KEYS, visibleColumns)}
        isFetching={isFetching}
        isLoading={isLoading}
        columns={columns}
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
        initialState={{
          pageIndex: params._page,
          pageSize: params._limit,
          sortBy: [
            {
              id: "created_at",
              desc: true,
            },
          ],
        }}
        onPaginate={({ pageIndex, pageSize }) =>
          mergeParams({
            _page: pageIndex,
            _limit: pageSize,
          })
        }
        onSort={({ id, desc }) =>
          mergeParams({
            _sort: id ?? "created_at",
            _order: desc ? "desc" : "asc",
          })
        }
        pageCount={totals.pages}
      />
    </Page>
  )
}

export default OrdersDesktopPage
