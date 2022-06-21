import { chakra, ButtonProps, useStyleConfig } from "@chakra-ui/react"
import { forwardRef } from "react"
import Indicator from "../../../data-display/indicator/indicator"

export type DayProps = Omit<ButtonProps, "onClick" | "value"> & {
  onClick?: (value: Date) => void
  isFirstInMonth?: boolean
  isSelected?: boolean
  isWeekend?: boolean
  hasValue?: boolean
  isToday?: boolean
  value: Date
}

const Day = forwardRef<HTMLButtonElement, DayProps>(
  (
    {
      isFirstInMonth = false,
      isSelected = false,
      isWeekend = false,
      hasValue = false,
      isToday = false,
      isDisabled,
      size = "md",
      onClick,
      value,
      ...props
    },
    ref
  ) => {
    const hasFocus = (hasValue ? isSelected : isFirstInMonth) || undefined
    const styles = useStyleConfig("CalendarDay", {
      isWeekend,
      size,
    })

    return (
      <chakra.button
        onClick={onClick ? () => onClick(value) : undefined}
        data-active={isSelected || undefined}
        data-autofocus={hasFocus}
        disabled={isDisabled}
        __css={styles}
        type="button"
        ref={ref}
        {...props}
      >
        <Indicator
          isDisabled={!isToday}
          position="bottom-center"
          bgColor="brand.500"
          size={1}
          offset={-0.5}
        >
          {value.getDate()}
        </Indicator>
      </chakra.button>
    )
  }
)

export default Day
