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
    sm: {
      fontSize: "sm",
      height: 8,
      width: 8,
      p: 0,
    },
    md: {
      fontSize: "md",
      height: 10,
      width: 10,
      p: 0,
    },
    lg: {
      fontSize: "lg",
      height: 12,
      width: 12,
      m: 2,
      p: 0,
    },
  },
}

export default CalendarDay
