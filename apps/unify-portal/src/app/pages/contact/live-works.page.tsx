import { Flex, Text } from "@chakra-ui/layout"
import { Title } from "@ui/lib/data-display/title"
import { LiveWorksBanner } from "../../components/banners/live-works-banner"
import { LiveWorksForm } from "./forms/live-works.form"

const LiveWorksPage = () => {
  return (
    <Flex h="100vh" maxW="100vw">
      <LiveWorksBanner />
      <Flex flexGrow={1} flexDirection="column" justify="center" align="center">
        <Flex
          flexDirection="column"
          textAlign="center"
          justify="center"
          align="center"
          gap={3}
          mb={12}
        >
          <Title strapline="Live Works">Provide Information</Title>
          <Text maxWidth="525px" color="gray.900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            ex risus. Integer tortor dui, pulvinar eu leo vitae
          </Text>
        </Flex>
        <LiveWorksForm onSubmit={console.log} maxWidth="600px" size="lg" />
      </Flex>
    </Flex>
  )
}

export default LiveWorksPage
