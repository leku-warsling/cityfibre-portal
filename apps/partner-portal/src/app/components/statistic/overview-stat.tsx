import { Box, Flex, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/icon"
import { ReactNode } from "react"
import { IconType } from "react-icons"
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi"
import { isNegative } from "ramda-adjunct"
import { negate } from "ramda"

export type OverviewStatProps = {
  variation?: number
  label: ReactNode
  value: ReactNode
  icon: IconType
  unit?: string
}

const OverviewStat = ({
  label,
  icon,
  value,
  variation,
  unit = "%",
  ...props
}: OverviewStatProps) => (
  <Box {...props}>
    <Flex
      transform="translateY(-45%)"
      bgColor="secondary.500"
      position="absolute"
      boxShadow="base"
      justify="center"
      align="center"
      rounded={5}
      w="50px"
      h="50px"
      top="0"
      left={6}
    >
      <Icon as={icon} color="black" fontSize="3xl" />
    </Flex>
    <Flex flexDir="column">
      <Text
        textTransform="uppercase"
        letterSpacing="wide"
        fontWeight={800}
        fontSize="lg"
      >
        {label}
      </Text>
      <Flex fontWeight={800} align="baseline" gap={2}>
        <Text fontSize="3xl">{value}</Text>
        {variation && (
          <Flex
            color={isNegative(variation) ? "red.600" : "green.600"}
            letterSpacing="wide"
            align="center"
          >
            <Text>
              {isNegative(variation) ? negate(variation) : variation}
              {unit}
            </Text>
            <Icon
              as={isNegative(variation) ? BiDownArrowAlt : BiUpArrowAlt}
              fontSize="xl"
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  </Box>
)

OverviewStat.defaultProps = {
  position: "relative",
  bgColor: "white",
  boxShadow: "lg",
  minW: "150px",
  rounded: 10,
  color: "black",
  pt: 10,
  px: 6,
  pb: 6,
}

export default OverviewStat
