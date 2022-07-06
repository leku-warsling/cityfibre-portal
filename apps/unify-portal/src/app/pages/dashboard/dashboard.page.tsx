import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { RiBarChartGroupedLine } from "react-icons/ri"
import { Card } from "../../components/card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Page, Table } from "@ui"
import FTTPServicesImg from "../../../assets/images/fttp-services.jpg"
import {
  INCIDENT_COLUMNS,
  INCIDENT_DATA,
  INVOICE_COLUMNS,
  INVOICE_DATA,
} from "./data"
import {
  UnorderedList,
  ListItem,
  Button,
  HStack,
  Spacer,
  VStack,
  Image,
  Flex,
  Icon,
  Text,
  Box,
} from "@chakra-ui/react"

const DashboardPage = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button to="/incidents/create" variant="link" size="sm" as={Link} mr={6}>
      <span>View all issues</span>
    </Button>,
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      as={Link}
      size="sm"
    >
      <span>Raise an incident</span>
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
          size="md"
          boxShadow="base"
          overflowY="auto"
          bgColor="white"
          fontSize="14px"
          rounded={5}
          maxH="80vh"
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
    </Page>
  )
}

export default DashboardPage
