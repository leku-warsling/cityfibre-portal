import { ArrowForwardIcon } from "@chakra-ui/icons"
import { VStack, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CompleteStep = () => {
  return (
    <VStack align="start" spacing={14}>
      <Text fontSize="lg" maxWidth="500px">
        Check your inbox for your activation link to the Partner Suite. <br />
        Any team members you have added will also receive an activation link.
      </Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="brand"
        to="/auth"
        as={Link}
        size="lg"
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
