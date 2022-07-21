import { Page, WizardPanel, WizardProvider, WizardStepper } from "@ui"
import OrderDetailsStep from "./steps/order-details.step"
import ProductOptionsStep from "./steps/product-options.step"
import AvailabilityStep from "./steps/availability.step"
import AppointmentStep from "./steps/appointment.step"
import SummaryStep from "./steps/summary.step"
import { Button, Heading, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export const OrderFTTPPage = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      alignItems="center"
      to="/products"
      variant="link"
      as={Link}
    >
      View all products
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2} actions={actions}>
        FTTP Order
      </Page.Header>
      <WizardProvider
        steps={[
          AvailabilityStep,
          ProductOptionsStep,
          OrderDetailsStep,
          AppointmentStep,
          SummaryStep,
        ]}
        onComplete={console.log}
      >
        <VStack spacing={8} w="100%">
          <WizardStepper
            width="100%"
            maxW="1024px"
            colorScheme="brand"
            labelOrientation="vertical"
          />
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
