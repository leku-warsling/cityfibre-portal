import { SimpleGrid, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { chakra } from "@chakra-ui/system"
import setYear from "date-fns/setYear"
import { inRange } from "ramda-adjunct"
import add from "ramda/es/add"
import equals from "ramda/es/equals"
import range from "ramda/es/range"
import subtract from "ramda/es/subtract"
import { FC, useState } from "react"
import CalendarControls from "./calendar-controls"

export type YearPickerProps = {
  previousYearSetLabel?: string
  onChange(value: Date): void
  nextYearSetLabel?: string
  preventFocus?: boolean
  minYear?: number
  maxYear?: number
  value: number
  date: Date
}

const YearPicker: FC<YearPickerProps> = ({
  previousYearSetLabel,
  maxYear = Infinity,
  nextYearSetLabel,
  minYear = 0,
  onChange,
  value,
  date,
}) => {
  const inYearRange = inRange(minYear, maxYear)
  const [from, setFrom] = useState(value)
  const previousYearSet = subtract(from, 20)
  const nextYearSet = add(from, 20)
  const isSelected = equals(value)

  const years = range(from, nextYearSet).map((y, i) => (
    <Button
      onClick={() => onChange(setYear(date, y))}
      isDisabled={!inYearRange(y)}
      isActive={isSelected(y)}
      key={`${y}-${i}`}
      variant="ghost"
      size="sm"
    >
      {y}
    </Button>
  ))

  return (
    <chakra.div>
      <CalendarControls
        onPrevious={() => setFrom(previousYearSet)}
        hasPrevious={inYearRange(previousYearSet)}
        previousLabel={previousYearSetLabel}
        onNext={() => setFrom(nextYearSet)}
        hasNext={inYearRange(nextYearSet)}
        nextLabel={nextYearSetLabel}
      >
        <Text fontWeight="semibold" size="small">
          {`${from} - ${nextYearSet}`}
        </Text>
      </CalendarControls>
      <SimpleGrid columns={4} spacing={2}>
        {years}
      </SimpleGrid>
    </chakra.div>
  )
}

export default YearPicker
