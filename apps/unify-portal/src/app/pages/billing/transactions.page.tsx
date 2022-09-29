import { RiBarChartGroupedLine } from "react-icons/ri"
import { useEffect, useMemo, useState } from "react"
import { usePage } from "../../hooks/use-page.hook"
import { SearchIcon } from "@chakra-ui/icons"
import { Page } from "@ui/lib/layout"
import { Table } from "@ui/lib/table"
import { currency, date } from "@ui/lib/util"
import { BiFilter } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import repeat from "ramda/es/repeat"
import prop from "ramda/es/prop"
import { Spacer, HStack, Badge, Flex, Text } from "@chakra-ui/layout"
import { InputRightElement, InputGroup, Input } from "@chakra-ui/input"
import { Icon } from "@chakra-ui/icon"
import { Button } from "@chakra-ui/button"

const TransactionsPage = () => {
  usePage({ title: "Billing" })
  const [isLoading, setLoading] = useState(true)
  const data = useMemo(
    () =>
      repeat(
        {
          due: new Date(),
          type: "Credit Note",
          ref: "EIL0026014",
          status: "Open",
          total: 100,
        },
        100
      ),
    []
  )

  const columns = useMemo(
    () =>
      [
        {
          Header: "Reference",
          accessor: "ref",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => (
            <Button
              to={`/transactions/${value}`}
              variant="link"
              size="sm"
              as={Link}
            >
              {value}
            </Button>
          ),
        },
        {
          Header: "Type",
          accessor: "type",
          disableFilters: true,
          disableSortBy: true,
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
          Header: "Due",
          accessor: "due",
          Cell: flow(prop<"value", Date>("value"), date.toDateString),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Total",
          accessor: "total",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => currency.toPounds(value),
        },
      ] as const,
    []
  )

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2}>
        Open Transactions
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
          <Icon as={RiBarChartGroupedLine} color="primary.500" fontSize="3xl" />
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
          <Icon as={RiBarChartGroupedLine} color="primary.500" fontSize="3xl" />
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
          <Icon as={RiBarChartGroupedLine} color="primary.500" fontSize="3xl" />
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
          <Icon as={RiBarChartGroupedLine} color="primary.500" fontSize="3xl" />
        </HStack>
      </Flex>
      <Flex justify="space-between" mb={6}>
        <Button leftIcon={<BiFilter />}>Filters</Button>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search for records" />
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

export default TransactionsPage
