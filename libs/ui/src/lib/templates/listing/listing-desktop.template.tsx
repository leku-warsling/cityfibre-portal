import { Flex, Spacer } from "@chakra-ui/react"
import assoc from "ramda/es/assoc"
import difference from "ramda/es/difference"
import { useMemo, useState } from "react"
import { Page } from "../../layout"
import {
  ColumnFilter,
  ColumnVisibility,
  Table,
  TableSearch,
  TableStatistic,
} from "../../table"
import { ListingTemplateProps } from "./listing.types"

const ListingDesktopTemplate = <D extends object>({
  filters = [],
  stats = [],
  columns,
  search,
  page,
  ...props
}: ListingTemplateProps<D>) => {
  const COLUMN_MAP = useMemo(
    () =>
      columns.reduce((m, item) => {
        const key = ("id" in item ? item.id : item.accessor) as string
        return assoc(key, item.Header, m)
      }, {}),
    []
  )

  const COLUMN_KEYS = Object.keys(COLUMN_MAP)
  const [visibleColumns, setVisibleColumns] = useState(COLUMN_KEYS)
  const hiddenColumns = difference(COLUMN_KEYS, visibleColumns)

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header actions={page.actions} mb={6}>
        {page.title}
      </Page.Header>
      <Flex gap={6} width="100%" mb={6}>
        {stats.map((stat, index) => (
          <TableStatistic key={index} label={stat.label} value={stat.value} />
        ))}
      </Flex>
      <Flex align="center" gap={4} mb={6}>
        <ColumnVisibility
          onChange={setVisibleColumns}
          value={visibleColumns}
          options={Object.entries(COLUMN_MAP)}
        />
        {filters.map((f, index) => (
          <ColumnFilter key={index} onSelect={f.onSelect} options={f.options}>
            {f.label}
          </ColumnFilter>
        ))}
        <Spacer />
        {search && (
          <TableSearch
            placeholder={search.placeholder ?? "Enter a search term..."}
            defaultField={search.defaultField}
            onFieldChange={search.onFieldChange}
            fields={search.fields}
            onChange={search.onSearch}
            maxWidth="400px"
            bgColor="white"
          />
        )}
      </Flex>
      <Table hiddenColumns={hiddenColumns} columns={columns} {...props} />
    </Page>
  )
}

ListingDesktopTemplate.defaultProps = {
  overflowY: "auto",
  boxShadow: "base",
  bgColor: "white",
  isSticky: true,
  maxH: "80vh",
  rounded: 5,
} as const

export default ListingDesktopTemplate
