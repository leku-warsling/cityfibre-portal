import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/icon"
import { ReactNode } from "react"

const StatCallToAction = (props: { value: ReactNode; label: ReactNode }) => {
  return (
    <Flex
      bgColor="primary.500"
      boxShadow="base"
      color="#fff"
      p={4}
      rounded={4}
      gap={4}
      align="center"
    >
      <Flex
        fontWeight={800}
        bgColor="secondary.500"
        color="black"
        w={10}
        h={10}
        align="center"
        justify="center"
        rounded={4}
        fontSize="lg"
      >
        {props.value}
      </Flex>
      <Text flex={1} fontWeight={600}>
        {props.label}
      </Text>
      <Icon as={ArrowForwardIcon} fontSize="lg" mr={2} />
    </Flex>
  )
}

export default StatCallToAction
