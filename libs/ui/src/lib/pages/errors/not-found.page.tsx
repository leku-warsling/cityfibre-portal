import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { ReactComponent as VoidSVG } from "../../assets/svg/void.svg"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export const NotFoundPage = () => (
  <Flex bgColor="white" width="100vw" height="100vh" align="center">
    <HStack justify="center" align="flex-start" width="100%">
      <VStack spacing={10}>
        <Heading
          bgGradient="linear(to-r, brand.400, brand.600)"
          display="inline-block"
          backgroundClip="text"
          as="h2"
          size="4xl"
        >
          404
        </Heading>
        <VStack>
          <Text fontSize="4xl" fontWeight={600}>
            Page Not Found
          </Text>
          <Text fontSize="lg" color="gray.500">
            The page you're looking for does not seem to exist
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
      <VoidSVG height="530px" />
    </HStack>
  </Flex>
)
