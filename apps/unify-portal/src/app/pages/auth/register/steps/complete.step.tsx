import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Text, VStack } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { Button } from "@chakra-ui/button"
import { Link } from "react-router-dom"

const CompleteStep = () => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  const width = useBreakpointValue({ base: "full", lg: "auto" } as const)

  return (
    <VStack align="start" spacing={14}>
      <Text fontSize={{ base: "sm", lg: "lg" }} maxWidth="500px">
        Check your inbox for your activation link to the Partner Suite. Any team
        members you have added will also receive an activation link.
      </Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="black"
        size={size}
        to="/auth"
        as={Link}
        px={10}
        w={width}
      >
        Sign in to Partner Suite
      </Button>
    </VStack>
  )
}

export default {
  Step: CompleteStep,
  isCompleted: true,
  label: "Done!",
}
