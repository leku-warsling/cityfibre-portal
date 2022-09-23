import { Box, Container } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { Meta, Story } from "@storybook/react"
import addDays from "date-fns/addDays"
import addHours from "date-fns/addHours"
import { nanoid } from "nanoid"
import append from "ramda/es/append"
import curry from "ramda/es/curry"
import range from "ramda/es/range"
import times from "ramda/es/times"
import { useState } from "react"
import FocusLock from "react-focus-lock"
import { later } from "../../util/async.util"
import {
  EventOption,
  EventOptionId,
  EventPicker,
  EventPickerProps,
} from "./event-picker"

const createEvent = curry((date: Date, offset: number): EventOption => {
  const startAt = addHours(date, offset)
  return {
    title: faker.name.jobTitle(),
    endAt: addHours(startAt, 1),
    id: nanoid(),
    startAt,
  }
})

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
