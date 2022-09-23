import { AddIcon } from "@chakra-ui/icons"
import { Box, Button, Spacer } from "@chakra-ui/react"
import { CrudTouchTemplate } from "@ui/lib"
import take from "ramda/es/take"
import { Link } from "react-router-dom"
import { FieldSearch } from "../../../../components/field-search/field-search"
import { SelectFilter } from "../../../../components/filters/select-filter"
import { INCIDENT_DATA } from "../data"

const keys = [
  {
    label: "Service Reference",
    accessor: "service_ref",
  },
  {
    label: "Date Raised",
    accessor: (data: any) => data?.["raised_at"].toLocaleDateString(),
  },
  {
    label: "Last Updated",
    accessor: (data: any) => data?.["updated_at"].toLocaleDateString(),
  },
  {
    label: "Raised By",
    accessor: "raised_by",
  },
]

const IncidentsTouchPage = () => {
  const actions = [
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      alignItems="center"
      size="sm"
      as={Link}
    >
      Raise an incident
    </Button>,
  ]

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
      data={take(10, INCIDENT_DATA)}
      filters={filters}
      actions={actions}
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
        { label: "Open", value: 64 },
        { label: "Resolved", value: 18 },
        { label: "Closed", value: 18 },
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

export default IncidentsTouchPage
