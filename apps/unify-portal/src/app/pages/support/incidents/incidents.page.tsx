import { useMemo, useState } from "react"
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
import { mergeLeft, prop } from "ramda"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { BiFilter } from "react-icons/bi"
import { useIncidents } from "../../../hooks/use-incidents.hook"
import { Statistic } from "../../../components/statistic"

const initialState = {
  _page: 0,
  _limit: 10,
  _sort: "ref",
  _order: "asc",
}

const calcPageCount = (count = 0, limit = 10) => {
  return count ? Math.ceil(count / limit) : undefined
}

export const IncidentsPage = () => {
  const [params, setParams] = useState(initialState)
  const { data, isLoading, isFetching, isSuccess } = useIncidents(params)

  const pageCount = useMemo(() => {
    return isSuccess ? calcPageCount(data?.total, params._limit) : undefined
  }, [isSuccess, data?.total, params._limit])

  console.log(data)
  console.log(pageCount)
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
          accessor: "service_reference",
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
          accessor: "created_at",
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
          id: "email",
          Header: "Raised By",
          accessor: (row: any) => {
            console.log(row)
            return row?.user?.email ?? ""
          },
          disableFilters: true,
          disableSortBy: true,
        },
      ] as const,
    []
  )

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
        <Statistic
          icon={RiBarChartGroupedLine}
          label="Total incidents"
          value={169}
        />
        <Statistic
          icon={RiBarChartGroupedLine}
          label="Open incidents"
          value={58}
        />
        <Statistic
          icon={RiBarChartGroupedLine}
          label="Resolved incidents"
          value={32}
        />
        <Statistic
          icon={RiBarChartGroupedLine}
          label="Closed incidents"
          value={32}
        />
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
        isFetching={isFetching}
        columns={columns}
        boxShadow="base"
        overflowY="auto"
        bgColor="white"
        data={data?.items ?? []}
        isPaginated
        manualPagination
        initialState={{
          pageIndex: params._page,
          pageSize: params._limit,
          sortBy: [
            {
              id: "ref",
              desc: false,
            },
          ],
        }}
        onPaginate={({ pageIndex, pageSize }) =>
          setParams(
            mergeLeft({
              _page: pageIndex,
              _limit: pageSize,
            })
          )
        }
        onSort={({ id, desc }) =>
          setParams(
            mergeLeft({
              _sort: id ?? "topic_name",
              _order: desc ? "desc" : "asc",
            })
          )
        }
        pageCount={pageCount}
        rounded={5}
        maxH="80vh"
        size="md"
      />
    </Page>
  )
}
