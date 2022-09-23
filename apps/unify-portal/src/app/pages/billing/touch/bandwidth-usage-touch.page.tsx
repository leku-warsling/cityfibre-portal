import { FieldSearch } from "../../../components/field-search/field-search"
import { SelectFilter } from "../../../components/filters/select-filter"
import { CrudTouchTemplate } from "@ui/lib"
import repeat from "ramda/es/repeat"
import { useMemo } from "react"

const keys = [
  {
    label: "Product",
    accessor: "product",
  },
  {
    label: "Allowance",
    accessor: (data: any) => `${data.allowance} GB`,
  },
  {
    label: "Remaining",
    accessor: (data: any) => `${data.remaining} GB`,
  },
  {
    label: "Next Bill Date",
    accessor: "billed_at",
  },
  {
    label: "Last Updated",
    accessor: "updated_at",
  },
]

const BandwidthUsageTouchPage = () => {
  const data = useMemo(
    () =>
      repeat(
        {
          account: "ADSL299895",
          product: "Business Unlimited",
          allowance: 50000000,
          remaining: 40000000,
          billed_at: new Date().toLocaleDateString(),
          updated_at: new Date().toLocaleDateString(),
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
      title="Bandwidth Usage"
      keys={keys}
      data={data}
      filters={filters}
      pagination={{
        limit: 10,
        page: 1,
        total: 10,
        limitOptions: [10, 20, 40, 50, 100],
      }}
      renderLabel={(data) => data?.["account"]}
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

export default BandwidthUsageTouchPage
