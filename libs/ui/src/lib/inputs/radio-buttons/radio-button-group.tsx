import { SimpleGrid, SimpleGridProps } from "@chakra-ui/layout"
import { useRadioGroup, UseRadioGroupProps } from "@chakra-ui/radio"
import omit from "ramda/es/omit"
import pick from "ramda/es/pick"
import { cloneElement, ReactElement } from "react"
import { RadioButtonProps } from "./radio-button"

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

  return (
    <SimpleGrid
      columns={columns ?? children.length}
      spacing={spacing}
      {...omitRadioGroupProps(props)}
      {...getRootProps()}
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
