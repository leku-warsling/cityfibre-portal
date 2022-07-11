import { AddIcon, SearchIcon } from "@chakra-ui/icons"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { useEffect, useMemo, useState } from "react"
import { BiFilter } from "react-icons/bi"
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

export const ServicesPage = () => {
  const [isLoading, setLoading] = useState(true)
  const data = useMemo(
    () =>
      repeat(
        {
          ref: "S123456",
          customer_ref: "S123456",
          status: "In Progress",
          product: "ftthl2r",
          line_profile: "N/A",
          contract_start: new Date(),
          contract_end: new Date(),
        },
        100
      ),
    []
  )

  const columns = useMemo(
    () =>
      [
        {
          Header: "Service Reference",
          accessor: "ref",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => (
            <Button
              to={`/services/${value}`}
              variant="link"
              size="sm"
              as={Link}
            >
              {value}
            </Button>
          ),
        },
        {
          Header: "Customer Reference",
          accessor: "customer_ref",
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
          Header: "Product",
          accessor: "product",
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Line Profile",
          accessor: "line_profile",
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Contract Start",
          accessor: "contract_start",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Contract End",
          accessor: "contract_end",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
      ] as const,
    []
  )

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      alignItems="center"
      as={Link}
    >
      Raise an incident
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2} actions={actions}>
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
            169
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
            58
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
            32
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
            32
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
          <Input placeholder="Search services" />
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
