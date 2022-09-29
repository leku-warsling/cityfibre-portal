import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/icon"
import { ReactNode } from "react"

const StatCallToAction = (props: { value: ReactNode; label: ReactNode }) => {
  return (
    <Flex
      bgColor="primary.500"
      boxShadow="base"
      color="#000"
      p={4}
      rounded={4}
      gap={4}
      align="center"
    >
      <Flex
        bgColor="secondary.500"
        fontWeight={800}
        justify="center"
        align="center"
        fontSize="lg"
        color="black"
        rounded={4}
        w={10}
        h={10}
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
