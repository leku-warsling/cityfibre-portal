import { usePage } from "../../hooks/use-page.hook"
import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { BiFilter } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui"
import { prop, repeat } from "ramda"
import {
  InputRightElement,
  InputGroup,
  Button,
  Badge,
  Input,
  Flex,
} from "@chakra-ui/react"

export const InvoicesPage = () => {
  usePage({ title: "Billing" })
  const [isLoading, setLoading] = useState(true)
  const data = useMemo(
    () =>
      repeat(
        {
          due: new Date(),
          created_at: new Date(),
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
              to={`/invoices/${value}`}
              variant="link"
              size="sm"
              as={Link}
            >
              {value}
            </Button>
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
          Header: "Date",
          accessor: "created_at",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Due",
          accessor: "due",
          Cell: flow(
            prop<"value", string>("value"),
            util.date.formatDateString("dd/MM/yyyy")
          ),
          disableFilters: true,
          disableSortBy: true,
        },
        {
          Header: "Total",
          accessor: "total",
          disableFilters: true,
          disableSortBy: true,
          Cell: ({ value }: any) => util.currency.pounds(value),
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
        Invoices
      </Page.Header>
      <Flex justify="space-between" mb={6}>
        <Button leftIcon={<BiFilter />}>Filters</Button>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search invoices" />
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
