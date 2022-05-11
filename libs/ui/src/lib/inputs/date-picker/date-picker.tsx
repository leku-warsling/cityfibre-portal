import { forwardRef, useRef } from "react"
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
import useCalendar from "./use-calendar"
import DatePanel from "./panels/date-panel"
import { DatePickerProps } from "./types"
import { CalendarIcon } from "@chakra-ui/icons"
import { triggerEvent, mergeRefs } from "./util"

const triggerOnChange = triggerEvent("input")

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const calendarRef = useRef<HTMLElement>(null!)
    const inputRef = useRef<HTMLInputElement>(null!)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const value = props.value || props.defaultValue
    const onSelect = (value: string) => {
      const input = inputRef.current
      if (!input) return
      input.value = value
      triggerOnChange(input)
      onClose()
    }

    const calendar = useCalendar({
      initialDate: new Date(),
      onSelect,
    })

    return (
      <Popover
        placement="bottom-start"
        variant="responsive"
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={inputRef}
        isLazy
      >
        <PopoverTrigger>
          <InputGroup>
            <Input ref={mergeRefs(ref, inputRef)} />
            <InputRightElement>
              <IconButton
                size="sm"
                aria-label="Calendar"
                icon={<CalendarIcon />}
                variant="ghost"
                onClick={onOpen}
              />
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent ref={calendarRef} width="320px">
          <PopoverBody>
            <DatePanel {...calendar} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }
)

export default DatePicker
