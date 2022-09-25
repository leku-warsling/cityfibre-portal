import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Heading, Text, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Icon } from "@chakra-ui/icon"
import { BsCheckCircle } from "react-icons/bs"

const defaultValues = {
  visit_reason: "",
  required_work: "",
}

const CompleteStep = () => (
  <VStack spacing={8} w="100%" py={14}>
    <Icon as={BsCheckCircle} fontSize="135px" color="green" />
    <Heading>Thank you</Heading>
    <Text fontWeight={600} fontSize="xl">
      Your reference number is CHF0012368
    </Text>
    <Text maxWidth="500px" textAlign="center" pb={8}>
      Your incident has been raised. You will be contacted by a member of our
      team to provide further information when required.
    </Text>
    <Button
      rightIcon={<ArrowForwardIcon />}
      variant="outline"
      w="230px"
      as="a"
      size="lg"
      href="https://cityfibre.com/"
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
