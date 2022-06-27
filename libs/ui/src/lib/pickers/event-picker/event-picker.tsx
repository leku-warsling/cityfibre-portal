import { FC, ReactNode, useEffect, useState } from "react"
import { isFunction } from "ramda-adjunct"
import { flow } from "fp-ts/lib/function"
import { format } from "date-fns/fp"
import { get } from "lodash-es"
import {
  Alert,
  Box,
  Button,
  Heading,
  HStack,
  Spinner,
  VStack,
} from "@chakra-ui/react"
import {
  equals,
  identity,
  groupBy,
  includes,
  isEmpty,
  juxt,
  prop,
  __,
} from "ramda"
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
  renderOption: (option: EventOption) => ReactNode
  filterBy?: (option: EventOption) => boolean
  value?: EventOptionId | EventOptionId[]
  onSelect?: (value: EventOptionId) => void
  notFoundMessage?: string
  options: EventOption[]
  initialDate?: Date
  minDate?: Date
  maxDate?: Date
}

const time = format("h:mm aaa")
const key = format("dd/MM/yyyy")
const genKey = flow(prop<"startAt", Date>("startAt"), key)
const groupByDay = groupBy<EventOption, string>(genKey)
const startAtComparator = (a: EventOption, b: EventOption) => {
  return a.startAt.getTime() - b.startAt.getTime()
}

const EventPicker: FC<EventPickerProps> = ({
  notFoundMessage = "No options found",
  initialDate = new Date(),
  filterBy = identity,
  options = [],
  renderOption,
  onSearch,
  onSelect,
  minDate,
  maxDate,
  value,
}) => {
  const isSelected = Array.isArray(value) ? includes(__, value) : equals(value)
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
    <VStack>
      {events.map((item) => {
        return renderOption ? (
          renderOption(item)
        ) : (
          <Button
            onClick={() => isFunction(onSelect) && onSelect(item.id)}
            isActive={isSelected(item.id)}
            variant="outline"
            isFullWidth
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
          {format("EEEE do MMMM yyyy", date)}
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

export default EventPicker
