import { ReactComponent as TeamSVG } from "../../../assets/svg/team.svg"
import FTTPServicesImg from "../../../assets/images/fttp-services.jpg"
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { usePage } from "../../hooks/use-page.hook"
import { Card } from "../../components/card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Page, Table } from "@ui"
import {
  INCIDENT_COLUMNS,
  INCIDENT_DATA,
  INVOICE_COLUMNS,
  INVOICE_DATA,
} from "./data"
import {
  UnorderedList,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ListItem,
  Button,
  HStack,
  Spacer,
  VStack,
  Modal,
  Image,
  Flex,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react"

const DashboardPage = () => {
  usePage({ title: "Dashboard" })
  const [isLoading, setLoading] = useState(true)
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button to="/incidents" variant="link" size="sm" as={Link} mr={6}>
      View all issues
    </Button>,
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      as={Link}
      size="sm"
    >
      Raise an incident
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header pb={2} mb={6} actions={actions}>
        Latest Issues
      </Page.Header>
      <Flex gap={6} mb={6}>
        <Table
          columns={INCIDENT_COLUMNS}
          isLoading={isLoading}
          data={INCIDENT_DATA}
          boxShadow="base"
          bgColor="white"
          rounded={5}
          size="md"
        />
        <VStack flexGrow={1} spacing={6}>
          <HStack
            bgColor="white"
            boxShadow="base"
            width="100%"
            rounded={4}
            py={6}
            px={8}
          >
            <Text fontSize="2xl" fontWeight={800} mr={2}>
              169
            </Text>
            <Text fontWeight={600} color="gray.500">
              Total Incidents
            </Text>
            <Spacer />
            <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
          </HStack>
          <HStack
            bgColor="white"
            boxShadow="base"
            width="100%"
            rounded={4}
            py={6}
            px={8}
          >
            <Text fontSize="2xl" fontWeight={800} mr={2}>
              58
            </Text>
            <Text fontWeight={600} color="gray.500">
              Total Services
            </Text>
            <Spacer />
            <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
          </HStack>
          <HStack
            bgColor="white"
            boxShadow="base"
            width="100%"
            rounded={4}
            py={6}
            px={8}
          >
            <Text fontSize="2xl" fontWeight={800} mr={2}>
              32
            </Text>
            <Text fontWeight={600} color="gray.500">
              Ongoing Incidents
            </Text>
            <Spacer />
            <Icon as={RiBarChartGroupedLine} color="brand.500" fontSize="3xl" />
          </HStack>
        </VStack>
      </Flex>
      <Flex w="100%" gap={6}>
        <Box flex={3}>
          <Page.Header
            pb={2}
            mb={6}
            actions={[
              <Button size="sm" to="/products" variant="link" as={Link}>
                <span>View all products</span>
              </Button>,
            ]}
          >
            Order Products
          </Page.Header>
          <Flex gap={6}>
            <Card rounded={4} boxShadow="base">
              <Card.Section mb={4}>
                <Image
                  src={FTTPServicesImg}
                  objectFit="cover"
                  height="160px"
                  width="100%"
                />
              </Card.Section>
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight={600}>
                  FTTP Services
                </Text>
                <UnorderedList fontSize="sm" listStylePos="inside">
                  <ListItem>1000Mb/s symmetric bandwidth</ListItem>
                  <ListItem>Unlimited</ListItem>
                  <ListItem>Able to support multiple line profiles</ListItem>
                </UnorderedList>
                <Button rightIcon={<ArrowForwardIcon />} isFullWidth>
                  Check Availability
                </Button>
              </VStack>
            </Card>
            <Card rounded={4} boxShadow="base">
              <Card.Section mb={4}>
                <Image
                  src={FTTPServicesImg}
                  objectFit="cover"
                  height="160px"
                  width="100%"
                />
              </Card.Section>
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="lg" fontWeight={600}>
                  FTTP Services
                </Text>
                <UnorderedList fontSize="sm" listStylePos="inside">
                  <ListItem>1000Mb/s symmetric bandwidth</ListItem>
                  <ListItem>Unlimited</ListItem>
                  <ListItem>Able to support multiple line profiles</ListItem>
                </UnorderedList>
                <Button rightIcon={<ArrowForwardIcon />} isFullWidth>
                  Check Availability
                </Button>
              </VStack>
            </Card>
          </Flex>
        </Box>
        <Box flex={2}>
          <Page.Header
            pb={2}
            mb={6}
            actions={[
              <Button size="sm" to="/products" variant="link" as={Link}>
                <span>View all invoices</span>
              </Button>,
            ]}
          >
            Invoices
          </Page.Header>
          <Table
            columns={INVOICE_COLUMNS}
            isLoading={isLoading}
            data={INVOICE_DATA}
            boxShadow="base"
            overflowY="auto"
            bgColor="white"
            rounded={5}
            maxH="80vh"
          />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" pt={8} fontSize="2xl">
            Welcome to the Partner Suite!
          </ModalHeader>
          <ModalBody px={14}>
            <VStack spacing={6} width="100%">
              <Box bgColor="#C2B8FF" px={8} pt={8} rounded={4} width="100%">
                <TeamSVG width="100%" />
              </Box>
              <Box textAlign="center" maxW="450px">
                <Text fontSize="2xl" fontWeight={600} mb={2}>
                  Take the 5 Minute Tutorial
                </Text>
                <Text color="gray.600">
                  The Partner Suite is where you can manage your team, your
                  customers, order products, and conduct help and support. This
                  is a quick tutorial to show you how it works...
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center" py={6}>
            <Button variant="ghost" colorScheme="gray" onClick={onClose} mr={6}>
              Maybe later
            </Button>
            <Button onClick={onClose}>Start Tutorial</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Page>
  )
}

export default DashboardPage
