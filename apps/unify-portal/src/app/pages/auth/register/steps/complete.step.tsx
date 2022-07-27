import { ArrowForwardIcon } from "@chakra-ui/icons"
import { VStack, Button, Text, useBreakpointValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CompleteStep = () => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  const isFullWidth = useBreakpointValue({ base: true, lg: false } as const)

  return (
    <VStack align="start" spacing={14}>
      <Text fontSize={{ base: "sm", lg: "lg" }} maxWidth="500px">
        Check your inbox for your activation link to the Partner Suite. Any team
        members you have added will also receive an activation link.
      </Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        isFullWidth={isFullWidth}
        colorScheme="brand"
        size={size}
        to="/auth"
        as={Link}
        px={10}
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
