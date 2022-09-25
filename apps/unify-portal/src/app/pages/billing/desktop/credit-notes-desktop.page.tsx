import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { BiFilter } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Link } from "react-router-dom"
import { Page, Table, util } from "@ui/lib"
import repeat from "ramda/es/repeat"
import prop from "ramda/es/prop"
import { InputRightElement, InputGroup, Input } from "@chakra-ui/input"
import { Badge, Flex } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

const DateCell = flow(prop<"value", Date>("value"), util.date.toDateString)

const CreditNotesDesktopPage = () => {
  const [isLoading, setLoading] = useState(true)
  const data = useMemo(
    () =>
      repeat(
        {
          payment_at: new Date(),
          ref: "EIL0026014",
          status: "Fully Applied",
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
            <Badge colorScheme="green" rounded={4} px={2} py={0.5}>
              {value}
            </Badge>
          ),
        },
        {
          Header: "Payment Date",
          accessor: "payment_at",
          Cell: DateCell,
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
        Credit Notes
      </Page.Header>
      <Flex justify="space-between" mb={6}>
        <Button leftIcon={<BiFilter />}>Filters</Button>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search credit notes" />
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

export default CreditNotesDesktopPage
