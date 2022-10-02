import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import {
  Badge,
  Box,
  Divider,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout"
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input"
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { Icon } from "@chakra-ui/icon"
import { Avatar } from "@chakra-ui/avatar"
import { Page, util } from "@ui/lib"
import { Step, Steps } from "chakra-ui-steps"
import times from "ramda/es/times"
import { useMemo } from "react"
import { BiMessageDetail, BiSend } from "react-icons/bi"
import { FiPaperclip } from "react-icons/fi"
import { useParams } from "react-router-dom"

const createCommunication = (n: number) => ({
  id: util.data.createSequence("???######").toUpperCase(),
  subject: `Test QA${n + 1}`,
  status: "In Progress",
  raised_at: new Date().toLocaleDateString(),
  updated_at: new Date().toLocaleDateString(),
})

const ServicePage = () => {
  const { id } = useParams()
  const communications = useMemo(() => times(createCommunication, 5), [])
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={8} pb={2}>
        Service: #{id}
      </Page.Header>
      <Flex justify="center" w="100%" mb={14}>
        <Steps
          labelOrientation="vertical"
          colorScheme="primary"
          maxWidth="1200px"
          activeStep={2}
          sx={{
            svg: {
              color: "black",
            },
            span: {
              fontWeight: 800,
              fontSize: "xl",
              letterSpacing: "wide",
            },
          }}
        >
          <Step isCompletedStep label="Order Accepted" />
          <Step isCompletedStep label="Survey Complete" />
          <Step isCompletedStep label="Wayleave Issued" />
          <Step isCompletedStep label="Wayleave Complete" />
          <Step isCompletedStep label="Commited Delivery Date" />
          <Step isCompletedStep label="Live" />
        </Steps>
      </Flex>
      <Tabs
        rounded={4}
        boxShadow="base"
        bgColor="white"
        maxW="1400px"
        ml="auto"
        mr="auto"
      >
        <TabList mx={10} pt={6} gap={6}>
          <Tab fontWeight={600}>Basic Information</Tab>
          <Tab fontWeight={600}>Location</Tab>
          <Tab fontWeight={600}>Contact</Tab>
          <Tab fontWeight={600}>Appointment</Tab>
          <Tab fontWeight={600}>Network</Tab>
          <Tab fontWeight={600}>Communications</Tab>
          <Tab fontWeight={600}>History</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={10} py={8}>
            <SimpleGrid
              columns={4}
              spacingY={3}
              spacingX={6}
              maxWidth="1024px"
              mb={14}
            >
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
            <Divider borderColor="gray.300" mb={8} />
            <ButtonGroup spacing={4}>
              <Button variant="outline" colorScheme="gray">
                Request Change
              </Button>
              <Button>Request Cease</Button>
            </ButtonGroup>
          </TabPanel>
          <TabPanel px={10} py={8}>
            <SimpleGrid
              columns={2}
              spacingY={3}
              spacingX={6}
              maxWidth="500px"
              mb={14}
            >
              <Text fontWeight={600}>Address</Text>
              <Text>
                MRTEST202105121631,
                <br /> The Keepers Flat Edinburgh Zoo 134 Corstorphine Road,
                <br /> Edinburgh,
                <br /> EH12 6TS
              </Text>
              <Text fontWeight={600}>Site Contact</Text>
              <Text>Joe Bloggs</Text>
              <Text fontWeight={600}>Phone</Text>
              <Text>01952 99 88 66</Text>
              <Text fontWeight={600}>Email</Text>
              <Text>joe.bloggs@cityfibre.com</Text>
              <Text fontWeight={600}>Hazards</Text>
              <Text>None</Text>
              <Text fontWeight={600}>Access Restrictions</Text>
              <Text>Key Code</Text>
            </SimpleGrid>
          </TabPanel>
          <TabPanel px={10} py={8}>
            <SimpleGrid
              columns={2}
              spacingY={3}
              spacingX={6}
              maxWidth="450px"
              mb={24}
            >
              <Text fontWeight={600}>Name</Text>
              <Text>Adam Astle</Text>
              <Text fontWeight={600}>Email</Text>
              <Text>adam.astle@cityfibre.com</Text>
              <Text fontWeight={600}>Telephone</Text>
              <Text>01952 343434</Text>
            </SimpleGrid>
            <Divider borderColor="gray.300" mb={8} />
            <Button>Amend</Button>
          </TabPanel>
          <TabPanel px={10} py={8}>
            <SimpleGrid
              columns={2}
              spacingY={3}
              spacingX={6}
              maxWidth="600px"
              mb={24}
            >
              <Text fontWeight={600}>Status</Text>
              <Text>
                <Badge py="1.5" px={2} colorScheme="red">
                  Cancelled
                </Badge>
              </Text>
              <Text fontWeight={600}>Date and Time</Text>
              <Text>
                <Badge py="1.5" px={2} colorScheme="red">
                  Cancelled
                </Badge>
              </Text>
            </SimpleGrid>
            <Divider borderColor="gray.300" mb={8} />
            <Button>Amend Appointment</Button>
          </TabPanel>
          <TabPanel px={10} py={8}>
            <SimpleGrid
              columns={2}
              spacingY={3}
              spacingX={6}
              maxWidth="600px"
              mb={14}
            >
              <Text fontWeight={600}>Customer VLAN</Text>
              <Text>Residential FTTH</Text>
              <Text fontWeight={600}>Service VLAN</Text>
              <Text>Residential FTTH</Text>
              <Text fontWeight={600}>ENNI</Text>
              <Text>N/A</Text>
              <Text fontWeight={600}>Remote Agent ID</Text>
              <Text>VFH75139</Text>
              <Text fontWeight={600}>Authentication Agent</Text>
              <Text>PPPoE</Text>
            </SimpleGrid>
            <Divider borderColor="gray.300" mb={8} />
            <Button>Amend</Button>
          </TabPanel>
          <TabPanel px={10} py={6}>
            <Table mb={6}>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Subject</Th>
                  <Th>Status</Th>
                  <Th>Date Raised</Th>
                  <Th>Last Updated</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {communications.map((row, index) => {
                  const isLast = index + 1 === communications.length
                  return (
                    <Tr key={index}>
                      <Td
                        borderBottom={isLast ? "none" : undefined}
                        fontWeight={700}
                      >
                        {row.id}
                      </Td>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        {row.subject}
                      </Td>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        <Badge py={1.5} px={2}>
                          {row.status}
                        </Badge>
                      </Td>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        {row.raised_at}
                      </Td>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        {row.updated_at}
                      </Td>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        <Button
                          colorScheme="gray"
                          onClick={onOpen}
                          variant="link"
                          size="sm"
                        >
                          View
                        </Button>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel px={10} py={6}>
            <Table maxW="600px" mb={6}>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>User</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>09/06/2022</Td>
                  <Td>CityFibre</Td>
                  <Td>Case Created</Td>
                </Tr>
                <Tr>
                  <Td>09/06/2022</Td>
                  <Td>CityFibre</Td>
                  <Td>Case Created</Td>
                </Tr>
                <Tr>
                  <Td>09/06/2022</Td>
                  <Td>CityFibre</Td>
                  <Td>Case Created</Td>
                </Tr>
                <Tr>
                  <Td>09/06/2022</Td>
                  <Td>CityFibre</Td>
                  <Td>Case Created</Td>
                </Tr>
                <Tr>
                  <Td borderBottom="none">09/06/2022</Td>
                  <Td borderBottom="none">CityFibre</Td>
                  <Td borderBottom="none">Case Created</Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            alignItems="center"
            display="flex"
            fontSize="2xl"
            color="brand.600"
            pt={8}
            px={10}
          >
            <Icon as={BiMessageDetail} mr={2} fontSize="3xl" /> Case #RFS001940
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px={10}>
            <VStack spacing={6} width="100%" align="flex-start">
              <Box>
                <Text fontWeight={600}>Subject:</Text>
                <Text color="gray.700">Test QA1</Text>
              </Box>
              <Box>
                <Text fontWeight={600}>Description:</Text>
                <Text maxW="500px" color="gray.700">
                  Location with UPRN 15079516 is flagged as SUR. Additional
                  survey needs to be made in order to proceed with the order.
                </Text>
              </Box>
              <Text fontWeight={600}>Comments:</Text>
              <VStack w="100%" align="flex-start" spacing={6} pb={8}>
                <Flex>
                  <Flex gap={3}>
                    <Avatar name="City Fibre" bgColor="primary.500" />
                    <Box>
                      <Text
                        fontWeight={600}
                        color="gray.400"
                        fontSize="xs"
                        letterSpacing="wide"
                        mb={1}
                      >
                        Cityfibre 12:31 PM
                      </Text>
                      <Text
                        bgColor="primary.500"
                        color="white"
                        fontSize="sm"
                        maxW="375px"
                        rounded={10}
                        fontWeight={600}
                        borderTopLeftRadius={0}
                        p={4}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In bibendum pulvinar vestibulum.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex justify="flex-end" w="100%">
                  <Flex gap={3} flexDir="row-reverse">
                    <Avatar name="Luke Rawlings" />
                    <Flex justify="flex-end" flexDir="column" align="flex-end">
                      <Text
                        fontWeight={600}
                        color="gray.400"
                        fontSize="xs"
                        letterSpacing="wide"
                        mb={1}
                      >
                        Luke Rawlings 12:33 PM
                      </Text>
                      <Text
                        bgColor="gray.100"
                        fontSize="sm"
                        maxW="375px"
                        rounded={10}
                        borderTopRightRadius={0}
                        fontWeight={600}
                        p={4}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In bibendum pulvinar vestibulum.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex>
                  <Flex gap={3}>
                    <Avatar name="City Fibre" bgColor="primary.500" />
                    <Box>
                      <Text
                        fontWeight={600}
                        color="gray.400"
                        fontSize="xs"
                        letterSpacing="wide"
                        mb={1}
                      >
                        Cityfibre 12:37 PM
                      </Text>
                      <Text
                        bgColor="primary.500"
                        color="white"
                        fontSize="sm"
                        maxW="375px"
                        fontWeight={600}
                        rounded={10}
                        borderTopLeftRadius={0}
                        p={4}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In bibendum pulvinar vestibulum.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="flex-end" py={8} px={10}>
            <InputGroup variant="filled" size="lg">
              <InputLeftElement
                as={IconButton}
                aria-label="Send Message"
                variant="link"
                fontSize="xl"
                icon={<FiPaperclip />}
              />
              <Input placeholder="Type a message..." />
              <InputRightElement
                as={IconButton}
                aria-label="Send Message"
                variant="link"
                fontSize="xl"
                icon={<BiSend />}
              />
            </InputGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Page>
  )
}

export default ServicePage
