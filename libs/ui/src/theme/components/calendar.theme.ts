import { ComponentStyleConfig } from "@chakra-ui/theme"

const CalendarDay: ComponentStyleConfig = {
  baseStyle: ({ isWeekend }) => ({
    color: isWeekend ? "red.500" : "#495057",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: 500,
    _hover: {
      bgColor: "gray.100",
    },
    _disabled: {
      opacity: 0.2,
      _hover: {
        bgColor: "white",
      },
    },
    _focusVisible: {
      outlineColor: "brand.500",
      color: "brand.500",
    },
    _active: {
      outlineOffset: "2px",
      bgColor: "brand.500",
      color: "white",
    },
  }),
  sizes: {
    md: {
      fontSize: "sm",
      height: 8,
      width: 8,
      p: 0,
    },
  },
}

export default CalendarDay
