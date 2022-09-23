import { Page, WizardPanel, WizardProvider, WizardStepper } from "@ui/lib"
import { Heading, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Hide } from "@chakra-ui/media-query"
import IncidentDetailsStep from "./steps/incident-details.step"
import ServiceDetailsStep from "./steps/service-details.step"
import SubmitIncidentStep from "./steps/submit-incident.step"
import { Link, useSearchParams } from "react-router-dom"

const PAGE_ACTIONS = [
  <Button alignItems="center" to="/incidents" variant="link" as={Link}>
    View all incidents
  </Button>,
]

const FORM_STEPS = [ServiceDetailsStep, IncidentDetailsStep, SubmitIncidentStep]

const CreateIncidentPage = () => {
  const [params] = useSearchParams()
  const service_reference = params.get("service_reference") ?? ""

  return (
    <Page
      maxH="93vh"
      overflowY="auto"
      mx={{ base: 2, lg: 0 }}
      mt={{ base: 2, lg: 0 }}
    >
      <Page.Header mb={8} pb={2} actions={PAGE_ACTIONS}>
        Raise an Incident
      </Page.Header>
      <WizardProvider
        steps={FORM_STEPS}
        formData={{ service_reference }}
        onComplete={console.log}
      >
        <VStack spacing={8} w="100%">
          <Hide below="lg">
            <WizardStepper width="100%" maxW="960px" colorScheme="primary" />
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

export default CreateIncidentPage
