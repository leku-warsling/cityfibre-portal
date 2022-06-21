import { Button, ButtonGroup, chakra } from "@chakra-ui/react"
import { forwardRef, KeyboardEvent, useRef } from "react"
import {
  cond,
  dec,
  inc,
  lensIndex,
  over,
  path,
  repeat,
  set,
  view,
  when,
  __,
} from "ramda"
import { useState } from "react"
import { isArrowKey } from "./util"
import MonthList from "./month-list"
import MonthPicker from "./month-picker"
import YearPicker from "./year-picker"
import { startOfMonth } from "date-fns"
import { addDays, subDays, isSameMonth } from "date-fns/fp"
import { lengthGt, notEqual } from "ramda-adjunct"
import { flow } from "fp-ts/lib/function"
import { select } from "../../../util/dom"

export type ArrowKey = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight"

export type CalendarProps = {
  onChange?: (date: Date) => void
  previousYearSetLabel?: string
  previousMonthLabel?: string
  allowLevelChange?: boolean
  previousYearLabel?: string
  nextYearSetLabel?: string
  amountOfMonths?: number
  nextMonthLabel?: string
  preventFocus?: boolean
  value?: Date | Date[] | null
  nextYearLabel: string
  initialDate?: Date
  minDate?: Date
  maxDate?: Date
}

const groupLens = lensIndex<number>(0)
const rowLens = lensIndex<number>(1)
const cellLens = lensIndex<number>(2)

const nextGroup = over(groupLens, inc)
const prevGroup = over(groupLens, dec)
const nextRow = over(rowLens, inc)
const prevRow = over(rowLens, dec)
const nextCell = over(cellLens, inc)
const prevCell = over(cellLens, dec)
const firstCell = set(cellLens, 0)
const lastCell = set(cellLens, 6)

const isNotLastRow = flow(view(rowLens), notEqual(5))
const isNotFirstRow = flow(view(rowLens), notEqual(0))
const isNotLastCell = flow(view(cellLens), notEqual(6))
const isNotFirstCell = flow(view(cellLens), notEqual(0))
const firstOfNextRow = flow(nextRow, firstCell)
const lastOfPrevRow = flow(prevRow, lastCell)
const moveUp = when(isNotFirstRow, prevRow)
const moveDown = when(isNotLastRow, nextRow)

const nextGroupOrCell = (data: any[][][]) => {
  return lengthGt(1, data) ? nextGroup : nextCell
}

const prevGroupOrCell = (data: any[][][]) => {
  return lengthGt(1, data) ? prevGroup : prevCell
}

const moveRight = (data: any[][][]) =>
  cond([
    [isNotLastCell, nextGroupOrCell(data)],
    [isNotLastRow, firstOfNextRow],
  ])

const moveLeft = (data: any[][][]) =>
  cond([
    [isNotFirstCell, prevGroupOrCell(data)],
    [isNotFirstRow, lastOfPrevRow],
  ])

const moveDay = {
  ArrowRight: addDays(1),
  ArrowLeft: subDays(1),
  ArrowDown: addDays(7),
  ArrowUp: subDays(7),
}

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      initialDate = new Date(),
      allowLevelChange = true,
      previousYearSetLabel,
      previousMonthLabel,
      previousYearLabel,
      nextYearSetLabel,
      nextYearLabel,
      nextMonthLabel,
      preventFocus = true,
      amountOfMonths = 1,
      onChange,
      maxDate,
      minDate,
      value,
    },
    ref
  ) => {
    const [date, setDate] = useState(initialDate)
    const [mode, setMode] = useState<"date" | "month" | "year">("date")
    const monthRef = useRef<HTMLDivElement>(null!)
    const daysRefs = useRef<HTMLButtonElement[][][]>(repeat([], amountOfMonths))
    const autofocus = () => select("[data-autofocus]", monthRef.current).focus()
    const getCell = (cellPath: number[]) => {
      return path<HTMLButtonElement>(cellPath, daysRefs.current)
    }
    const movePosition = {
      ArrowRight: moveRight(daysRefs.current),
      ArrowLeft: moveLeft(daysRefs.current),
      ArrowDown: moveDown,
      ArrowUp: moveUp,
    }

    const onDayKeyDownHandler = (
      cellPath: number[],
      day: Date,
      event: KeyboardEvent<HTMLButtonElement>
    ) => {
      if (!isArrowKey(event.key)) return
      event.preventDefault()
      const action = event.key as ArrowKey
      const newDate = moveDay[action](day)

      if (!isSameMonth(day, newDate)) {
        setDate(startOfMonth(newDate))
        setTimeout(autofocus, 0)
      } else {
        getCell(movePosition[action](cellPath))?.focus()
      }
    }

    return (
      <chakra.div ref={ref}>
        {mode === "date" && (
          <MonthList
            previousMonthLabel={previousMonthLabel}
            onNextLevel={() => setMode("month")}
            allowLevelChange={allowLevelChange}
            onDayKeyDown={onDayKeyDownHandler}
            amountOfMonths={amountOfMonths}
            nextMonthLabel={nextMonthLabel}
            onMonthChange={setDate}
            onChange={onChange}
            daysRefs={daysRefs}
            minDate={minDate}
            maxDate={maxDate}
            value={value ?? []}
            ref={monthRef}
            date={date}
          />
        )}
        {mode === "month" && (
          <MonthPicker
            previousYearLabel={previousYearLabel}
            onNextLevel={() => setMode("year")}
            nextYearLabel={nextYearLabel}
            preventFocus={preventFocus}
            onYearChange={setDate}
            onChange={(value) => {
              setDate(value)
              setMode("date")
            }}
            minDate={minDate}
            maxDate={maxDate}
            date={date}
          />
        )}
        {mode === "year" && (
          <YearPicker
            previousYearSetLabel={previousYearSetLabel}
            nextYearSetLabel={nextYearSetLabel}
            minYear={minDate?.getFullYear()}
            maxYear={maxDate?.getFullYear()}
            preventFocus={preventFocus}
            value={date.getFullYear()}
            onChange={(value) => {
              setDate(value)
              setMode("month")
            }}
            date={date}
          />
        )}
      </chakra.div>
    )
  }
)

export default Calendar
