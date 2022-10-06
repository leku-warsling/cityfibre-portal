import { WizardPanel, WizardProvider, WizardStepper } from "@ui/lib/form"
import YourDetailsStep from "./steps/your-details.step"
import CompleteStep from "./steps/complete.step"
import IncidentDetailsStep from "./steps/incident-details.step"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import safetyBgImage from "../../../assets/images/safety-bg-2.webp"
import { LogoIcon } from "@ui/lib"
// import { ReactComponent as Logo } from "../../../assets/svg/logo.svg"

const SafetyReportPage = () => {
  const aside = (
    <VStack
      bgImage={safetyBgImage}
      bgBlendMode="color-burn"
      bgColor="primary.500"
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
        <LogoIcon fontSize="5xl" />
      </Box>
      <Box>
        <Heading
          textShadow="base"
          fontWeight={800}
          fontSize="4xl"
          color="black"
          textTransform="uppercase"
          mb={4}
        >
          Health & Safety Incident Report
        </Heading>
        <Text color="black" textShadow="base" fontWeight={700}>
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

export default SafetyReportPage
