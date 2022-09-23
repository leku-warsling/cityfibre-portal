import * as React from "react"
import { Stack, Container, VStack } from "@chakra-ui/layout"
import { Radio, RadioGroup } from ".."
import { get } from "lodash-es"
import { Button } from "@chakra-ui/react"

export default {
  title: "Components / Forms / Radio",
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
}

export const States = () => (
  <VStack alignItems="flex-start" spacing={6}>
    <Radio size="lg" isChecked>
      Checked
    </Radio>
    <Radio size="lg" isInvalid>
      Invalid
    </Radio>
    <Radio size="lg" isDisabled>
      Disabled
    </Radio>
    <Radio isChecked isReadOnly size="lg" colorScheme="primary">
      Readonly
    </Radio>
  </VStack>
)

export const sizes = () => {
  const sizes = ["sm", "md", "lg"]
  const sizeNames = {
    sm: "Small",
    md: "Medium",
    lg: "Large",
  }

  return (
    <>
      {sizes.map((size) => (
        <Radio
          key={size}
          size={size}
          name="sample"
          ml="1rem"
          colorScheme="green"
        >
          {get(sizeNames, size)}
        </Radio>
      ))}
    </>
  )
}

export const _RadioGroup = () => {
  const [value, setValue] = React.useState("")
  return (
    <>
      <RadioGroup value={value} onChange={setValue} mb="6">
        <Stack>
          <Radio value="Option 1">Option 1</Radio>
          <Radio value="Option 2">Option 2</Radio>
          <Radio value="Option 3">Option 3</Radio>
        </Stack>
      </RadioGroup>
      <Button onClick={() => setValue("")}>Clear</Button>
    </>
  )
}
