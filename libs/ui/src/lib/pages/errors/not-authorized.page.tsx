import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { ReactComponent as AccessSVG } from "../../assets/svg/access.svg"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

const NotAuthorizedPage = () => (
  <Flex bgColor="white" width="100vw" height="100vh" align="center">
    <HStack justify="center" align="flex-start" width="100%" spacing={4}>
      <VStack spacing={8}>
        <Heading
          bgGradient="linear(to-r, brand.400, brand.600)"
          display="inline-block"
          backgroundClip="text"
          as="h2"
          size="4xl"
        >
          401
        </Heading>
        <VStack>
          <Text fontSize="4xl" fontWeight={600}>
            Unauthorized Access
          </Text>
          <Text fontSize="lg" color="gray.500">
            You don’t have permission to access this page.
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
      <AccessSVG height="430px" />
    </HStack>
  </Flex>
)

export default NotAuthorizedPage
