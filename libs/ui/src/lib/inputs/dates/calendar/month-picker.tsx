import { Button, chakra, SimpleGrid } from "@chakra-ui/react"
import { addYears, setMonth, subYears } from "date-fns"
import CalendarControls from "./calendar-controls"
import { inRange, MONTH_NAMES } from "./util"
import { equals } from "ramda"
import { FC } from "react"
import { BiCaretDown } from "react-icons/bi"

export type MonthPickerProps = {
  date: Date
  onChange(value: Date): void
  onYearChange(value: Date): void
  previousYearLabel?: string
  nextYearLabel?: string
  preventFocus?: boolean
  onNextLevel(): void
  minDate?: Date
  maxDate?: Date
}

const MonthPicker: FC<MonthPickerProps> = ({
  previousYearLabel,
  nextYearLabel,
  onYearChange,
  onNextLevel,
  onChange,
  minDate,
  maxDate,
  date,
}) => {
  const inDateRange = inRange(minDate, maxDate)
  const isActive = equals(date.getMonth())
  const previousYear = subYears(date, 1)
  const nextYear = addYears(date, 1)
  const year = date.getFullYear()

  const months = MONTH_NAMES.map((monthName, index) => (
    <Button
      isDisabled={!inDateRange(new Date(year, index, 0))}
      onClick={() => onChange(setMonth(date, index))}
      isActive={isActive(index)}
      variant="ghost"
      key={monthName}
      size="sm"
    >
      {monthName}
    </Button>
  ))

  return (
    <chakra.div>
      <CalendarControls
        onPrevious={() => onYearChange(previousYear)}
        hasPrevious={inDateRange(previousYear)}
        onNext={() => onYearChange(nextYear)}
        previousLabel={previousYearLabel}
        hasNext={inDateRange(nextYear)}
        nextLabel={nextYearLabel}
      >
        <Button
          size="sm"
          variant="ghost"
          onClick={onNextLevel}
          rightIcon={<BiCaretDown />}
        >
          {year}
        </Button>
      </CalendarControls>
      <SimpleGrid columns={3} spacing={2}>
        {months}
      </SimpleGrid>
    </chakra.div>
  )
}

export default MonthPicker
