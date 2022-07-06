import { WizardPanel, WizardProvider, WizardStepper } from "@ui"
import AddTeamMembersForm from "./forms/add-team-members.form"
import CompanyDetailsForm from "./forms/company-details.form"
import CompleteForm from "./forms/complete.form"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import registerBg from "../../../../assets/images/register-bg.jpg"
import { ReactComponent as Logo } from "../../../../assets/svg/logo.svg"

export const RegistrationPage = () => {
  const aside = (
    <VStack
      bgImage={registerBg}
      bgColor="brand.500"
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
        <Logo height="48px" fill="#FFFFFF" />
      </Box>
      <Box>
        <Heading fontWeight={600} fontSize="32px" color="white" mb={4}>
          Welcome to the CityFibre Partner Suite
        </Heading>
        <Text color="white">
          Serve your customers quickly and effectively from everything to
          ordering products and services for businesses to managing and
          resolving service issues
        </Text>
      </Box>
      <WizardStepper orientation="vertical" colorScheme="whiteAlpha" />
    </VStack>
  )

  return (
    <WizardProvider
      pages={[CompanyDetailsForm, AddTeamMembersForm, CompleteForm]}
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
