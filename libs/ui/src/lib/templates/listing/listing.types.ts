import { ChangeEvent } from "react"
import { PageHeaderProps } from "../../layout"
import { ColumnFilterProps, TableProps, TableStatisticProps } from "../../table"

type Option = {
  label: string
  value?: any
}

export type TableSearchConfig = {
  onSearch: (event: ChangeEvent<HTMLInputElement>, field: string) => void
  onFieldChange: (newField: string, currentField: string) => void
  defaultField?: string
  placeholder?: string
  fields: Option[]
}

export type ListingTemplateOwnProps = {
  filters?: (ColumnFilterProps & { label: string })[]
  stats?: (TableStatisticProps & { label: string })[]
  search?: TableSearchConfig
  page: {
    actions: PageHeaderProps["actions"]
    title: string
  }
}

export type ListingTemplateProps<D extends object> = ListingTemplateOwnProps &
  TableProps<D>
