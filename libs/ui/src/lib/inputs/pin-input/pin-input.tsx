import { HStack, StackProps } from "@chakra-ui/layout"
import {
  PinInput as ChakraPinInput,
  PinInputField,
  PinInputProps as ChakraPinInputProps,
} from "@chakra-ui/pin-input"
import range from "ramda/es/range"

export type PinInputOwnProps = {
  length: number
}

export type PinInputProps = Pick<StackProps, "align" | "justify"> &
  Omit<ChakraPinInputProps, "children"> &
  PinInputOwnProps

export const PinInput = ({
  justify,
  length,
  align,
  ...props
}: PinInputProps) => {
  return (
    <HStack align={align} justify={justify}>
      <ChakraPinInput {...props}>
        {range(0, length).map((idx) => (
          <PinInputField key={idx} />
        ))}
      </ChakraPinInput>
    </HStack>
  )
}
