import { Page, WizardPanel, WizardProvider, WizardStepper } from "@ui"
import { Button, Heading, Hide, VStack } from "@chakra-ui/react"
import IncidentDetailsStep from "./steps/incident-details.step"
import ServiceDetailsStep from "./steps/service-details.step"
import SubmitIncidentStep from "./steps/submit-incident.step"
import { Link } from "react-router-dom"

export const CreateIncidentPage = () => {
  const actions = [
    <Button alignItems="center" to="/incidents" variant="link" as={Link}>
      View all incidents
    </Button>,
  ]

  return (
    <Page
      maxH="93vh"
      overflowY="auto"
      mx={{ base: 2, lg: 0 }}
      mt={{ base: 2, lg: 0 }}
    >
      <Page.Header mb={8} pb={2} actions={actions}>
        Raise an Incident
      </Page.Header>
      <WizardProvider
        steps={[ServiceDetailsStep, IncidentDetailsStep, SubmitIncidentStep]}
        onComplete={console.log}
      >
        <VStack spacing={8} w="100%">
          <Hide below="lg">
            <WizardStepper width="100%" maxW="960px" colorScheme="brand" />
          </Hide>
          <WizardPanel
            renderHeader={({ title }) => (
              <Heading fontSize="2xl">{title}</Heading>
            )}
            boxShadow="base"
            bgColor="white"
            rounded={4}
            w="100%"
            pt={{ base: 6, lg: 12 }}
            px={{ base: 6, lg: 12 }}
            pb={8}
          />
        </VStack>
      </WizardProvider>
    </Page>
  )
}
