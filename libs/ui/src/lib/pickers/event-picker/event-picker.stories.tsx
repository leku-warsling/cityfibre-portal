import { Box, Container } from "@chakra-ui/react"
import { Story, Meta } from "@storybook/react"
import FocusLock from "react-focus-lock"
import { faker } from "@faker-js/faker"
import { useState } from "react"
import EventPicker, {
  EventPickerProps,
  EventOption,
  EventOptionId,
} from "./event-picker"
import { addDays, addHours } from "date-fns"
import { nanoid } from "nanoid"
import { append, curry, range, times } from "ramda"

const createEvent = curry((date: Date, offset: number): EventOption => {
  const startAt = addHours(date, offset)
  return {
    title: faker.name.jobTitle(),
    endAt: addHours(startAt, 1),
    id: nanoid(),
    startAt,
  }
})

function later<T>(delay: number, value: T) {
  return new Promise<T>((resolve) => setTimeout(resolve, delay, value))
}

export default {
  title: "Components / Forms / EventPicker",
  component: EventPicker,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <FocusLock>
        <Container mt="40px" maxWidth="6xl">
          {story()}
        </Container>
      </FocusLock>
    ),
  ],
} as Meta<EventPickerProps>

const Template: Story<EventPickerProps> = (args) => {
  const [value, setValue] = useState([])
  const onSelect = (value: EventOptionId) => {
    setValue(append(value))
  }
  return (
    <Box bgColor="white" px={10} pt={6} pb={10} boxShadow="base" rounded={4}>
      <EventPicker {...args} value={value} onSelect={onSelect} />
    </Box>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  options: range(0, 42).flatMap((n) => {
    const date = new Date(new Date().setHours(9, 0))
    return times(createEvent(addDays(date, n)), 9)
  }),
  onSearch: (value) => {
    const date = new Date(value.setHours(9, 0))
    return later(3000, times(createEvent(date), 9))
  },
}
