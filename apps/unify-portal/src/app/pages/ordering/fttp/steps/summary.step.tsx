import { SimpleGrid, Text } from "@chakra-ui/react"

const defaultValues = {}

const SummaryStep = () => {
  return (
    <>
      <Text maxW="500px" mb={8}>
        Please verify the details below are correct before placing your order.
      </Text>
      <SimpleGrid columns={4} spacing={6} maxWidth="1024px" mb={12}>
        <Text fontWeight={600}>Order Reference:</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
        <Text fontWeight={600}>Order Reference</Text>
        <Text color="gray.600">0123456</Text>
      </SimpleGrid>
    </>
  )
}

export default {
  label: "Summary",
  Step: SummaryStep,
  isFinalStep: true,
  defaultValues,
}
