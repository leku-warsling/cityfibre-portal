import { VStack, Text, Heading } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Icon } from "@chakra-ui/icon"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { BsCheckCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

export type IncidentDetailsFormProps = {
  size: "sm" | "md" | "lg"
}

const SubmitIncidentStep = () => {
  return (
    <VStack spacing={8} w="100%" py={14}>
      <Icon as={BsCheckCircle} fontSize="135px" color="green" />
      <Heading>Thank you</Heading>
      <Text fontWeight={600} fontSize="xl" textAlign="center">
        Your incident reference number is INC0099293
      </Text>
      <Text maxWidth="300px" textAlign="center" pb={8}>
        Your incident has been raised. We will be in touch as soon as possible.
      </Text>
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
  )
}

export default {
  label: "Submit Incident",
  Step: SubmitIncidentStep,
  showTitle: false,
  isCompleted: true,
}
