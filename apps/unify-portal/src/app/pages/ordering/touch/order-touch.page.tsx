import { Icon } from "@chakra-ui/icon"
import { useDisclosure } from "@chakra-ui/hooks"
import { Avatar } from "@chakra-ui/avatar"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion"
import {
  Divider,
  VStack,
  Badge,
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  SimpleGrid,
} from "@chakra-ui/layout"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button"
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input"
import { util } from "@ui/lib"
import times from "ramda/es/times"
import { useMemo } from "react"
import { BiMessageDetail, BiSend } from "react-icons/bi"
import { FiPaperclip } from "react-icons/fi"
import { Link } from "react-router-dom"

const createCommunication = (n: number) => ({
  id: util.data.createSequence("???######").toUpperCase(),
  subject: `Test QA${n + 1}`,
  status: "In Progress",
  raised_at: new Date().toLocaleDateString(),
  updated_at: new Date().toLocaleDateString(),
})

const OrderTouchPage = () => {
  const communications = useMemo(() => times(createCommunication, 5), [])
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box py={6} px={2}>
      <HStack justify="space-between" width="100%" mb={4}>
        <Heading fontSize="lg">Order ID: S751922</Heading>
        <Button size="sm" as={Link} to="/services">
          My Services
        </Button>
      </HStack>
      <Accordion bgColor="white" rounded={4} boxShadow="base">
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Basic Information
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <Text fontSize="sm" fontWeight={600}>
                Address
              </Text>
              <Text fontSize="sm">58 Lion Road, Liverpool, LE8 9EP</Text>
              <Text fontSize="sm" fontWeight={600}>
                Site Contact
              </Text>
              <Text fontSize="sm">Sammy Test QA</Text>
              <Text fontSize="sm" fontWeight={600}>
                Email
              </Text>
              <Text fontSize="sm">testing@test.com</Text>
              <Text fontSize="sm" fontWeight={600}>
                Hazards
              </Text>
              <Text fontSize="sm">None</Text>
              <Text fontSize="sm" fontWeight={600}>
                Access Restrictions
              </Text>
              <Text fontSize="sm">Key Code</Text>
              <Text fontSize="sm" fontWeight={600}>
                Phone
              </Text>
              <Text fontSize="sm">0712345678</Text>
            </SimpleGrid>
            <ButtonGroup width="100%" spacing={4}>
              <Button flex={1} size="sm" variant="outline" colorScheme="gray">
                Cancel Order
              </Button>
              <Button flex={1} size="sm">
                Change Order
              </Button>
            </ButtonGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Location
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} fontSize="sm" mb={14}>
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
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Contact
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} fontSize="sm" mb={24}>
              <Text fontWeight={600}>Name</Text>
              <Text>Adam Astle</Text>
              <Text fontWeight={600}>Email</Text>
              <Text>adam.astle@cityfibre.com</Text>
              <Text fontWeight={600}>Telephone</Text>
              <Text>01952 343434</Text>
            </SimpleGrid>
            <Divider borderColor="gray.300" mb={6} />
            <Button size="sm" w="full">
              Amend
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Appointment
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} fontSize="sm" mb={24}>
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
            <Divider borderColor="gray.300" mb={6} />
            <Button size="sm" w="full">
              Amend Appointment
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Network
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <SimpleGrid columns={2} spacing={4} fontSize="sm" mb={14}>
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
            <Divider borderColor="gray.300" mb={6} />
            <Button size="sm" w="full">
              Amend
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                Communications
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <Table mb={6} size="sm">
              <Thead>
                <Tr>
                  <Th>Subject</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {communications.map((row, index) => {
                  const isLast = index + 1 === communications.length
                  return (
                    <Tr key={index}>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        {row.subject}
                      </Td>
                      <Td borderBottom={isLast ? "none" : undefined}>
                        <Badge py={1.5} px={2}>
                          {row.status}
                        </Badge>
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
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton py={4}>
              <Text fontSize="sm" flex={1} textAlign="left" fontWeight={800}>
                History
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={6}>
            <Table maxW="600px" size="sm" mb={6}>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
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
    </Box>
  )
}

export default OrderTouchPage
