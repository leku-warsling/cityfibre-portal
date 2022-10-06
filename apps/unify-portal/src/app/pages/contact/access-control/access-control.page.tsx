import { WizardPanel, WizardProvider, WizardStepper } from "@ui/lib/form"
import ContactDetailStep from "./steps/contact-details.step"
import LocationDetailStep from "./steps/location-details.step"
import WorkDetailStep from "./steps/work-details.step"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import registerBg from "../../../../assets/images/register-bg.webp"
import { LogoIcon } from "@ui/lib/assets"

const AccessControlPage = () => {
  const aside = (
    <VStack
      bgImage={registerBg}
      bgColor="primary.500"
      justify="start"
      height="100vh"
      bgSize="cover"
      align="start"
      width="600px"
      spacing={14}
      pt={24}
      px={24}
    >
      <Box width="100%" mb={14}>
        <LogoIcon fontSize="48px" fill="#FFFFFF" />
      </Box>
      <Box>
        <Heading fontWeight={600} fontSize="32px" color="white" mb={4}>
          Access Control Request
        </Heading>
        <Text color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
          luctus posuere. Aliquam quis vestibulum urna, a laoreet enim.
        </Text>
      </Box>
      <WizardStepper orientation="vertical" colorScheme="whiteAlpha" />
    </VStack>
  )

  return (
    <WizardProvider
      steps={[ContactDetailStep, WorkDetailStep, LocationDetailStep]}
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

export default AccessControlPage
