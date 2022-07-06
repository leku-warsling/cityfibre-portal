import { always, subtract, when, splitEvery, times, constructN } from "ramda"
import startOfMonth from "date-fns/startOfMonth"
import { flow } from "fp-ts/lib/function"
import format from "date-fns/fp/format"
import { isZero } from "./number.util"
import getDay from "date-fns/getDay"
import sub from "date-fns/fp/sub"
import add from "date-fns/fp/add"

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

const toDate = constructN(1, Date)
const formatDateString = (formatStr: string) => flow(toDate, format(formatStr))

const getCalendarMonth = (dt: number | Date) => {
  const SOM = startOfMonth(dt)
  const startAt = sub({ days: weekdaysBefore(SOM) }, SOM)
  const period = times((n) => add({ days: n }, startAt), 42)
  return splitEvery(7, period)
}

export {
  getCalendarMonth,
  formatDateString,
  weekdaysBefore,
  MONTH_NAMES,
  DAY_NAMES,
  toDate,
}
