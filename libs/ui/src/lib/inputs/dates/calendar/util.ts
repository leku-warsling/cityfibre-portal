import getDay from "date-fns/getDay"
import { flow } from "fp-ts/lib/function"
import {
  always,
  subtract,
  when,
  curry,
  both,
  splitEvery,
  times,
  equals,
  constructN,
  gte,
  lte,
  __,
} from "ramda"
import startOfMonth from "date-fns/startOfMonth"
import { addDays, isValid, subDays } from "date-fns"
import { inRange as _inRange, isArray } from "ramda-adjunct"

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const isZero = equals(0)

const weekdaysBefore = flow(
  getDay,
  when(isZero, always(7)),
  subtract(1),
  Math.abs
)

const toDate = constructN(1, Date)
const getFullYear = (date: Date) => date.getFullYear()
const getMonthName = (date: Date) => MONTH_NAMES[date.getMonth()]

const fromDateString = (dt: any, defaultValue?: Date) => {
  const date = toDate(dt)
  return isValid(date) ? date : defaultValue
}

const isSameYear = curry((d1: Date, d2: Date) => {
  return d1.getFullYear() === d2.getFullYear()
})

const isSameMonth = curry((d1: Date, d2: Date) => {
  return isSameYear(d1, d2) && d1.getMonth() === d2.getMonth()
})

const isSameDate = curry((d1: Date, d2: Date) => {
  return isSameMonth(d1, d2) && d1.getDate() === d2.getDate()
})

const isSelected = curry((val: Date | Date[], date: Date) => {
  return isArray(val) ? val.some(isSameDate(date)) : isSameDate(date, val)
})

const inRange = (
  min: number | Date = -Infinity,
  max: number | Date = Infinity
) => {
  return flow(Number, both(gte(__, Number(min)), lte(__, Number(max))))
}

const getMonthDays = (date: number | Date) => {
  const SOM = startOfMonth(date)
  const startAt = subDays(SOM, weekdaysBefore(SOM))
  const period = times((n) => addDays(startAt, n), 42)
  return splitEvery(7, period)
}

const isArrowKey = (key: string) => {
  return ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].some(equals(key))
}

const isLastDayOfMonth = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  return date.getDate() === new Date(year, month + 1, 0).getDate()
}

export {
  isLastDayOfMonth,
  fromDateString,
  weekdaysBefore,
  getMonthName,
  getMonthDays,
  isSameMonth,
  MONTH_NAMES,
  isSameYear,
  isSameDate,
  isSelected,
  isArrowKey,
  DAY_NAMES,
  isZero,
  getDay,
  inRange,
}
