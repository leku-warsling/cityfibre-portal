import { useEffect, useMemo, useState } from "react"
import { AddIcon, SearchIcon } from "@chakra-ui/icons"
import {
  Badge,
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { INCIDENT_DATA } from "./data"
import { prop } from "ramda"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { BiFilter } from "react-icons/bi"

export const IncidentPage = () => {
  const [isLoading, setLoading] = useState(true)

  const columns = useMemo(
    () =>
      [
        {
          Header: "Incident Reference",
          accessor: "ref",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => (
            <Button
              size="sm"
              as={Link}
              variant="link"
              to={`/incidents/${value}`}
            >
              {value}
            </Button>
          ),
        },
        {
          Header: "Service Reference",
          accessor: "service_ref",
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Status",
          accessor: "status",
          disableSortBy: true,
          disableFilters: true,
          Cell: ({ value }: any) => (
            <Badge colorScheme="green" rounded={4} px={2} py={0.5}>
              {value}
            </Badge>
          ),
        },
        {
          Header: "Date Raised",
          accessor: "raised_at",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Last Updated",
          accessor: "updated_at",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Raised By",
          accessor: "raised_by",
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
        Incidents
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
            Total Incidents
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
            Total Services
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
            Ongoing Services
          </Text>
          <Spacer />
          <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
        </HStack>
      </Flex>
      <Flex justify="space-between" mb={6}>
        <Button leftIcon={<BiFilter />}>Filters</Button>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search incidents" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
        </InputGroup>
      </Flex>
      <Table
        isLoading={isLoading}
        data={INCIDENT_DATA}
        columns={columns}
        boxShadow="base"
        overflowY="auto"
        bgColor="white"
        isPaginated
        rounded={5}
        maxH="80vh"
        size="md"
      />
    </Page>
  )
}
