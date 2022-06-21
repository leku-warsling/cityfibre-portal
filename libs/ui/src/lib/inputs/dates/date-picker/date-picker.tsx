import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  Input,
  InputGroup,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react"
import { Calendar } from "../calendar"
import { CalendarIcon } from "@chakra-ui/icons"
import format from "date-fns/fp/format"
import { mergeRefs } from "../../../util/react.util"
import { InputProps } from "@chakra-ui/react"
import { either } from "ramda"
import { isFunction, isString } from "ramda-adjunct"
import { isAfter, isDate, isValid } from "date-fns"
import { isNil } from "lodash-es"
import useFocusTrap from "../../../hooks/use-focus-trap"
import { useUncontrolled } from "../../../hooks/use-uncontrolled"

export type DatePickerOwnProps = {
  onChange: (value: Date) => void
  defaultValue?: Date | null
  amountOfMonths?: number
  formatString?: string
  value?: Date | null
  initialMonth?: Date
  mask?: string
  minDate?: Date
  maxDate?: Date
}

export type DatePickerProps = Omit<
  InputProps,
  "defaultValue" | "onChange" | "value"
> &
  DatePickerOwnProps

const isValidInputValue = either<any>(isNil, isDate)

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      formatString = "dd/MM/yyyy",
      initialMonth = new Date(),
      amountOfMonths = 1,
      defaultValue,
      onChange,
      onFocus,
      minDate,
      maxDate,
      onBlur,
      value,
      ...props
    },
    ref
  ) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const calendarButtonRef = useRef<HTMLButtonElement>(null!)
    const inputRef = useRef<HTMLInputElement>(null!)
    const focusTrapRef = useFocusTrap(isOpen)

    const formatter = (val: any) => {
      return isDate(val) ? format(formatString ?? "dd/MM/yyyy")(val) : ""
    }

    const [_value, setValue] = useUncontrolled<Date>({
      value,
      defaultValue,
      onChange,
      finalValue: null,
      rule: isValidInputValue,
    })

    const [focused, setFocused] = useState(false)
    const [inputState, setInputState] = useState(formatter(_value))
    const [lastValidValue, setLastValidValue] = useState(defaultValue ?? null)
    const [calendarMonth, setCalendarMonth] = useState(_value || initialMonth)

    useEffect(() => {
      if (isNil(value) && !focused) {
        setInputState("")
      }

      if (isDate(value) && !focused) {
        setInputState(formatter(value))
      }
    }, [value, focused])

    const setDateFromInput = () => {
      let date = isString(_value) ? new Date(_value) : _value

      if (isNil(date) || !isValid(date)) {
        return setValue(lastValidValue)
      }

      if (maxDate && isAfter(date, maxDate)) {
        date = maxDate
      }

      if (minDate && isAfter(date, minDate)) {
        date = minDate
      }

      setValue(date)
      setLastValidValue(date)
      setInputState(formatter(date))
      setCalendarMonth(date)
    }

    const handleValueChange = (date: Date) => {
      setValue(date)
      setInputState(formatter(date))
      onClose()
    }

    const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
      isFunction(onBlur) && onBlur(event)
      setFocused(false)
      // if (allowFreeInput) {
      //   setDateFromInput()
      // }
    }

    const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
      isFunction(onFocus) && onFocus(event)
      setFocused(true)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const date = new Date(event.target.value)
      if (isValid(date)) {
        setValue(date)
        setLastValidValue(date)
        setCalendarMonth(date)
      }
      setInputState(event.target.value)
    }

    return (
      <Popover
        placement="bottom-start"
        variant="responsive"
        isOpen={isOpen}
        onClose={onClose}
        isLazy
      >
        <PopoverTrigger>
          <InputGroup>
            <Input
              value={inputState}
              onChange={handleChange}
              ref={mergeRefs(ref, inputRef)}
              onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Tab") {
                  event.preventDefault()
                  calendarButtonRef.current.focus()
                }
              }}
            />
            <InputRightElement>
              <IconButton
                icon={<CalendarIcon />}
                ref={calendarButtonRef}
                aria-label="Calendar"
                onClick={onOpen}
                variant="ghost"
                tabIndex={-1}
                size="sm"
              />
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent width="fit-content">
          <PopoverBody>
            <Calendar
              previousYearSetLabel="Previous year set"
              previousMonthLabel="Previous month"
              previousYearLabel="Previous year"
              initialDate={value ?? new Date()}
              nextYearSetLabel="Next year set"
              amountOfMonths={amountOfMonths}
              onChange={handleValueChange}
              nextMonthLabel="Next month"
              nextYearLabel="Next year"
              ref={focusTrapRef}
              minDate={minDate}
              maxDate={maxDate}
              value={value}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }
)

export default DatePicker
