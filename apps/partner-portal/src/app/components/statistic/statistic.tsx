import { HStack, Spacer, StackProps, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/icon"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { ReactNode } from "react"

export type StatisticOwnProps = {
  label: ReactNode
  value: string | number
  icon?: (a: any) => JSX.Element
}

export type StatisticProps = StatisticOwnProps & StackProps

export const Statistic = ({
  icon = RiBarChartGroupedLine,
  boxShadow = "base",
  bgColor = "white",
  flexGrow = 1,
  rounded = 4,
  py = 4,
  px = 6,
  value,
  label,
}: StatisticProps) => (
  <HStack
    bgColor={bgColor}
    boxShadow={boxShadow}
    flexGrow={flexGrow}
    rounded={rounded}
    py={py}
    px={px}
  >
    <Text fontSize="2xl" fontWeight={800} mr={2}>
      {value}
    </Text>
    <Text fontWeight={600} color="gray.500">
      {label}
    </Text>
    <Spacer />
    {icon && <Icon as={icon} color="primary.500" fontSize="3xl" />}
  </HStack>
)
