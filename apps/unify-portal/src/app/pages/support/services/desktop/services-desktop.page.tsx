import {
  AddIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { useMemo, useState } from "react"
import { BiDownload, BiFlag } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Link, useNavigate } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { always, difference, ifElse, path, prop } from "ramda"
import { z } from "zod"
import { SERVICE_STATUSES } from "../../../../entities"
import { useServices } from "../../../../hooks/use-services.hook"
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
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverBody,
  CheckboxGroup,
  VStack,
  Checkbox,
} from "@chakra-ui/react"
import { useQueryParams } from "../../../../hooks/use-query-params"
import { BsEye } from "react-icons/bs"
import { SelectFilter } from "../../../../components/filters/select-filter"
import { isDate } from "date-fns"

const DEFAULT_QUERY = {
  _order: "asc",
  _limit: 10,
  _page: 1,
  _sort: "servcie_reference",
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

const DataExport = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          leftIcon={<BiDownload />}
          rightIcon={<ChevronDownIcon fontSize="xl" />}
        >
          Export
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody p={4}>
            <CheckboxGroup defaultValue={COLUMN_KEYS}>
              <VStack spacing={4} align="flex-start" mb={4}>
                {Object.entries(COLUMN_MAP).map(([value, label]) => (
                  <Checkbox key={value} value={value} defaultChecked>
                    {label}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
            <Button rightIcon={<ArrowForwardIcon />} isFullWidth>
              Download
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

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
  <DataExport />,
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
        navigate(`/incidents/create?service_ref=${data.service_reference}`, {
          replace: true,
        }),
      isBatchable: false,
    },
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2} actions={PAGE_ACTIONS}>
        Services
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
            Total Services
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
            {totals.completed}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Live Services
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
            {totals.progressing}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Services in Delivery
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
            {totals.ceased}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Ceased Services
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
            {totals.cancellation_requested}
          </Text>
          <Text fontWeight={600} color="gray.500">
            Cancelled Orders
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
      </Flex>
      <Flex gap={4} mb={6}>
        <ColumnVisibility
          onChange={setVisibleColumns}
          value={visibleColumns}
          options={Object.entries(COLUMN_MAP)}
        />
        <SelectFilter
          onSelect={(value) =>
            setParam("status", value as ServiceQuery["status"])
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
          <Input placeholder="Search services" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
        </InputGroup>
      </Flex>
      <Table
        hiddenColumns={difference(COLUMN_KEYS, visibleColumns)}
        isFetching={isFetching}
        isLoading={isLoading}
        columns={columns}
        boxShadow="base"
        manualPagination
        actions={serviceActions}
        overflowY="auto"
        bgColor="white"
        isPaginated
        data={items}
        rounded={5}
        maxH="80vh"
        size="md"
        isSticky
        initialState={{
          pageIndex: params._page,
          pageSize: params._limit,
          sortBy: [
            {
              id: "service_reference",
              desc: false,
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
            _sort: id ?? "service_reference",
            _order: desc ? "desc" : "asc",
          })
        }
        pageCount={totals.pages}
      />
    </Page>
  )
}

export default ServicesDesktopPage
