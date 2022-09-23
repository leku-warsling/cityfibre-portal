import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react"
import { Logo, Page } from "@ui/lib"
import { useEffect, useState } from "react"
import { usePage } from "../../hooks/use-page.hook"

export const InvoicePage = () => {
  usePage({ title: "Billing" })
  const [, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <Page maxH="93vh" overflowY="auto">
      <VStack
        width="100%"
        rounded={4}
        color="gray.600"
        bgColor="white"
        boxShadow="base"
        maxW="1200px"
        spacing={12}
        ml="auto"
        mr="auto"
        pt={10}
        pb={20}
        px={12}
      >
        <HStack w="100%" justifyContent="space-between" color="primary.500">
          <Logo height="50px" />
          <Text fontSize="xl">
            Invoice <strong>#CFL0006007</strong>
          </Text>
        </HStack>
        <HStack w="100%" justifyContent="space-between" color="gray.600">
          <VStack align="flex-start" spacing={0.5} fontWeight={600}>
            <Text>15 Bedford Street</Text>
            <Text>London, Greater London</Text>
            <Text>WC2E 9HE</Text>
            <Text>United Kingdom</Text>
          </VStack>
          <SimpleGrid columns={2} spacingY={0.5} spacingX={2}>
            <Text>Date Issued:</Text>
            <Text fontWeight={600}>13 Dec 2021</Text>
            <Text>Due Date:</Text>
            <Text fontWeight={600}>23 Dec 2021</Text>
          </SimpleGrid>
        </HStack>
        <Divider borderColor="gray.300" />
        <HStack w="100%" justifyContent="space-between">
          <Box>
            <Text fontWeight={600} mb={6}>
              Invoice To:
            </Text>
            <VStack align="flex-start" spacing={0.5}>
              <Text>Jordan Stevenson</Text>
              <Text>Hall-Robbins PLC</Text>
              <Text>7777 Mendez Plains, UK</Text>
              <Text>(616) 865-4180</Text>
              <Text>don85@johnson.com</Text>
            </VStack>
          </Box>
          <Box>
            <Text fontWeight={600} mb={6}>
              Payment Details:
            </Text>
            <SimpleGrid columns={2} spacingY={0.5} spacingX={0}>
              <Text>Total Due:</Text>
              <Text fontWeight={600} color="primary.500">
                £4000.00
              </Text>
              <Text>Bank name:</Text>
              <Text fontWeight={600}>Halifax</Text>
              <Text>Country:</Text>
              <Text fontWeight={600}>United Kingdom</Text>
              <Text>IBAN:</Text>
              <Text fontWeight={600}>ETD95476213874685</Text>
              <Text>SWIFT code:</Text>
              <Text fontWeight={600}>BR91905</Text>
            </SimpleGrid>
          </Box>
        </HStack>
        <Divider borderColor="gray.300" />
        <Table>
          <Thead>
            <Tr>
              <Th>ITEM DESCRIPTION</Th>
              <Th>UNIT PRICE</Th>
              <Th>QUANTITY</Th>
              <Th>VAT (%)</Th>
              <Th>TOTAL</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Recurring - FTTH Monthly Charges |Stirling|May</Td>
              <Td>£8.81</Td>
              <Td>1</Td>
              <Td>£1.76</Td>
              <Td>£10.57</Td>
            </Tr>
            <Tr>
              <Td>Recurring - FTTH Monthly Charges |Stirling|May</Td>
              <Td>£8.81</Td>
              <Td>1</Td>
              <Td>£1.76</Td>
              <Td>£10.57</Td>
            </Tr>
            <Tr>
              <Td>Recurring - FTTH Monthly Charges |Stirling|May</Td>
              <Td>£8.81</Td>
              <Td>1</Td>
              <Td>£1.76</Td>
              <Td>£10.57</Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Page>
  )
}
