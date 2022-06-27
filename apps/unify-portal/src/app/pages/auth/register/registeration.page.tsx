import { WizardPanel, WizardProvider, WizardStepper } from "@ui"
import AddTeamMembersForm from "./forms/add-team-members.form"
import CompanyDetailsForm from "./forms/company-details.form"
import CompleteForm from "./forms/complete.form"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import registerBg from "../../../../assets/images/register-bg.jpg"
import { ReactComponent as Logo } from "../../../../assets/svg/logo.svg"

const RegistrationPage = () => {
  return (
    <WizardProvider
      pages={[CompanyDetailsForm, AddTeamMembersForm, CompleteForm]}
      onComplete={console.log}
    >
      <Flex>
        <VStack
          bgImage={registerBg}
          bgColor="brand.500"
          justify="start"
          height="100vh"
          bgSize="cover"
          align="start"
          width="600px"
          spacing={10}
          p={14}
        >
          <Box width="100%" mb={20}>
            <Logo height="40px" />
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
        <WizardPanel flexGrow={1} pt={36} px={24} pb={8} height="100vh" />
      </Flex>
    </WizardProvider>
  )
}

export default {
  Page: RegistrationPage,
  path: "/register",
}
