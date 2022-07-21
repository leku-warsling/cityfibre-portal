import { HStack, Icon, Spacer, StackProps, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

export type StatisticOwnProps = {
  label: ReactNode
  value: string | number
  icon?: (a: any) => JSX.Element
}

export type StatisticProps = StatisticOwnProps & StackProps

export const Statistic = ({
  boxShadow = "base",
  bgColor = "white",
  flexGrow = 1,
  rounded = 4,
  py = 4,
  px = 6,
  value,
  label,
  icon,
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
    {icon && <Icon as={icon} color="brand.500" fontSize="3xl" />}
  </HStack>
)
