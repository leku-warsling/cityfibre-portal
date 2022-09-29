import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/icon"
import { BiBookReader } from "react-icons/bi"
import { ISPHubIcon } from "../../../../../assets"

const ISPHubCallToAction = () => (
  <Flex
    bgColor="primary.500"
    rounded="base"
    boxShadow="base"
    flex={1}
    overflow="hidden"
    position="relative"
    maxW="420px"
    p={8}
    flexDir="column"
    justify="flex-end"
  >
    <Box
      bgColor="secondary.500"
      w="350px"
      h="350px"
      rounded="full"
      position="absolute"
      left="-13%"
      bottom="-25%"
    ></Box>
    <Flex
      bgColor="secondary.500"
      w="250px"
      h="250px"
      rounded="full"
      position="absolute"
      right="-5%"
      top="-15%"
      align="flex-end"
    >
      <ISPHubIcon fontSize="190px" ml={4} mb={4} />
    </Flex>
    <Flex
      fontWeight={800}
      fontSize="4xl"
      align="center"
      color="black"
      zIndex={10}
      mb={2}
      gap={3}
    >
      <Icon as={BiBookReader} />
      <Text>ISP Hub</Text>
    </Flex>
    <Text zIndex={10} color="black" fontWeight={600} w="250px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta
      turpis est
    </Text>
    <ArrowForwardIcon
      position="absolute"
      fontSize="3xl"
      color="white"
      zIndex={10}
      bottom={8}
      right={8}
    />
  </Flex>
)

export default ISPHubCallToAction
