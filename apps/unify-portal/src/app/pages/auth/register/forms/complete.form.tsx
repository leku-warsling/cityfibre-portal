import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, Text } from "@chakra-ui/react"

const CompleteForm = () => {
  return (
    <Box>
      <Text maxWidth="500px" mb={14}>
        Check your inbox (jm@dawsonandrews.com) for your activation link to the
        Partner Suite. Any team members you have added will also receive an
        activation link.
      </Text>
      <Button rightIcon={<ArrowForwardIcon />} variant="primary" px={10}>
        Sign in to Partner Suite
      </Button>
    </Box>
  )
}

export default {
  Page: CompleteForm,
  isCompleted: true,
  label: "Done!",
}
