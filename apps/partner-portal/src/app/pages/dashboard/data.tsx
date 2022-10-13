import { flow } from "fp-ts/lib/function"
import prop from "ramda/es/prop"
import { Badge } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Link } from "react-router-dom"
import random from "lodash-es/random"
import { currency, date } from "@ui/lib/util"

const DateCell = flow(prop<"value", Date>("value"), date.toDateString)

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
  {
    Header: "Raised By",
    accessor: "raised_by",
    disableFilters: true,
    disableSortBy: true,
  },
] as const

export const INVOICE_DATA = [
  {
    id: "9NIC0U37",
    status: "Open",
    created_at: new Date(),
    expires_at: new Date(),
    total: 524.4,
  },
  {
    id: "9NIC0U37",
    status: "Open",
    created_at: new Date(),
    expires_at: new Date(),
    total: 524.4,
  },
  {
    id: "9NIC0U37",
    status: "Open",
    created_at: new Date(),
    expires_at: new Date(),
    total: 524.4,
  },
  {
    id: "9NIC0U37",
    status: "Open",
    created_at: new Date(),
    expires_at: new Date(),
    total: 524.4,
  },
  {
    id: "9NIC0U37",
    status: "Open",
    created_at: new Date(),
    expires_at: new Date(),
    total: 524.4,
  },
]

export const INVOICE_COLUMNS = [
  {
    Header: "Invoice #",
    accessor: "id",
    disableFilters: true,
    disableSortBy: true,
    Cell: ({ value }: any) => (
      <Button size="sm" as={Link} variant="link" to={`/incidents/${value}`}>
        {value}
      </Button>
    ),
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
    Header: "Date",
    accessor: "created_at",
    Cell: DateCell,
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Due",
    accessor: "expires_at",
    Cell: DateCell,
    disableFilters: true,
    disableSortBy: true,
  },
  {
    Header: "Total",
    accessor: "total",
    disableFilters: true,
    disableSortBy: true,
    Cell: ({ value }: any) => currency.toPounds(value),
  },
] as const

export const STATS_BAR = [
  {
    label: "Invoices",
    value: 400,
  },
  {
    label: "Credit Note",
    value: currency.toPounds(random(100000, 999999)),
  },
  {
    label: "Statements",
    value: 400,
  },
  {
    label: "Orders On Hold",
    value: 40,
  },
  {
    label: "Bandwidth Usage",
    value: "400GB",
  },
]
