import { SmallCloseIcon, SearchIcon } from "@chakra-ui/icons"
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
} from "@chakra-ui/input"
import { IconButton } from "@chakra-ui/button"
import { FC, useMemo, useRef } from "react"

export type SearchInputProps = InputProps & {
  onSearch: (val: string) => void
  allowClear?: boolean
}

export const SearchInput: FC<SearchInputProps> = ({
  onSearch,
  allowClear = false,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)

  const onClear = useMemo(() => {
    return () => {
      const { current } = ref
      if (!current) return
      current.value = ""
      onSearch("")
      current.focus()
    }
  }, [])

  // const _onSearch: ChangeEventHandler<HTMLInputElement> = ({
  //   currentTarget,
  // }) => {
  //   const { value } = currentTarget
  //   onSearch(value)
  // }

  return (
    <InputGroup maxW="980px">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.400" />}
      />
      <Input
        ref={ref}
        onChange={({ currentTarget }) => onSearch(currentTarget.value)}
        {...props}
      />
      {allowClear && (
        <InputRightElement>
          <IconButton
            variant="ghost"
            onClick={onClear}
            aria-label="clear input"
            icon={<SmallCloseIcon />}
            size="sm"
            rounded="full"
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}
