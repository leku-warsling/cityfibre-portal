import { Button } from "@chakra-ui/button"
import { Heading, VStack } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { Page, WizardPanel, WizardProvider, WizardStepper } from "@ui/lib"
import { Link, useNavigate } from "react-router-dom"
import AppointmentStep from "./steps/appointment.step"
import AvailabilityStep from "./steps/availability.step"
import OrderDetailsStep from "./steps/order-details.step"
import ProductOptionsStep from "./steps/product-options.step"
import SummaryStep from "./steps/summary.step"

const PAGE_ACTIONS = [
  <Button alignItems="center" to="/orders/products" variant="link" as={Link}>
    View all products
  </Button>,
]

const FORM_STEPS = [
  AvailabilityStep,
  ProductOptionsStep,
  OrderDetailsStep,
  AppointmentStep,
  SummaryStep,
]

const OrderFTTPPage = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const _onComplete = () => {
    navigate("/orders")
    toast({
      title: "Order Successful",
      description:
        "Your order is being processed and additional checks may be required",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    })
  }

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2} actions={PAGE_ACTIONS}>
        FTTP Order
      </Page.Header>
      <WizardProvider steps={FORM_STEPS} onComplete={_onComplete}>
        <VStack spacing={8} w="100%">
          <WizardStepper
            labelOrientation="vertical"
            colorScheme="primary"
            width="100%"
            maxW="1024px"
          />
          <WizardPanel
            renderHeader={({ title }) => (
              <Heading fontSize="2xl">{title}</Heading>
            )}
            boxShadow="base"
            bgColor="white"
            rounded={4}
            minH="70vh"
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

export default OrderFTTPPage
