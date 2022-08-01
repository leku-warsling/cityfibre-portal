import {
  SimpleGrid,
  SimpleGridProps,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react"
import { omit, pick } from "ramda"
import { RadioButtonProps } from "./radio-button"
import { ReactElement, cloneElement } from "react"

export type RadioButtonGroupOwnProps = {
  children: ReactElement<RadioButtonProps>[]
}

export type RadioButtonGroupProps = RadioButtonGroupOwnProps &
  SimpleGridProps &
  UseRadioGroupProps

const RADIO_GROUP_PROPS = [
  "value",
  "defaultValue",
  "onChange",
  "isDisabled",
  "isFocusable",
  "name",
  "isNative",
]

const getRadioGroupProps = pick(RADIO_GROUP_PROPS)
const omitRadioGroupProps = omit(RADIO_GROUP_PROPS)

export const RadioButtonGroup = ({
  children,
  columns,
  spacing = 4,
  ...props
}: RadioButtonGroupProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup(
    getRadioGroupProps(props)
  )
  const groupProps = getRootProps()

  return (
    <SimpleGrid
      columns={columns ?? children.length}
      spacing={spacing}
      {...omitRadioGroupProps(props)}
      {...groupProps}
    >
      {children.map((child) => {
        const value = child.props.value

        // @ts-ignore
        const radioProps = getRadioProps({
          key: value,
          ...child.props,
          value,
        })

        // @ts-ignore
        return cloneElement(child, radioProps)
      })}
    </SimpleGrid>
  )
}
