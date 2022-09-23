import { chakra } from "@chakra-ui/system"
import isDate from "date-fns/isDate"
import isFirstDayOfMonth from "date-fns/isFirstDayOfMonth"
import isToday from "date-fns/isToday"
import isWeekend from "date-fns/isWeekend"
import isFunction from "lodash-es/isFunction"
import isNil from "lodash-es/isNil"
import { isArray } from "ramda-adjunct"
import both from "ramda/es/both"
import or from "ramda/es/or"
import { forwardRef, KeyboardEvent, ReactNode } from "react"
import Day from "./day"
import {
  DAY_NAMES,
  getMonthDays,
  inRange,
  isSameMonth,
  isSelected,
} from "./util"

export type MonthProps = {
  renderDay?: (value: Date) => ReactNode
  daysRefs?: HTMLButtonElement[][]
  onChange?: (value: Date) => void
  size?: "sm" | "md" | "lg"
  onNextLevel?: () => void
  value?: Date | Date[]
  onDayKeyDown?(
    cellPath: number[],
    day: Date,
    event: KeyboardEvent<HTMLButtonElement>
  ): void
  monthIndex?: number
  minDate?: Date
  maxDate?: Date
  date: Date
}

const Month = forwardRef<HTMLTableElement, MonthProps>((props, ref) => {
  const {
    monthIndex = 0,
    onDayKeyDown,
    size = "sm",
    onChange,
    daysRefs,
    minDate,
    maxDate,
    value,
    date,
  } = props
  const weeks = getMonthDays(date)
  const inMonth = isSameMonth(date)
  const isValid = or(inMonth, inRange(minDate, maxDate))
  const hasValue = both(isDate, inMonth)

  const weekdays = (
    <chakra.thead>
      <chakra.tr>
        {DAY_NAMES.map((dayName) => (
          <chakra.th py={2} fontSize={size} color="#ADB5BD" fontWeight={500}>
            {dayName.substring(0, 2)}
          </chakra.th>
        ))}
      </chakra.tr>
    </chakra.thead>
  )

  const days = weeks.map((week, rowIndex) => (
    <chakra.tr key={`week-${rowIndex}`}>
      {week.map((day, cellIndex) => (
        <chakra.td>
          <Day
            isSelected={!isNil(value) && isSelected(value, day)}
            isFirstInMonth={isFirstDayOfMonth(day)}
            ref={(button: HTMLButtonElement) => {
              if (!daysRefs) return
              if (!isArray(daysRefs[rowIndex])) daysRefs[rowIndex] = []
              daysRefs[rowIndex][cellIndex] = button
            }}
            isWeekend={isWeekend(day)}
            hasValue={hasValue(value)}
            isDisabled={!isValid(day)}
            isToday={isToday(day)}
            onClick={onChange}
            onKeyDown={(e) =>
              isFunction(onDayKeyDown) &&
              onDayKeyDown([monthIndex, rowIndex, cellIndex], day, e)
            }
            value={day}
            size={size}
          />
        </chakra.td>
      ))}
    </chakra.tr>
  ))

  return (
    <chakra.table sx={{ borderCollapse: "collapse" }} ref={ref}>
      {weekdays}
      <chakra.tbody>{days}</chakra.tbody>
    </chakra.table>
  )
})

export default Month
