import { FormItem } from "@ui"
import {
  VStack,
  RadioGroup,
  Radio,
  Flex,
  Box,
  Select,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
  TableContainer,
  TableCaption,
  Text,
  Tooltip,
} from "@chakra-ui/react"

const defaultValues = {}

const ProductOptionsStep = () => {
  return (
    <Flex gap={8} w="100%" justifyContent="space-between">
      <VStack align="flex-start" maxWidth="1024px" flexGrow={1} spacing={10}>
        <FormItem
          label="Contract Term"
          name="contract_term"
          render={(props) => (
            <Select {...props} placeholder="Select term" maxW="400px">
              <option value={12}>12 Months</option>
              <option value={36}>36 Months</option>
            </Select>
          )}
        />
        <FormItem
          name="product"
          render={({ onChange, ...props }) => (
            <RadioGroup {...props}>
              <TableContainer>
                <Table>
                  <TableCaption>
                    <Flex
                      justify="space-between"
                      letterSpacing="wider"
                      fontWeight={700}
                      fontSize="xs"
                    >
                      <Text>
                        DISTANCE TO DUCT:{" "}
                        <Text as="span" fontWeight={600}>
                          423m
                        </Text>
                      </Text>
                      <Flex align="center" gap={2}>
                        <Text>STATUS INDICATORS:</Text>
                        <Tooltip
                          hasArrow
                          label="Build costs are likely to be within the standard installation charge"
                          bgColor="white"
                          color="gray.900"
                          rounded={4}
                          p={4}
                        >
                          <Box w={4} h={4} rounded={2} bgColor="green.400" />
                        </Tooltip>
                        <Tooltip
                          hasArrow
                          label="There are likely to be additional installation charges of up to £5,000 on top of the standard installation fee. There are likely to be additional checks needed before your order is processed and additional build time if your order is accepted"
                          bgColor="white"
                          color="gray.900"
                          rounded={4}
                          p={4}
                        >
                          <Box w={4} h={4} rounded={2} bgColor="orange.400" />
                        </Tooltip>
                        <Tooltip
                          hasArrow
                          label="There are likely to be additional installation charges of up to £10,000 on top of the standard installation fee. There are likely to be additional checks needed before your order is processed and additional build time if your order is accepted"
                          bgColor="white"
                          color="gray.900"
                          rounded={4}
                          p={4}
                        >
                          <Box w={4} h={4} rounded={2} bgColor="red.400" />
                        </Tooltip>
                        <Tooltip
                          hasArrow
                          label="Your postcode is a long way from the network and additional installation charges are likely to be over £10,000 on top of the standard installation fee. There are likely to be additional checks needed before your order is processed and additional build time if your order is accepted"
                          bgColor="white"
                          color="gray.900"
                          rounded={4}
                          p={4}
                        >
                          <Box w={4} h={4} rounded={2} bgColor="black" />
                        </Tooltip>
                      </Flex>
                    </Flex>
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Product Name</Th>
                      <Th>Install</Th>
                      <Th>Monthly</Th>
                      <Th>Status</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Ethernet 100 - National Handoff</Td>
                      <Td>£0</Td>
                      <Td>£152</Td>
                      <Td>
                        <Badge>Black</Badge>
                      </Td>
                      <Td>
                        <Radio value="1" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Ethernet 100 - National Handoff</Td>
                      <Td>£0</Td>
                      <Td>£152</Td>
                      <Td>
                        <Badge>Black</Badge>
                      </Td>
                      <Td>
                        <Radio value="2" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Ethernet 100 - National Handoff</Td>
                      <Td>£0</Td>
                      <Td>£152</Td>
                      <Td>
                        <Badge>Black</Badge>
                      </Td>
                      <Td>
                        <Radio value="3" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Ethernet 100 - National Handoff</Td>
                      <Td>£0</Td>
                      <Td>£152</Td>
                      <Td>
                        <Badge>Black</Badge>
                      </Td>
                      <Td>
                        <Radio value="4" />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </RadioGroup>
          )}
        />
      </VStack>
      <Box flexGrow={1} width="100%" maxW="750px">
        <Text fontWeight={600} mb={2}>
          Network Map
        </Text>
        <Box
          src="https://map.enta.cloud/postcode/BaMVaHZ6Q4/Milton%20Keynes/MK6 2XJ"
          title="Network Map"
          height="500px"
          rounded={4}
          overflow="hidden"
          width="100%"
          as="iframe"
        />
      </Box>
    </Flex>
  )
}

export default {
  label: "Product Options",
  Step: ProductOptionsStep,
  defaultValues,
}
