import { WizardPanel, WizardProvider, WizardStepper } from "@ui/lib"
import AddTeamMembersStep from "./steps/add-team-members.step"
import CompanyDetailsStep from "./steps/company-details.step"
import CompleteStep from "./steps/complete.step"
import {
  Box,
  Flex,
  Heading,
  Hide,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import registerBg from "../../../../assets/images/register-bg.jpg"
import { ReactComponent as Logo } from "../../../../assets/svg/logo.svg"

export const RegistrationPage = () => {
  const size = useBreakpointValue({ base: "md", lg: "lg" } as const)
  const aside = (
    <VStack
      height={{ base: "auto", lg: "100vh" }}
      bgImage={registerBg}
      bgColor="primary.500"
      justify="start"
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
      steps={[CompanyDetailsStep, AddTeamMembersStep, CompleteStep]}
      onComplete={console.log}
      size={size}
    >
      <Flex id="registration">
        <Hide below="lg">{aside}</Hide>
        <WizardPanel
          minHeight={{ base: "100vh", lg: "auto" }}
          height={{ base: "auto", lg: "100vh" }}
          pt={{ lg: 36, base: 14 }}
          px={{ lg: 36, base: 4 }}
          pb={{ lg: 8, base: 6 }}
          bgColor="white"
          flexGrow={1}
        />
      </Flex>
    </WizardProvider>
  )
}
