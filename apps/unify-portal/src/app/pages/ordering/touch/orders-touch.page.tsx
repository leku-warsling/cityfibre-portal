import { Button, Box, Spacer } from "@chakra-ui/react"
import { times } from "ramda"
import { Link } from "react-router-dom"
import { FieldSearch } from "../../../components/field-search/field-search"
import { SelectFilter } from "../../../components/filters/select-filter"
import { CrudTouchTemplate } from "@ui"
import { random } from "lodash-es"

const randomChar = () => {
  const chars = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  return chars.charAt(Math.floor(Math.random() * chars.length))
}

const createId = (s: string) => {
  return s.split("").reduce((str, char) => {
    switch (char) {
      case "#":
        return str + random(9)
      case "?":
        return str + randomChar()
      default:
        return str + char
    }
  }, "")
}
const createOrder = (n: number) => {
  return {
    id: n + 1,
    buyer_ref: createId("???######").toUpperCase(),
    status: "Committed",
    seller_ref: "STAGING00002205",
    service_ref: "S76626",
    product: "Residential FTTH",
    address: "163 Newport Road, Milton Keynes, MK13 0AJ",
    appointment_at: new Date().toLocaleDateString(),
    updated_at: new Date().toLocaleDateString(),
    ordered_at: new Date().toLocaleDateString(),
    ordered_by: "Sammy Walford",
  }
}

const keys = [
  {
    label: "Seller Reference",
    accessor: "seller_ref",
  },
  {
    label: "Service Reference",
    accessor: "service_ref",
  },
  {
    label: "Appointment Date",
    accessor: "appointment_at",
  },
  {
    label: "Ordered On",
    accessor: "ordered_at",
  },
  {
    label: "Last Updated",
    accessor: "updated_at",
  },
  {
    label: "Ordered By",
    accessor: "ordered_by",
  },
  {
    label: "Product",
    accessor: "product",
  },
  {
    label: "Address",
    accessor: "address",
  },
]

const OrdersTouchPage = () => {
  const orders = times(createOrder, 10)
  const filters = [
    <SelectFilter
      onSelect={
        (value) => {}
        // setParam("status", value as IncidentQuery["status"])
      }
      options={[
        { label: "All", value: undefined },
        { label: "New", value: "New" },
        { label: "In Progress", value: "In Progress" },
        { label: "Submitted", value: "Submitted" },
        { label: "Closed", value: "Closed" },
        { label: "Resolved", value: "Resolved" },
        { label: "Cancelled", value: "Cancelled" },
      ]}
    >
      Status
    </SelectFilter>,
  ]

  return (
    <CrudTouchTemplate
      title="Orders"
      keys={keys}
      data={orders}
      filters={filters}
      pagination={{
        limit: 10,
        page: 1,
        total: 10,
        limitOptions: [10, 20, 40, 50, 100],
      }}
      renderLabel={(data) => (
        <>
          <Button variant="link" as={Link} to={data?.["buyer_ref"]}>
            {data?.["buyer_ref"]}
          </Button>
          <Spacer />
          <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
        </>
      )}
      stats={[
        { label: "Total", value: 169 },
        { label: "In Progress", value: 58 },
        { label: "Completed", value: 58 },
        { label: "Cancelled", value: 58 },
      ]}
      searchInput={
        <FieldSearch
          placeholder="Search incidents..."
          onFieldChange={console.log}
          onChange={console.log}
          defaultField="q"
          bgColor="white"
          maxWidth="420px"
          minW="380px"
          fields={[
            { value: "q", label: "All" },
            { value: "ref_like", label: "Incident Reference" },
            { value: "service_ref_like", label: "Service Reference" },
            { value: "user.email_like", label: "Raised By" },
          ]}
        />
      }
    />
  )
}

export default OrdersTouchPage
