import { InputProps } from "@chakra-ui/input"

export type DatePickerOwnProps = {
  format?: string
  mask?: string
  defaultValue?: string
  value?: string
  min?: string
  max?: string
  onChange: (value?: Date) => void
}

export type DatePickerProps = InputProps & DatePickerOwnProps
