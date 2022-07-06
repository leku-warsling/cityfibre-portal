import { Dropdown } from "../../dropdown"
import { FC, ReactElement, ReactNode, useRef, useState } from "react"
import {
  InputRightElement,
  useDisclosure,
  InputGroup,
  StyleProps,
  Button,
  Input,
} from "@chakra-ui/react"
import { isFunction } from "ramda-adjunct"

export type SearchOption = {
  label: string
  [key: string]: any
}

export type SearchInputProps = {
  renderItem?: (item: SearchOption) => ReactNode
  onSearch?: (term: string) => Promise<SearchOption[]>
  onSelect?: (item: SearchOption) => void
  placeholder?: string
  icon?: ReactElement
  label?: string
}

export const SearchInput: FC<SearchInputProps & StyleProps> = ({
  placeholder,
  renderItem,
  onSelect,
  onSearch,
  label,
  ...styleProps
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)
  const [items, setItems] = useState<SearchOption[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const labelLength = label?.length ?? 0
  const rightElementWidth = `${Math.ceil(labelLength * 8.3 + 24)}px`

  const _onSearch = () => {
    const value = inputRef.current?.value
    if (!onSearch || !value) return
    setLoading(true)
    onSearch(value)
      .then(setItems)
      .finally(() => {
        setLoading(false)
        onOpen()
      })
  }

  const menu = items && (
    <Dropdown.Menu>
      {items.map((item) => (
        <Dropdown.Item
          onClick={() => {
            isFunction(onSelect) && onSelect(item)
            onClose()
          }}
        >
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  )

  return (
    <Dropdown
      initialFocusRef={inputRef}
      onClose={onClose}
      isOpen={isOpen}
      onOpen={onOpen}
      overlay={menu}
    >
      <InputGroup {...styleProps} size="lg">
        <Input ref={inputRef} placeholder={placeholder} />
        <InputRightElement width={rightElementWidth}>
          <Button
            isLoading={isLoading}
            colorScheme="brand"
            onClick={_onSearch}
            size="sm"
          >
            {label}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Dropdown>
  )
}

SearchInput.defaultProps = {
  width: "100%",
}
