import { Box, Spacer } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { CrudTouchTemplate } from "@ui/lib"
import repeat from "ramda/es/repeat"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { FieldSearch } from "../../../../components/field-search/field-search"
import { SelectFilter } from "../../../../components/filters/select-filter"

const keys = [
  {
    label: "Customer Reference",
    accessor: "service_ref",
  },
  {
    label: "Product",
    accessor: "product",
  },
  {
    label: "Line Profile",
    accessor: "line_profile",
  },
  {
    label: "Contract Start",
    accessor: "contract_start",
  },
  {
    label: "Contract End",
    accessor: "contract_end",
  },
]

const ServicesTouchPage = () => {
  const data = useMemo(
    () =>
      repeat(
        {
          ref: "S123456",
          customer_ref: "S123456",
          status: "In Progress",
          product: "ftthl2r",
          line_profile: "N/A",
          contract_start: new Date().toLocaleDateString(),
          contract_end: new Date().toLocaleDateString(),
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
      title="Incidents"
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
          <Button variant="link" as={Link} to={`/incidents/${data?.["ref"]}`}>
            {data?.["ref"]}
          </Button>
          <Spacer />
          <Box w={3} h={3} bgColor="green.400" rounded="full" mr={4} />
        </>
      )}
      stats={[
        { label: "Total", value: 100 },
        { label: "Live", value: 64 },
        { label: "In Delivery", value: 18 },
        { label: "Ceased", value: 18 },
      ]}
      searchInput={
        <FieldSearch
          placeholder="Search services..."
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

export default ServicesTouchPage
