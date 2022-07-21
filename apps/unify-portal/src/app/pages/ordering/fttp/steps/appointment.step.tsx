import { EventOption, EventPicker, FormItem } from "@ui"
import { VStack } from "@chakra-ui/react"
import { curry, range, times } from "ramda"
import { addDays, addHours } from "date-fns"
import { nanoid } from "nanoid"

const defaultValues = {}

const createEvent = curry((date: Date, offset: number): EventOption => {
  const startAt = addHours(date, offset)
  return {
    title: "Reserve",
    endAt: addHours(startAt, 1),
    id: nanoid(),
    startAt,
  }
})

const AppointmentStep = () => {
  const options = range(0, 42).flatMap((n) => {
    return times(createEvent(addDays(Date.now(), n)), 9)
  }) as EventOption[]

  return (
    <VStack>
      <FormItem
        name="service_reference"
        isControlled
        render={(props) => <EventPicker options={options} />}
      />
    </VStack>
  )
}

export default {
  label: "Appointment",
  Step: AppointmentStep,
  defaultValues,
}
