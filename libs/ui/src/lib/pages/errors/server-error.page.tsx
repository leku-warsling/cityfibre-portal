import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, HStack, Text, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Link } from "react-router-dom"
import { ReactComponent as ServerErrorSVG } from "../../assets/svg/server-error.svg"

const ServerErrorPage = () => (
  <Flex bgColor="white" width="100vw" height="100vh" align="center">
    <HStack justify="center" align="flex-start" width="100%">
      <VStack spacing={10}>
        <ServerErrorSVG height="300px" />
        <VStack>
          <Text fontSize="4xl" fontWeight={600}>
            Opps, something went wrong
          </Text>
          <Text fontSize="lg" color="gray.500" textAlign="center">
            We apologise and are fixing the problem.
            <br />
            Please try again later
          </Text>
        </VStack>
        <Button
          rightIcon={<ArrowForwardIcon />}
          variant="outline"
          w="230px"
          as={Link}
          size="lg"
          to="/"
        >
          Go to Dashboard
        </Button>
      </VStack>
    </HStack>
  </Flex>
)

export default ServerErrorPage
