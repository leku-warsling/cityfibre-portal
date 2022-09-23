import { VStack } from "@chakra-ui/layout"
import { EventOption, EventPicker, FormItem } from "@ui/lib"
import addDays from "date-fns/addDays"
import addHours from "date-fns/addHours"
import { nanoid } from "nanoid"
import curry from "ramda/es/curry"
import range from "ramda/es/range"
import times from "ramda/es/times"

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
