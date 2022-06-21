import { Story, Meta } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import DatePicker, { DatePickerProps } from "./date-picker"
import FocusLock from "react-focus-lock"
import { useState } from "react"

export default {
  title: "Components / Forms / DatePicker",
  component: DatePicker,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <FocusLock>
        <Container mt="40px">{story()}</Container>
      </FocusLock>
    ),
  ],
} as Meta<DatePickerProps>

const Template: Story<DatePickerProps> = (args) => {
  const [value, setValue] = useState(new Date())
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(value: Date) => setValue(value)}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {}
