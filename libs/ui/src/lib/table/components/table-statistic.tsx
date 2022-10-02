import { HStack, Spacer, StackProps, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/icon"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { ReactNode } from "react"

export type TableStatisticOwnProps = {
  label: ReactNode
  value: string | number
  icon?: (a: any) => JSX.Element
}

export type TableStatisticProps = TableStatisticOwnProps & StackProps

export const TableStatistic = ({
  icon = RiBarChartGroupedLine,
  boxShadow = "base",
  bgColor = "white",
  flexGrow = 1,
  rounded = 4,
  py = 4,
  px = 6,
  value,
  label,
}: TableStatisticProps) => (
  <HStack
    bgColor={bgColor}
    boxShadow={boxShadow}
    flexGrow={flexGrow}
    rounded={rounded}
    fontSize="2xl"
    fontWeight={800}
    textTransform="uppercase"
    letterSpacing="wide"
    py={py}
    px={px}
  >
    <Text>{value}</Text>
    <Text>{label}</Text>
    <Spacer />
    {icon && <Icon as={icon} color="brand.500" fontSize="3xl" />}
  </HStack>
)
