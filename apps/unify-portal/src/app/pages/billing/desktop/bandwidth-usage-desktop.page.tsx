import { useMemo } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { BiFilter } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Page, Table, util } from "@ui/lib"
import repeat from "ramda/es/repeat"
import prop from "ramda/es/prop"
import { Flex } from "@chakra-ui/layout"
import { InputRightElement, InputGroup, Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"

const DateCell = flow(prop<"value", Date>("value"), util.date.toDateString)

const DataMetricCell = ({ value }: any) => `${value} GB`

const TABLE_COLUMNS = [
  {
    Header: "Account",
    accessor: "account",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Product",
    accessor: "product",
    disableSortBy: true,
    disableFilters: true,
  },
  {
    Header: "Allowance",
    accessor: "allowance",
    disableSortBy: true,
    disableFilters: true,
    Cell: DataMetricCell,
  },
  {
    Header: "Remaining",
    accessor: "remaining",
    disableSortBy: true,
    disableFilters: true,
    Cell: DataMetricCell,
  },
  {
    Header: "Next Bill Date",
    accessor: "billed_at",
    Cell: DateCell,
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Last Updated",
    accessor: "updated_at",
    Cell: DateCell,
    disableFilters: true,
    disableSortBy: true,
  },
] as const

const BandwidthUsageDesktopPage = () => {
  const data = useMemo(
    () =>
      repeat(
        {
          account: "ADSL299895",
          product: "Business Unlimited",
          allowance: 50000000,
          remaining: 40000000,
          billed_at: new Date(),
          updated_at: new Date(),
        },
        100
      ),
    []
  )

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2}>
        Bandwidth Usage
      </Page.Header>
      <Flex justify="space-between" mb={6}>
        <Button leftIcon={<BiFilter />}>Filters</Button>
        <InputGroup maxW="320px" bgColor="white">
          <Input placeholder="Search bandwidth usage" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
        </InputGroup>
      </Flex>
      <Table
        columns={TABLE_COLUMNS}
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

export default BandwidthUsageDesktopPage
