import { ReactNode } from "react"
import { ListProps, ListItemProps } from "@chakra-ui/react"
export interface Option {
  value?: number | string
  label: string
  [key: string]: any
}

export type AutocompleteProps = {
  onSearch?: (value: string) => Promise<Option[]>
  onChange?: (value: any) => void
  // onBlur?: () => void
  // onSelect?: () => void
  // groupBy?: string
  defaultValue?: string
  value?: string
  // isClearable?: boolean
  placeholder?: string
  isDisabled?: boolean
  options?: Option[]
  cacheOptions?: boolean
  noOptionsMessage?: ReactNode
  renderOption?: (opt: Option) => JSX.Element
}

export type AsyncAutocompleteProps = Omit<AutocompleteProps, "options"> & {
  loadOptions?: (callback: (opts: Option[]) => void) => void
}

export interface AutocompleteItemProps extends ListItemProps {
  isActive: boolean
}

export interface AutocompleteListProps extends ListProps {
  isOpen: boolean
}
