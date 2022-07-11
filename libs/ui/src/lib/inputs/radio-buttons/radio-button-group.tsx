import {
  HStack,
  StackProps,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react"
import { omit, pick } from "ramda"
import { RadioButtonProps } from "./radio-button"
import { FC, ReactElement, cloneElement } from "react"

export type RadioButtonGroupOwnProps = {
  children: ReactElement<RadioButtonProps>[]
}

export type RadioButtonGroupProps = RadioButtonGroupOwnProps &
  StackProps &
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

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  children,
  ...props
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup(
    getRadioGroupProps(props)
  )
  const groupProps = getRootProps()

  return (
    <HStack {...omitRadioGroupProps(props)} {...groupProps}>
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
    </HStack>
  )
}
