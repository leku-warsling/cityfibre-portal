import { VStack, Icon, Heading, Text, Button } from "@chakra-ui/react"
import { BsCheckCircle } from "react-icons/bs"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

const defaultValues = {
  visit_reason: "",
  required_work: "",
}

const CompleteStep = () => (
  <VStack spacing={8} w="100%" py={14}>
    <Icon as={BsCheckCircle} fontSize="135px" color="green" />
    <Heading>Thank you</Heading>
    <Text fontWeight={600} fontSize="xl">
      Your incident reference number is INC0099293
    </Text>
    <Text maxWidth="500px" textAlign="center" pb={8}>
      Your incident has been raised. You will be contacted by a member of our
      team to provide further information when required.
    </Text>
    <Button
      rightIcon={<ArrowForwardIcon />}
      variant="outline"
      w="230px"
      as={Link}
      size="lg"
      to="/"
    >
      Go to Website
    </Button>
  </VStack>
)

export default {
  label: "Submit Incident",
  Step: CompleteStep,
  isCompleted: true,
  showTitle: false,
  defaultValues,
}
