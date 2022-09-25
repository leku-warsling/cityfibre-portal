import { SearchIcon } from "@chakra-ui/icons"
import { ChangeEvent, useRef } from "react"
import { BiCog, BiX } from "react-icons/bi"
import {
  InputRightElement,
  InputLeftElement,
  InputGroup,
  InputProps,
  Input,
} from "@chakra-ui/input"
import {
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
  Popover,
} from "@chakra-ui/popover"
import { RadioGroup, Radio } from "@chakra-ui/radio"
import { IconButton } from "@chakra-ui/button"
import { Portal } from "@chakra-ui/portal"
import { Flex } from "@chakra-ui/layout"

export type TableSearchOwnProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>, field: string) => void
  onFieldChange: (value: string, previous: string) => void
  defaultField?: string
  fields: {
    value?: any
    label: string
  }[]
}

export type TableSearchProps = Omit<InputProps, "onChange"> &
  TableSearchOwnProps

export const TableSearch = ({
  onFieldChange,
  defaultField,
  placeholder,
  fields = [],
  colorScheme,
  maxWidth,
  onChange,
  variant,
  size,
  ...props
}: TableSearchProps) => {
  const defaultValue = defaultField ?? fields[0].value
  const currentField = useRef<string>(defaultValue)

  return (
    <Popover matchWidth>
      <PopoverAnchor>
        <InputGroup
          size={size}
          variant={variant}
          colorScheme={colorScheme}
          maxWidth={maxWidth}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            placeholder={placeholder}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onChange(event, currentField.current)
            }}
            {...props}
          />
          <InputRightElement as={Flex} width="auto" gap={0} pr={1}>
            <IconButton
              aria-label="Select search field"
              _hover={{ color: "brand.600" }}
              colorScheme="gray"
              color="gray.400"
              icon={<BiX />}
              fontSize="18px"
              variant="text"
              size="xs"
              px={0}
            />

            <PopoverTrigger>
              <IconButton
                aria-label="Select search field"
                _hover={{ color: "brand.600" }}
                colorScheme="gray"
                color="gray.400"
                icon={<BiCog />}
                fontSize="18px"
                variant="text"
                size="xs"
              />
            </PopoverTrigger>
          </InputRightElement>
        </InputGroup>
      </PopoverAnchor>
      <Portal>
        <PopoverContent zIndex={10}>
          <RadioGroup
            defaultValue={defaultValue}
            display="flex"
            flexDir="column"
            fontWeight={600}
            gap={2}
            p={4}
            onChange={(field: string) => {
              onFieldChange(field, currentField.current)
              currentField.current = field
            }}
          >
            {fields.map(({ label, value }) => (
              <Radio key={value} value={value}>
                {label}
              </Radio>
            ))}
          </RadioGroup>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
