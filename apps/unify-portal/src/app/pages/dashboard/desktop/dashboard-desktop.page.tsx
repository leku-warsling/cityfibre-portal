import { ArrowForwardIcon, TriangleUpIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import {
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from "@chakra-ui/progress"
import { useDisclosure } from "@chakra-ui/hooks"
import { Select } from "@chakra-ui/select"
import { Icon } from "@chakra-ui/icon"
import { Button } from "@chakra-ui/button"
import { Page } from "@ui/lib/layout"
import random from "lodash-es/random"
import times from "ramda/es/times"
import { BiBookReader } from "react-icons/bi"
import { ReactComponent as EthernetIcon } from "../../../../assets/svg/ethernet-icon.svg"
import { ReactComponent as FTTPIcon } from "../../../../assets/svg/fttp-icon.svg"
import { ReactComponent as ISPHubSVG } from "../../../../assets/svg/isp-hub.svg"
import { ReactComponent as TeamSVG } from "../../../../assets/svg/team.svg"
import { GroupStats } from "../../../components/statistic/group-stats"
import {
  INCIDENT_COLUMNS,
  INCIDENT_DATA,
  INVOICE_COLUMNS,
  INVOICE_DATA,
} from "../data"
import BandwidthUsage from "./components/bandwidth-usage"
import BillingGauge from "./components/billing-gauge"
import DonutChart from "./components/donut-chart"
import NetworkOutages from "./components/network-outages"
import StatCallToAction from "./components/stat-cta"
import TableCard from "./components/table-card"

const DashboardDesktopPage = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  return (
    <Page maxH="93vh" overflowY="auto">
      <Flex gap={6} mb={6}>
        <GroupStats />
        <Box
          rounded={4}
          boxShadow="base"
          bgColor="white"
          flex={1}
          px={8}
          pt={6}
          pb={4}
        >
          <Flex justify="space-between" mb={4} align="center">
            <Heading fontSize="lg" fontWeight={600}>
              Networks
            </Heading>
            <Select variant="outline" maxW="150px" defaultValue="1">
              <option value="">Status</option>
              <option value="1">Changes</option>
            </Select>
          </Flex>
          <List spacing={2} mb={3}>
            {times(
              () => (
                <ListItem
                  _hover={{ bgColor: "primary.500", color: "white" }}
                  justifyContent="space-between"
                  bgColor="gray.50"
                  display="flex"
                  rounded={4}
                  px={4}
                  py={2}
                >
                  <Text fontWeight={600} fontSize="sm">
                    S123456
                  </Text>
                  <Text fontWeight={600} fontSize="sm">
                    23/08/2022 13:14PM
                  </Text>
                  <Badge colorScheme="red" px={2} py={1}>
                    Ongoing
                  </Badge>
                </ListItem>
              ),
              5
            )}
          </List>
          <Flex justify="flex-end">
            <Button
              variant="ghost"
              colorScheme="gray"
              size="sm"
              rightIcon={<ArrowForwardIcon />}
            >
              View all
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex width="100%" minH="400px" mb={6} gap={6}>
        <NetworkOutages />
        <BillingGauge />
        <DonutChart />
      </Flex>
      <Flex width="100%" minH="400px" mb={6} gap={6}>
        <TableCard
          columns={INCIDENT_COLUMNS}
          data={INCIDENT_DATA}
          title="Incidents"
          actions={
            <Select variant="outline" maxW="200px">
              <option value="">Latest</option>
              <option value="1">Delayed</option>
              <option value="2">Resolved</option>
            </Select>
          }
          footer={
            <Button
              float="right"
              variant="ghost"
              colorScheme="gray"
              mt={3}
              mr={4}
              rightIcon={<ArrowForwardIcon />}
            >
              View all issues
            </Button>
          }
        />
        <Flex
          flexDir="column"
          flex={1}
          maxWidth="420px"
          justify="space-between"
        >
          <StatCallToAction value="12" label="Invoices Due" />
          <StatCallToAction value="4" label="New Incidents" />
          <StatCallToAction value="7" label="New Payments" />
          <StatCallToAction value="4" label="Services Delayed" />
          <StatCallToAction value="4" label="Services Delayed" />
        </Flex>
      </Flex>
      <Flex
        mb={6}
        bgColor="primary.500"
        rounded={4}
        boxShadow="base"
        py={6}
        px={8}
        color="white"
        align="center"
        justifyContent="space-between"
        gap={6}
      >
        <Box>
          <Text
            fontWeight={800}
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="widest"
            lineHeight={1}
          >
            Invoices
          </Text>
          <Text
            fontWeight={800}
            fontSize="3xl"
            color="secondary.500"
            lineHeight={1.3}
          >
            400
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={800}
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="widest"
            lineHeight={1}
          >
            Credit Notes
          </Text>
          <Text
            fontWeight={800}
            fontSize="3xl"
            color="secondary.500"
            lineHeight={1.3}
          >
            {random(100000, 999999).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={800}
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="widest"
            lineHeight={1}
          >
            Total Payments
          </Text>
          <Text
            fontWeight={800}
            fontSize="3xl"
            color="secondary.500"
            lineHeight={1.3}
          >
            {random(100000, 999999).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={800}
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="widest"
            lineHeight={1}
          >
            Statements
          </Text>
          <Text
            fontWeight={800}
            fontSize="3xl"
            color="secondary.500"
            lineHeight={1.3}
          >
            400
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={800}
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="widest"
            lineHeight={1}
          >
            Orders On Hold
          </Text>
          <Text
            fontWeight={800}
            fontSize="3xl"
            color="secondary.500"
            lineHeight={1.3}
          >
            40
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight={800}
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="widest"
            lineHeight={1}
          >
            Bandwidth Usage
          </Text>
          <Text
            fontWeight={800}
            fontSize="3xl"
            color="secondary.500"
            lineHeight={1.3}
          >
            400GB
          </Text>
        </Box>
        <Flex
          bgColor="secondary.500"
          w={12}
          h={12}
          color="black"
          align="center"
          justify="center"
          rounded={4}
        >
          <Icon as={ArrowForwardIcon} fontSize="2xl" />
        </Flex>
      </Flex>
      <Flex mb={6} gap={6}>
        <SimpleGrid columns={2} spacing={6} flex={1} maxW="500px">
          <Flex
            flexDir="column"
            rounded={4}
            boxShadow="base"
            bgColor="white"
            p={6}
          >
            <Text fontSize="xl" fontWeight={600} mb={2}>
              Total Orders
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={2}>
              120
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              color="brand.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text fontSize="sm">30%</Text>
            </Flex>
            <Text fontWeight={600} color="gray.500" fontSize="sm">
              Since last month
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            rounded={4}
            boxShadow="base"
            bgColor="white"
            p={6}
          >
            <Text fontSize="xl" fontWeight={600} mb={2}>
              In Progress
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={2}>
              52
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              color="brand.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text fontSize="sm">30%</Text>
            </Flex>
            <Text fontWeight={600} color="gray.500" fontSize="sm">
              Since last month
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            rounded={4}
            boxShadow="base"
            bgColor="white"
            p={6}
          >
            <Text fontSize="xl" fontWeight={600} mb={2}>
              Cancelled Orders
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={2}>
              15
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              color="brand.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text fontSize="sm">30%</Text>
            </Flex>
            <Text fontWeight={600} color="gray.500" fontSize="sm">
              Since last month
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            rounded={4}
            boxShadow="base"
            bgColor="white"
            p={6}
          >
            <Text fontSize="xl" fontWeight={600} mb={2}>
              Completed Orders
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={2}>
              60
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              color="brand.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text fontSize="sm">30%</Text>
            </Flex>
            <Text fontWeight={600} color="gray.500" fontSize="sm">
              Since last month
            </Text>
          </Flex>
        </SimpleGrid>
        <TableCard
          title="Invoices"
          columns={INVOICE_COLUMNS}
          data={INVOICE_DATA}
          actions={
            <Select variant="outline" maxW="200px">
              <option value="">Latest</option>
              <option value="1">Due</option>
              <option value="1">Past Due</option>
              <option value="2">Closed</option>
            </Select>
          }
          footer={
            <Button
              float="right"
              variant="ghost"
              colorScheme="gray"
              mt={3}
              mr={4}
              rightIcon={<ArrowForwardIcon />}
            >
              View all invoices
            </Button>
          }
        />
      </Flex>
      <Flex gap={6}>
        <Flex
          mb={6}
          bgColor="primary.500"
          rounded={4}
          boxShadow="base"
          py={4}
          px={6}
          flex={1}
          color="white"
          align="center"
          justifyContent="space-between"
          gap={6}
        >
          <Flex align="center" justifyContent="space-between" gap={4}>
            <Icon as={EthernetIcon} fontSize="45px" />
            <Text fontWeight={600} fontSize="xl">
              Ethernet Services
            </Text>
          </Flex>
          <Button
            bgColor="secondary.500"
            color="black"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
          >
            Check Availability
          </Button>
        </Flex>
        <Flex
          mb={6}
          bgColor="primary.500"
          rounded={4}
          boxShadow="base"
          py={4}
          px={6}
          flex={1}
          color="white"
          align="center"
          justifyContent="space-between"
          gap={6}
        >
          <Flex align="center" justifyContent="space-between" gap={4}>
            <Icon as={FTTPIcon} fontSize="60px" />
            <Text fontWeight={600} fontSize="xl">
              FTTP Services
            </Text>
          </Flex>
          <Button
            bgColor="secondary.500"
            color="black"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
          >
            Check Availability
          </Button>
        </Flex>
      </Flex>
      <Box
        flex={1}
        mb={6}
        bgColor="white"
        rounded={4}
        boxShadow="base"
        py={6}
        px={8}
      >
        <Flex justify="space-between" mb={4} align="center">
          <Heading fontSize="lg" fontWeight={600}>
            Incident Summary
          </Heading>
          <Select variant="outline" maxW="150px">
            <option value="">All</option>
            <option value="1">24 Hours</option>
            <option value="2">Week</option>
            <option value="3">Month</option>
            <option value="4">Quarter</option>
            <option value="5">Year</option>
          </Select>
        </Flex>
        <Flex justify="space-between" px={14} py={8}>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              Total
            </Text>
            <Flex
              bgColor="primary.500"
              h="108px"
              w="108px"
              rounded="full"
              align="center"
              justify="center"
            >
              <Text fontWeight={800} fontSize="2xl" color="white">
                400
              </Text>
            </Flex>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="primary.500"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              New
            </Text>
            <CircularProgress value={20} color="primary.500" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                30
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="primary.500"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              In Progress
            </Text>
            <CircularProgress value={30} color="primary.500" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                52
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="primary.500"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              Submitted
            </Text>
            <CircularProgress value={65} color="primary.500" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                200
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="primary.500"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              Closed
            </Text>
            <CircularProgress value={80} color="primary.500" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                300
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="primary.500"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              Resolved
            </Text>
            <CircularProgress value={100} color="green.500" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                400
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="green.500"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
          <Flex flexDir="column" align="center" gap={2}>
            <Text
              textTransform="uppercase"
              fontWeight={800}
              fontSize="xs"
              letterSpacing="widest"
            >
              Cancelled
            </Text>
            <CircularProgress value={40} color="red.600" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                50
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="red.600"
              fontSize="sm"
            >
              <TriangleUpIcon />
              <Text>20%</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="flex-end">
          <Button
            variant="link"
            colorScheme="gray"
            color="primary.500"
            mt={3}
            mr={4}
            rightIcon={<ArrowForwardIcon />}
          >
            View all issues
          </Button>
        </Flex>
      </Box>
      <Flex gap={6} mb={6}>
        <Flex
          flexDir="column"
          boxShadow="base"
          rounded={4}
          bgColor="white"
          p={8}
          flex={1}
          gap={6}
          maxWidth="420px"
        >
          <Flex gap={3} align="center">
            <Flex
              bgColor="gray.100"
              rounded={4}
              w={10}
              h={10}
              align="center"
              justify="center"
            >
              <Icon as={BiBookReader} fontSize="xl" />
            </Flex>
            <Heading fontSize="lg" fontWeight={600}>
              ISP Hub Overview
            </Heading>
          </Flex>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #1</Text>
              <Text fontWeight={800}>100%</Text>
            </Flex>
            <Progress colorScheme="green" rounded="full" value={100} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #2</Text>
              <Text fontWeight={800}>80%</Text>
            </Flex>
            <Progress colorScheme="primary" rounded="full" value={80} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #3</Text>
              <Text fontWeight={800}>30%</Text>
            </Flex>
            <Progress colorScheme="primary" rounded="full" value={30} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #4</Text>
              <Text fontWeight={800}>40%</Text>
            </Flex>
            <Progress colorScheme="primary" rounded="full" value={40} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #5</Text>
              <Text fontWeight={800}>60%</Text>
            </Flex>
            <Progress colorScheme="primary" rounded="full" value={60} />
          </Box>
        </Flex>
        <Flex
          bgColor="primary.500"
          rounded="base"
          boxShadow="base"
          flex={1}
          overflow="hidden"
          position="relative"
          maxW="420px"
          p={8}
          flexDir="column"
          justify="flex-end"
        >
          <Box
            bgColor="secondary.500"
            w="350px"
            h="350px"
            rounded="full"
            position="absolute"
            left="-13%"
            bottom="-25%"
          ></Box>
          <Flex
            bgColor="secondary.500"
            w="250px"
            h="250px"
            rounded="full"
            position="absolute"
            right="-5%"
            top="-15%"
            align="flex-end"
          >
            <Icon as={ISPHubSVG} fontSize="190px" ml={4} mb={4} />
          </Flex>
          <Flex
            fontSize="4xl"
            color="black"
            zIndex={10}
            fontWeight={800}
            mb={2}
            gap={3}
            align="center"
          >
            <Icon as={BiBookReader} />
            <Text>ISP Hub</Text>
          </Flex>
          <Text zIndex={10} color="black" fontWeight={600} w="250px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            porta turpis est
          </Text>
          <ArrowForwardIcon
            color="white"
            fontSize="3xl"
            zIndex={10}
            position="absolute"
            bottom={8}
            right={8}
          />
        </Flex>
        <Box boxShadow="base" bgColor="white" rounded={4} p={6}>
          <Flex justify="space-between" mb={4} align="center">
            <Heading fontSize="lg" fontWeight={600}>
              Bandwidth Usage
            </Heading>
            <Select variant="outline" maxW="150px">
              <option value="">All</option>
              <option value="1">24 Hours</option>
              <option value="2">Week</option>
              <option value="3">Month</option>
              <option value="4">Quarter</option>
              <option value="5">Year</option>
            </Select>
          </Flex>
          <BandwidthUsage />
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
              <Box bgColor="primary.500" px={8} pt={8} rounded={4} width="100%">
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

export default DashboardDesktopPage
