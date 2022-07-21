import { Page, WizardPanel, WizardProvider, WizardStepper } from "@ui"
import ServiceDetailsStep from "./steps/service-details.step"
import IncidentDetailsStep from "./steps/incident-details.step"
import SubmitIncidentStep from "./steps/submit-incident.step"
import { Button, Heading, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export const CreateIncidentPage = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      alignItems="center"
      to="/incidents"
      variant="link"
      as={Link}
    >
      View all incidents
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2} actions={actions}>
        Raise an Incident
      </Page.Header>
      <WizardProvider
        steps={[ServiceDetailsStep, IncidentDetailsStep, SubmitIncidentStep]}
        onComplete={console.log}
      >
        <VStack spacing={8} w="100%">
          <WizardStepper width="100%" maxW="960px" colorScheme="brand" />
          <WizardPanel
            renderHeader={({ title }) => (
              <Heading fontSize="2xl">{title}</Heading>
            )}
            boxShadow="base"
            bgColor="white"
            rounded={4}
            w="100%"
            pt={12}
            px={12}
            pb={8}
          />
        </VStack>
      </WizardProvider>
    </Page>
  )
}
