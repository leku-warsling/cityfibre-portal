import { ArrowForwardIcon, Icon } from "@chakra-ui/icons"
import { Flex, Box, Text, FlexProps } from "@chakra-ui/layout"
import { FC, ReactNode } from "react"

type Stat = {
  label: ReactNode
  value: ReactNode
}

export type StatsBarProps = {
  items: Stat[]
}

const StatsBar: FC<StatsBarProps & FlexProps> = ({ items, ...props }) => {
  const stats = items.map((item, key) => (
    <Box key={key} fontWeight={800}>
      <Text
        textTransform="uppercase"
        letterSpacing="widest"
        lineHeight={1}
        fontSize="xs"
      >
        {item.label}
      </Text>
      <Text
        color="secondary.500"
        fontSize="3xl"
        lineHeight={1.3}
        textShadow="1px 2px 5px rgba(0,0,0,0.1)"
      >
        {item.value}
      </Text>
    </Box>
  ))

  return (
    <Flex {...props}>
      {stats}
      <Flex
        bgColor="secondary.500"
        justify="center"
        align="center"
        color="black"
        rounded={4}
        w={12}
        h={12}
      >
        <Icon as={ArrowForwardIcon} fontSize="2xl" />
      </Flex>
    </Flex>
  )
}

StatsBar.defaultProps = {
  justifyContent: "space-between",
  boxShadow: "base",
  align: "center",
  color: "black",
  rounded: 4,
  gap: 6,
  mb: 6,
  py: 6,
  px: 8,
}

export default StatsBar
