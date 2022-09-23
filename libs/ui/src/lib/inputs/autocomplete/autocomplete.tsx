import { ChevronDownIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Spinner } from "@chakra-ui/spinner"
import { Flex } from "@chakra-ui/layout"
import { useCombobox } from "downshift"
import memoize from "fast-memoize"
import { flow } from "fp-ts/lib/function"
import debounce from "lodash-es/debounce"
import { matchSorter } from "match-sorter"
import equals from "ramda/es/equals"
import omit from "ramda/es/omit"
import pick from "ramda/es/pick"
import { FC, useMemo, useState } from "react"
import AutocompleteItem from "./autocomplete-item"
import AutocompleteList from "./autocomplete-list"
import { AutocompleteProps, Option } from "./types"

const filterOptions = memoize((opts: Option[], str: string) =>
  matchSorter(opts, str, { keys: ["label"] })
)

const inputProps = ["placeholder", "isDisabled", "value", "defaultValue"]

export const Autocomplete: FC<AutocompleteProps> = ({
  options = [],
  onSearch,
  onChange,
  renderOption,
  ...props
}) => {
  const [items, setItems] = useState<Option[]>(options)
  const [isLoading, setLoading] = useState<boolean>(false)

  const searchHandler = useMemo(() => {
    return debounce(({ inputValue }) => {
      if (!inputValue?.trim()) return
      if (!onSearch) return setItems(filterOptions(options, inputValue))
      setLoading(true)
      onSearch(inputValue)
        .then(setItems)
        .finally(() => setLoading(false))
    }, 300)
  }, [])

  const {
    getToggleButtonProps,
    highlightedIndex,
    getComboboxProps,
    getMenuProps,
    getItemProps,
    isOpen,
    ...comboboxProps
  } = useCombobox({
    items,
    itemToString: (item) => (item ? item.label : ""),
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem && onChange) onChange(omit(["label"], selectedItem))
    },
    onInputValueChange: searchHandler,
  })

  const isActive = equals(highlightedIndex)
  const getInputProps = flow(pick(inputProps), comboboxProps.getInputProps)
  const indicator = isLoading ? <Spinner size="sm" /> : <ChevronDownIcon />

  // TODO: clear icon and functionality

  return (
    <Flex {...getComboboxProps()} direction="column" pos="relative">
      <InputGroup>
        <Input {...getInputProps(props)} />
        <InputRightElement {...getToggleButtonProps()}>
          {indicator}
        </InputRightElement>
      </InputGroup>
      <AutocompleteList isOpen={isOpen} {...getMenuProps()}>
        {items.map((item, index) => (
          <AutocompleteItem
            key={`${item.label}-${index}`}
            isActive={isActive(index)}
            {...getItemProps({ item, index })}
          >
            {renderOption ? renderOption(item) : item.label}
          </AutocompleteItem>
        ))}
      </AutocompleteList>
    </Flex>
  )
}

Autocomplete.defaultProps = {
  noOptionsMessage: "No options found",
  placeholder: "Enter search text",
  isDisabled: false,
}
