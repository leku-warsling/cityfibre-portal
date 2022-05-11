import sub from "date-fns/fp/sub"
import { both, juxt } from "ramda"
import add from "date-fns/fp/add"
import isAfter from "date-fns/fp/isAfter"
import isBefore from "date-fns/fp/isBefore"
import formatter from "date-fns/fp/format"
import { getCalendarMonth } from "../util/date.util"
import { flow, pipe } from "fp-ts/lib/function"
import plural from "pluralize"
import { useState } from "react"
import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export type CalendarDay = {
  value: number | Date
  label: number
  isDisabled: boolean
}

export type Calendar = {
  weeks: Date[][]
  year: number
  month: number
  inRange: (d: Date) => boolean
  setDate: Dispatch<SetStateAction<Date>>
  onSelect: (value: Date) => void
  date: Date
}

export type NavigationOptions = {
  direction: "forward" | "back"
  calendar: Calendar
}

export type NavigationButtonProps = HTMLAttributes<HTMLButtonElement> & {
  offset?: number
  onClick?: (value: any) => void
}

export type DateButtonProps = HTMLAttributes<HTMLButtonElement> & {
  onClick?: (value: any) => void
}

export type UseCalendarState = {
  initialDate?: Date
  format?: string
  selected?: Date | Date[]
  min?: Date
  max?: Date
  onSelect: (value: string) => void
}

const defaultMinDate = sub({ years: 100 }, new Date())
const defaultMaxDate = add({ years: 3 }, new Date())
const noop = () => {}

const getNavigationProps = (
  direction: "forward" | "back",
  calendar: Calendar
) => {
  const op = direction === "forward" ? add : sub

  return ({ offset = 1, onClick = noop, ...rest }: NavigationButtonProps) => {
    const value = op({ months: offset }, calendar.date)

    return {
      "aria-label": `Go ${direction} ${offset} ${plural("month", offset)}`,
      onClick: () => pipe(value, juxt([calendar.setDate, onClick])),
      disabled: calendar.inRange(value),
      ...rest,
    }
  }
}

const getDateProps = (calendar: Calendar) => {
  return (date: Date, { onClick = noop, ...rest }: DateButtonProps) => {
    const updateAll = juxt([calendar.setDate, calendar.onSelect, onClick])

    return {
      onClick: () => updateAll(date),
      disabled: calendar.month !== date.getMonth(),
      "aria-label": date.toDateString(),
      role: "button",
      ...rest,
    }
  }
}

const useCalendar = ({
  initialDate = new Date(),
  format = "dd/MM/yyyy",
  selected,
  min = defaultMaxDate,
  max = defaultMinDate,
  onSelect,
}: UseCalendarState) => {
  const [date, setDate] = useState(initialDate)

  const calendar = {
    onSelect: flow(formatter(format), onSelect),
    inRange: both(isBefore(max), isAfter(min)),
    weeks: getCalendarMonth(date),
    year: date.getFullYear(),
    month: date.getMonth(),
    setDate,
    date,
  }

  return {
    calendar,
    getBackProps: getNavigationProps("back", calendar),
    getForwardProps: getNavigationProps("forward", calendar),
    getDateProps: getDateProps(calendar),
  }
}

export default useCalendar
