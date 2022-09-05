import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import { RadioButton } from "./radio-button"
import { RadioButtonGroup } from "./radio-button-group"
import { useState } from "react"
import { is } from "ramda"

export default {
  title: "Components / Forms / Radio Buttons",
  component: RadioButton,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: "200px",
  isChecked: false,
  isInvalid: false,
  isDisabled: false,
  children: "Option",
}

export const Group = () => {
  const [value, setValue] = useState<string>(null!)

  return (
    <RadioButtonGroup
      onChange={(val) => {
        is(String, val) && setValue(val)
      }}
      name="option"
      value={value}
    >
      <RadioButton value="option 1">Option 1</RadioButton>
      <RadioButton value="option 2">Option 2</RadioButton>
      <RadioButton value="option 3">Option 3</RadioButton>
    </RadioButtonGroup>
  )
}
