import { ChevronDownIcon } from "@chakra-ui/icons"
import { BsEye } from "react-icons/bs"
import {
  PopoverContent,
  PopoverTrigger,
  CheckboxGroup,
  PopoverBody,
  Checkbox,
  Popover,
  Button,
  Portal,
  VStack,
} from "@chakra-ui/react"

export type ColumnVisibilityProps = {
  onChange: (value: string[]) => void
  options: [string, string][]
  value: string[]
}

export const ColumnVisibility = ({
  options,
  onChange,
  value,
}: ColumnVisibilityProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          rightIcon={<ChevronDownIcon fontSize="xl" />}
          leftIcon={<BsEye />}
          variant="outline"
        >
          Columns
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverBody p={4}>
            <CheckboxGroup onChange={onChange} value={value}>
              <VStack spacing={4} align="flex-start">
                {options.map(([value, label]) => (
                  <Checkbox key={value} value={value}>
                    {label}
                  </Checkbox>
                ))}
              </VStack>
            </CheckboxGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}
