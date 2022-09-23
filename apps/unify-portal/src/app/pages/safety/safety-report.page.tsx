import { WizardPanel, WizardProvider, WizardStepper } from "@ui/lib"
import YourDetailsStep from "./steps/your-details.step"
import CompleteStep from "./steps/complete.step"
import IncidentDetailsStep from "./steps/incident-details.step"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import safetyBgImage from "../../../assets/images/safety-bg-2.jpg"
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"

export const SafetyReportPage = () => {
  const aside = (
    <VStack
      bgImage={safetyBgImage}
      bgBlendMode="color-burn"
      bgColor="#4d9af2"
      justify="start"
      bgPos="center"
      height="100vh"
      bgSize="cover"
      align="start"
      width="600px"
      spacing={14}
      pt={24}
      px={24}
    >
      <Box width="100%" mb={14}>
        <Logo height="48px" fill="#FFFFFF" />
      </Box>
      <Box>
        <Heading
          textShadow="base"
          fontWeight={600}
          fontSize="32px"
          color="white"
          mb={4}
        >
          Health & Safety <br /> Incident Report
        </Heading>
        <Text color="white" textShadow="base">
          CityFibre are dedicated to keeping everyone safe. To do this it is
          important for us to know about health and safety incidents and near
          misses.
        </Text>
      </Box>
      <WizardStepper orientation="vertical" colorScheme="whiteAlpha" />
    </VStack>
  )

  return (
    <WizardProvider
      steps={[YourDetailsStep, IncidentDetailsStep, CompleteStep]}
      onComplete={console.log}
      size="lg"
    >
      <Flex id="registration">
        {aside}
        <WizardPanel
          bgColor="white"
          height="100vh"
          flexGrow={1}
          pt={36}
          px={36}
          pb={8}
        />
      </Flex>
    </WizardProvider>
  )
}
