import { createContext } from "react"
import { FC } from "react"
import { useContext } from "react"

export type CalendarContextProps = {}

const CalendarContext = createContext<CalendarContextProps>(null!)

export default CalendarContext

const CalendarProvider: FC = ({ children }) => {
  const context = {}

  return (
    <CalendarContext.Provider value={context}>
      {children}
    </CalendarContext.Provider>
  )
}

const useCalendar = () => useContext(CalendarContext)

export { useCalendar, CalendarProvider }
