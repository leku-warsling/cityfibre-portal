import { Flex } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import { Portal } from "@chakra-ui/portal"

export const Fallback = () => (
  <Portal>
    <Flex
      position="fixed"
      top={0}
      left={0}
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
    </Flex>
  </Portal>
)
