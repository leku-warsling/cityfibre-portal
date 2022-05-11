import {
  Box,
  BoxProps,
  ButtonProps,
  Flex,
  IconButtonProps,
} from "@chakra-ui/react"
import { FC } from "react"

export type Participant = {
  id: string
  name: string
  [key: string]: any
}

export type CalendarEvent = {
  id: string
  title: string
  description?: string
  start_at?: number
  end_at?: number
  category?: string
  tags?: string[]
  isEditable?: boolean
  participants?: Participant[]
  [key: string]: any
}

export type CalendarOwnProps = {
  showWeekends: boolean
  events: any
  mode: "month" | "day" | "week"
  onSelect: (event: CalendarEvent) => void
  onChange: (date: Date) => void
  actions?: (IconButtonProps | ButtonProps)[]
}

export type CalendarProps = BoxProps & CalendarOwnProps

const Calandar: FC<CalendarProps> = (props) => {
  return (
    <Box>
      <Flex as="header"></Flex>
      <Flex>
        <Box as="aside"></Box>
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default Calandar
