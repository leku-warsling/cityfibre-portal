import { Button, Box, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FieldSearch } from "../../../components/field-search/field-search"
import { SelectFilter } from "../../../components/filters/select-filter"
import { CrudTouchTemplate, util } from "@ui"
import { repeat } from "ramda"
import { useMemo } from "react"

const keys = [
  {
    label: "Payment Date",
    accessor: "payment_at",
  },
  {
    label: "Total",
    accessor: (data: any) => util.currency.pounds(data.total),
  },
]

const PaymentsTouchPage = () => {
  const data = useMemo(
    () =>
      repeat(
        {
          payment_at: new Date().toLocaleDateString(),
          ref: "PY0020699",
          status: "Deposited",
          total: 100,
        },
        10
      ),
    []
  )

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
      title="Payments"
      keys={keys}
      data={data}
      filters={filters}
      pagination={{
        limit: 10,
        page: 1,
        total: 10,
        limitOptions: [10, 20, 40, 50, 100],
      }}
      renderLabel={(data) => (
        <>
          <Button variant="link" as={Link} to={`/invoices/${data?.["ref"]}`}>
            {data?.["ref"]}
          </Button>
          <Spacer />
          <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
        </>
      )}
      searchInput={
        <FieldSearch
          placeholder="Search invoices..."
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

export default PaymentsTouchPage
