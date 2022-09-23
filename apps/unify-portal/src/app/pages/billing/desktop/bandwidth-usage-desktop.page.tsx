import { useEffect, useMemo, useState } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { BiFilter } from "react-icons/bi"
import { flow } from "fp-ts/lib/function"
import { Page, Table, util } from "@ui/lib"
import repeat from "ramda/es/repeat"
import prop from "ramda/es/prop"
import {
  InputRightElement,
  InputGroup,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react"

const BandwidthUsageDesktopPage = () => {
  const [isLoading, setLoading] = useState(true)
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

  const columns = useMemo(
    () =>
      [
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
          Cell: ({ value }: any) => `${value} GB`,
        },
        {
          Header: "Remaining",
          accessor: "remaining",
          disableSortBy: true,
          disableFilters: true,
          Cell: ({ value }: any) => `${value} GB`,
        },
        {
          Header: "Next Bill Date",
          accessor: "billed_at",
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
      ] as const,
    []
  )

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

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

export default BandwidthUsageDesktopPage
