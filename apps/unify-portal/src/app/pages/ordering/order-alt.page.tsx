import { usePage } from "../../hooks/use-page.hook"
import { Page } from "@ui"
import {
  Button,
  ButtonGroup,
  Divider,
  Heading,
  SimpleGrid,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react"

export const OrderAltPage = () => {
  usePage({ title: "Orders" })

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2}>
        Order
      </Page.Header>
      <SimpleGrid columns={2} spacing={8}>
        <VStack
          align="flex-start"
          bgColor="white"
          boxShadow="base"
          rounded={4}
          spacing={8}
          px={12}
          py={10}
        >
          <Heading fontSize="xl">Your Order</Heading>
          <SimpleGrid columns={2} spacingY={3} spacingX={6}>
            <Text fontWeight={600}>Product</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>Line Profile</Text>
            <Text>T220/15/40</Text>
            <Text fontWeight={600}>Created</Text>
            <Text>08/07/2022</Text>
            <Text fontWeight={600}>Last Updated</Text>
            <Text>08/07/2022</Text>
            <Text fontWeight={600}>ISP Migration</Text>
            <Text>No</Text>
            <Text fontWeight={600}>Service Reference</Text>
            <Text></Text>
            <Text fontWeight={600}>Seller Order Reference</Text>
            <Text>STAGING00002088</Text>
            <Text fontWeight={600}>Buyer Order Reference</Text>
            <Text>5514331212312323</Text>
            <Text fontWeight={600}>Status</Text>
            <Text>Cancelled</Text>
          </SimpleGrid>
          <Divider borderColor="gray.300" />
          <ButtonGroup spacing={4}>
            <Button variant="outline" colorScheme="gray">
              Cancel Order
            </Button>
            <Button>Change Order</Button>
          </ButtonGroup>
        </VStack>
        <VStack
          align="flex-start"
          bgColor="white"
          boxShadow="base"
          rounded={4}
          spacing={8}
          px={12}
          py={10}
        >
          <Heading fontSize="xl">Site</Heading>
          <SimpleGrid columns={2} spacingY={3} spacingX={6}>
            <Text fontWeight={600}>Address</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>Site Contact</Text>
            <Text>T220/15/40</Text>
            <Text fontWeight={600}>Phone</Text>
            <Text>08/07/2022</Text>
            <Text fontWeight={600}>Email</Text>
            <Text>08/07/2022</Text>
            <Text fontWeight={600}>Hazards</Text>
            <Text>No</Text>
            <Text fontWeight={600}>Access Restrictions</Text>
            <Text>Key Code</Text>
          </SimpleGrid>
        </VStack>
        <VStack
          align="flex-start"
          bgColor="white"
          boxShadow="base"
          rounded={4}
          spacing={8}
          px={12}
          py={10}
        >
          <Heading fontSize="xl">Appointment</Heading>
          <SimpleGrid columns={2} spacingY={3} spacingX={6}>
            <Text fontWeight={600}>Status</Text>
            <Text>Cancelled</Text>
            <Text fontWeight={600}>Date and Time</Text>
            <Text>Cancelled</Text>
          </SimpleGrid>
          <Spacer />
          <Divider borderColor="gray.300" />
          <Button>Amend Appointment</Button>
        </VStack>
        <VStack
          align="flex-start"
          bgColor="white"
          boxShadow="base"
          rounded={4}
          spacing={8}
          px={12}
          py={10}
        >
          <Heading fontSize="xl">Network</Heading>
          <SimpleGrid columns={2} spacingY={3} spacingX={6}>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
            <Text fontWeight={600}>CVLAN</Text>
            <Text>Residential FTTH</Text>
          </SimpleGrid>
        </VStack>
        <VStack
          align="flex-start"
          bgColor="white"
          boxShadow="base"
          rounded={4}
          spacing={8}
          px={12}
          py={10}
        >
          <Heading fontSize="xl">History</Heading>
          <Table>
            <Thead>
              <Tr>
                <Th pl={0}>Date</Th>
                <Th pl={0}>User</Th>
                <Th pl={0}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0} borderBottom="none">
                  09/06/2022
                </Td>
                <Td pl={0} borderBottom="none">
                  Jordan
                </Td>
                <Td pl={0} borderBottom="none">
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </VStack>
        <VStack
          align="flex-start"
          bgColor="white"
          boxShadow="base"
          rounded={4}
          spacing={8}
          px={12}
          py={10}
        >
          <Heading fontSize="xl">Activities</Heading>
          <Table>
            <Thead>
              <Tr>
                <Th pl={0}>Date</Th>
                <Th pl={0}>User</Th>
                <Th pl={0}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0}>09/06/2022</Td>
                <Td pl={0}>Jordan</Td>
                <Td pl={0}>
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
              <Tr>
                <Td pl={0} borderBottom="none">
                  09/06/2022
                </Td>
                <Td pl={0} borderBottom="none">
                  Jordan
                </Td>
                <Td pl={0} borderBottom="none">
                  <Button variant="link">View</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </VStack>
      </SimpleGrid>
    </Page>
  )
}
