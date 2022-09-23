import { InputProps } from "@chakra-ui/input"
import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export type CalendarDay = {
  value: number | Date
  label: number
  isDisabled: boolean
}

export type Calendar = {
  weeks: Date[][]
  year: number
  month: number
  inRange: (d: Date) => boolean
  setDate: Dispatch<SetStateAction<Date>>
  onSelect: (value: Date) => void
  date: Date
}

export type NavigationOptions = {
  direction: "forward" | "back"
  calendar: Calendar
}

export type NavigationButtonProps = HTMLAttributes<HTMLButtonElement> & {
  offset?: number
  onClick?: (value: any) => void
}

export type DateButtonProps = HTMLAttributes<HTMLButtonElement> & {
  onClick?: (value: any) => void
}

export type UseCalendarState = {
  initialDate?: Date
  format?: string
  selected?: Date | Date[]
  min?: Date
  max?: Date
  onSelect: (value: string) => void
}

export type DatePickerOwnProps = {
  format?: string
  mask?: string
}

export type DatePickerProps = InputProps & DatePickerOwnProps
