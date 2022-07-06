import { flow } from "fp-ts/lib/function"
import { prop } from "ramda"
import { util } from "@ui"
import { Badge, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const INCIDENT_DATA = [
  {
    ref: "INC0091712",
    service_ref: "S1234567",
    status: "new",
    raised_at: new Date(),
    updated_at: new Date(),
    raised_by: "isabelle.mccabe@cityfibre.com",
  },
  {
    ref: "INC0091712",
    service_ref: "S1234567",
    status: "new",
    raised_at: new Date(),
    updated_at: new Date(),
    raised_by: "isabelle.mccabe@cityfibre.com",
  },
  {
    ref: "INC0091712",
    service_ref: "S1234567",
    status: "new",
    raised_at: new Date(),
    updated_at: new Date(),
    raised_by: "isabelle.mccabe@cityfibre.com",
  },
  {
    ref: "INC0091712",
    service_ref: "S1234567",
    status: "new",
    raised_at: new Date(),
    updated_at: new Date(),
    raised_by: "isabelle.mccabe@cityfibre.com",
  },
  {
    ref: "INC0091712",
    service_ref: "S1234567",
    status: "new",
    raised_at: new Date(),
    updated_at: new Date(),
    raised_by: "isabelle.mccabe@cityfibre.com",
  },
]

export const INCIDENT_COLUMNS = [
  {
    Header: "Incident Ref",
    accessor: "ref",
    disableFilters: true,
    disableSortBy: true,
    Cell: ({ value }: any) => (
      <Button size="sm" as={Link} variant="link" to={`/incidents/${value}`}>
        {value}
      </Button>
    ),
  },
  {
    Header: "Service Ref",
    accessor: "service_ref",
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: any) => (
      <Badge colorScheme="green" rounded={4} px={2} py={0.5}>
        {value}
      </Badge>
    ),
    disableFilters: true,
    disableSortBy: true,
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
] as const
