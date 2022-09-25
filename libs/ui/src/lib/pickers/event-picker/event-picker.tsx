import { Box, Heading, HStack, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Alert } from "@chakra-ui/alert"
import { Spinner } from "@chakra-ui/spinner"
import { flow } from "fp-ts/lib/function"
import get from "lodash-es/get"
import { isFunction } from "ramda-adjunct"
import equals from "ramda/es/equals"
import groupBy from "ramda/es/groupBy"
import includes from "ramda/es/includes"
import isEmpty from "ramda/es/isEmpty"
import join from "ramda/es/join"
import juxt from "ramda/es/juxt"
import prop from "ramda/es/prop"
import { ReactNode, useEffect, useState } from "react"
import { Calendar } from "../../inputs/dates/calendar"

export type EventOptionId = string | number

export type EventOption = {
  status?:
    | "pending"
    | "canceled"
    | "expired"
    | "reserved"
    | "void"
    | "unavailable"
    | "available"
  id: EventOptionId
  title?: string
  startAt: Date
  endAt?: Date
  [key: string]: any
}

export type EventPickerProps = {
  onSearch?: (value: Date) => Promise<EventOption[]>
  renderOption?: (option: EventOption) => ReactNode
  filterBy?: (option: EventOption) => boolean
  value?: EventOptionId | EventOptionId[]
  onSelect?: (value: EventOptionId) => void
  notFoundMessage?: string
  options: EventOption[]
  initialDate?: Date
  minDate?: Date
  maxDate?: Date
}

const getDayPeriod = (date: Date) => (date.getHours() >= 12 ? "PM" : "AM")
const toTimeString = (date: Date) =>
  date.toLocaleTimeString("en-GB", { timeStyle: "short" })
const time = flow(juxt([toTimeString, getDayPeriod]), join(" "))
const key = (date: Date) => date.toLocaleDateString("en-GB")
const genKey = flow(prop<"startAt", Date>("startAt"), key)
const groupByDay = groupBy<EventOption, string>(genKey)
const startAtComparator = (a: EventOption, b: EventOption) => {
  return a.startAt.getTime() - b.startAt.getTime()
}

export const EventPicker = ({
  notFoundMessage = "No options found",
  initialDate = new Date(),
  filterBy = Boolean,
  options = [],
  renderOption,
  onSearch,
  onSelect,
  minDate,
  maxDate,
  value,
}: EventPickerProps) => {
  const isSelected = (a: any) =>
    Array.isArray(value) ? includes(a, value) : equals(value, a)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [date, setDate] = useState(initialDate)
  const [items, setItems] = useState(groupByDay(options))
  const events = get(items, key(date), [])
    .filter(filterBy)
    .sort(startAtComparator)

  const searchHandler = (value: Date) => {
    if (!onSearch) return
    setLoading(true)
    onSearch(value)
      .then(groupByDay)
      .then(setItems)
      .finally(() => setLoading(false))
  }

  // fetch options on mount if not provided
  useEffect(() => {
    if (isEmpty(items)) searchHandler(date)
  }, [])

  const onChange = juxt<Date[], void>([setDate, searchHandler])

  const eventList = isEmpty(events) ? (
    <Alert status="info" rounded={4}>
      {notFoundMessage}
    </Alert>
  ) : (
    <VStack maxW="400px" align="flex-start">
      {events.map((item) => {
        return renderOption ? (
          renderOption(item)
        ) : (
          <Button
            onClick={() => isFunction(onSelect) && onSelect(item.id)}
            isActive={isSelected(item.id)}
            variant="outline"
            w="full"
          >
            {`${item.title} - ${time(item.startAt)}`}
          </Button>
        )
      })}
    </VStack>
  )

  return (
    <HStack alignItems="flex-start" spacing={10}>
      <Calendar
        initialDate={initialDate}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        value={date}
        size="lg"
      />
      <Box flexGrow={1}>
        <Heading mt={3} mb={4} size="md" px={2}>
          {date.toLocaleDateString("en-GB", { dateStyle: "full" })}
        </Heading>
        <Box
          p={2}
          position="relative"
          minHeight="400px"
          maxHeight="480px"
          overflowY="auto"
        >
          {!isLoading ? (
            eventList
          ) : (
            <Spinner
              position="absolute"
              top="50%"
              left="50%"
              translateY="-50%"
              translateX="-50%"
            />
          )}
        </Box>
      </Box>
    </HStack>
  )
}
