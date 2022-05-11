import { Box, BoxProps, useRadio, UseRadioProps } from "@chakra-ui/react"
import { omit, pick } from "ramda"
import { FC } from "react"

export type RadioButtonOwnProps = {}

export type RadioButtonProps = RadioButtonOwnProps & BoxProps & UseRadioProps

const RADIO_BUTTON_PROPS = [
  "id",
  "name",
  "value",
  "isChecked",
  "defaultChecked",
  "isDisabled",
  "isFocusable",
  "isReadOnly",
  "isInvalid",
  "onChange",
  "data-radiogroup",
  "aria-describedby",
]

const getRadioProps = pick(RADIO_BUTTON_PROPS)
const omitRadioProps = omit(RADIO_BUTTON_PROPS)

const RadioButton: FC<RadioButtonProps> = ({ children, ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio(getRadioProps(props))
  const inputProps = getInputProps()
  const checkboxProps = {
    ...omitRadioProps(props),
    ...getCheckboxProps(),
  }

  return (
    <Box as="label">
      <input {...inputProps} />
      <Box
        border="2px solid"
        borderColor="gray.300"
        rounded={4}
        px={4}
        py={2}
        textAlign="center"
        textTransform="capitalize"
        _checked={{
          bg: "brand.500",
          color: "white",
          borderColor: "brand.500",
        }}
        {...checkboxProps}
      >
        {children}
      </Box>
    </Box>
  )
}

export default RadioButton
