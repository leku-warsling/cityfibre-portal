import getDay from "date-fns/getDay"
import { always, subtract, when, splitEvery, times } from "ramda"
import { isZero } from "./number.util"
import startOfMonth from "date-fns/startOfMonth"
import sub from "date-fns/fp/sub"
import add from "date-fns/fp/add"
import { flow } from "fp-ts/lib/function"

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

const weekdaysBefore = flow(
  getDay,
  when(isZero, always(7)),
  subtract(1),
  Math.abs
)

const getCalendarMonth = (dt: number | Date) => {
  const SOM = startOfMonth(dt)
  const startAt = sub({ days: weekdaysBefore(SOM) }, SOM)
  const period = times((n) => add({ days: n }, startAt), 42)
  return splitEvery(7, period)
}

export { DAY_NAMES, MONTH_NAMES, weekdaysBefore, getCalendarMonth }
