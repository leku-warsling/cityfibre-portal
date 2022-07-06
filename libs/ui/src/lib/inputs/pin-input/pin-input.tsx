import {
  PinInputProps as ChakraPinInputProps,
  PinInput as ChakraPinInput,
  PinInputField,
  HStack,
  StackProps,
} from "@chakra-ui/react"
import { range } from "ramda"

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

console.log(PinInput)
