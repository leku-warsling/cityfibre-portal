import { RiBarChartGroupedLine } from "react-icons/ri"
import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { BiDownload, BiFilter } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { prop, repeat } from "ramda"
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
} from "@chakra-ui/react"

const OrdersDesktopPage = () => {
  const [isLoading, setLoading] = useState(true)
  const data = useMemo(
    () =>
      repeat(
        {
          product: "Residential FTTH",
          appointment_at: new Date(),
          updated_by: "Joe Bloggs",
          service_ref: "S123456",
          ordered_on: new Date(),
          seller_ref: "C520c9db",
          status: "In Progress",
          buyer_ref: "C520c9db",
        },
        100
      ),
    []
  )

  const columns = useMemo(
    () =>
      [
        {
          Header: "Buyer Ref",
          accessor: "buyer_ref",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => (
            <Button to={`/orders/${value}`} variant="link" size="sm" as={Link}>
              {value}
            </Button>
          ),
        },
        {
          Header: "Seller Ref",
          accessor: "seller_ref",
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Service Ref",
          accessor: "service_ref",
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Product",
          accessor: "product",
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Appt Date",
          accessor: "appointment_at",
          disableFilters: true,
          disableSortBy: true,
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
        },
        {
          Header: "Status",
          accessor: "status",
          disableSortBy: true,
          disableFilters: true,
          Cell: ({ value }: any) => (
            <Badge colorScheme="orange" rounded={4} px={2} py={0.5}>
              {value}
            </Badge>
          ),
        },
        {
          Header: "Ordered On",
          accessor: "ordered_on",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Updated By",
          accessor: "updated_by",
          disableFilters: true,
          disableSortBy: true,
        },
      ] as const,
    []
  )

  const actions = [
    <Button leftIcon={<BiDownload fontSize="12px" />}>Export</Button>,
  ]

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header actions={actions} mb={6} pb={2}>
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
            169
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
            58
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
            32
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
            32
          </Text>
          <Text fontWeight={600} color="gray.500">
            Cancelled Orders
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
      </Flex>
      <Flex justify="space-between" mb={6}>
        <Button leftIcon={<BiFilter />}>Filters</Button>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search orders" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
        </InputGroup>
      </Flex>
      <Table
        isLoading={isLoading}
        columns={columns}
        boxShadow="base"
        overflowY="auto"
        bgColor="white"
        isPaginated
        data={data}
        rounded={5}
        maxH="80vh"
        size="md"
      />
    </Page>
  )
}

export default OrdersDesktopPage
