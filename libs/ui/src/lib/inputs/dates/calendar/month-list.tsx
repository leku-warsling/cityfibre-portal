import { forwardRef, KeyboardEvent, ReactNode, RefObject } from "react"
import { inRange, isZero } from "./util"
import Month from "./month"
import CalendarControls from "./calendar-controls"
import { chakra, HStack, Divider, Button } from "@chakra-ui/react"
import { addMonths, subMonths } from "date-fns"
import { range } from "ramda"
import { format } from "date-fns/fp"
import { BiCaretDown } from "react-icons/bi"

export type MonthListProps = {
  daysRefs: RefObject<HTMLButtonElement[][][]>
  renderDay?(date: Date): ReactNode
  onMonthChange(value: Date): void
  previousMonthLabel?: string
  onChange?(value: Date): void
  allowLevelChange: boolean
  nextMonthLabel?: string
  amountOfMonths: number
  value?: Date | Date[]
  onNextLevel?(): void
  maxDate?: Date
  minDate?: Date
  onDayKeyDown(
    cellPath: number[],
    day: Date,
    event: KeyboardEvent<HTMLButtonElement>
  ): void
  date?: Date
}

const MonthList = forwardRef<HTMLDivElement, MonthListProps>(
  (
    {
      previousMonthLabel,
      amountOfMonths = 1,
      date = new Date(),
      nextMonthLabel,
      onMonthChange,
      onDayKeyDown,
      onNextLevel,
      minDate,
      maxDate,
      daysRefs,
      ...props
    },
    ref
  ) => {
    const nextMonth = addMonths(date, 1)
    const previousMonth = subMonths(date, 1)
    const inDateRange = inRange(minDate, maxDate)

    const months = range(0, amountOfMonths).map((index) => {
      const monthDate = addMonths(date, index)
      return (
        <div key={index} ref={ref}>
          <CalendarControls
            onPrevious={() => onMonthChange(previousMonth)}
            hasPrevious={inDateRange(previousMonth)}
            onNext={() => onMonthChange(nextMonth)}
            showNext={amountOfMonths - 1 === index}
            previousLabel={previousMonthLabel}
            hasNext={inDateRange(nextMonth)}
            showPrevious={isZero(index)}
            nextLabel={nextMonthLabel}
          >
            <Button
              rightIcon={<BiCaretDown />}
              onClick={onNextLevel}
              variant="ghost"
              size="sm"
            >
              {format("MMM yyyy", monthDate)}
            </Button>
          </CalendarControls>
          <Divider mb={1.5} />
          <Month
            daysRefs={daysRefs?.current?.[index]}
            onDayKeyDown={onDayKeyDown}
            monthIndex={index}
            minDate={minDate}
            maxDate={maxDate}
            date={monthDate}
            {...props}
          />
        </div>
      )
    })

    return (
      <chakra.div>
        <HStack spacing={4}>{months}</HStack>
      </chakra.div>
    )
  }
)

export default MonthList
