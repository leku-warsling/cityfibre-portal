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
} from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import { Page } from "@ui/lib/layout"
import random from "lodash-es/random"
import times from "ramda/es/times"
import { EthernetIcon, FTTPIcon } from "../../../../assets"
import { GroupStats } from "../../../components/statistic/group-stats"
import {
  INCIDENT_COLUMNS,
  INCIDENT_DATA,
  INVOICE_COLUMNS,
  INVOICE_DATA,
} from "../data"
import { currency } from "@ui/lib/util"
import BandwidthUsage from "./components/bandwidth-usage"
import BillingGauge from "./components/billing-gauge"
import DonutChart from "./components/donut-chart"
import NetworkOutages from "./components/network-outages"
import StatCallToAction from "./components/stat-cta"
import TableCard from "./components/table-card"
import StatsBar from "./components/stats-bar"
import ISPHubCallToAction from "./components/isp-hub-cta"
import ISPHubOverview from "./components/isp-hub-overview"
import IncidentSummary from "./components/incident-summary"

const STATS_BAR = [
  {
    label: "Invoices",
    value: 400,
  },
  {
    label: "Credit Note",
    value: currency.toPounds(random(100000, 999999)),
  },
  {
    label: "Statements",
    value: 400,
  },
  {
    label: "Orders On Hold",
    value: 40,
  },
  {
    label: "Bandwidth Usage",
    value: "400GB",
  },
]

const DashboardDesktopPage = () => (
  <Page maxH="93vh" overflowY="auto">
    <Flex gap={6} mb={6}>
      <GroupStats />
      <Box
        maxWidth="800px"
        boxShadow="base"
        bgColor="white"
        rounded={4}
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
        flex={1}
        columns={INCIDENT_COLUMNS}
        data={INCIDENT_DATA}
        title="Incidents"
        actions={[
          <Select variant="outline" maxW="200px">
            <option value="">Latest</option>
            <option value="1">Delayed</option>
            <option value="2">Resolved</option>
          </Select>,
        ]}
        footer={
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="gray"
            variant="ghost"
          >
            View all issues
          </Button>
        }
      />
      <Flex flexDir="column" flex={1} maxWidth="420px" justify="space-between">
        <StatCallToAction value="12" label="Invoices Due" />
        <StatCallToAction value="4" label="New Incidents" />
        <StatCallToAction value="7" label="New Payments" />
        <StatCallToAction value="4" label="Services Delayed" />
        <StatCallToAction value="4" label="Services Delayed" />
      </Flex>
    </Flex>
    <StatsBar items={STATS_BAR} bgColor="primary.500" />
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
        flex={1}
        title="Invoices"
        columns={INVOICE_COLUMNS}
        data={INVOICE_DATA}
        actions={[
          <Select variant="outline" maxW="200px">
            <option value="">Latest</option>
            <option value="1">Due</option>
            <option value="1">Past Due</option>
            <option value="2">Closed</option>
          </Select>,
        ]}
        footer={
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="gray"
            variant="ghost"
          >
            View all invoices
          </Button>
        }
      />
    </Flex>
    <Flex gap={6}>
      <Flex
        justifyContent="space-between"
        bgColor="primary.500"
        boxShadow="base"
        align="center"
        color="black"
        rounded={4}
        flex={1}
        gap={6}
        mb={6}
        py={4}
        px={6}
      >
        <Flex align="center" justifyContent="space-between" gap={4}>
          <EthernetIcon fontSize="45px" />
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
        justifyContent="space-between"
        bgColor="primary.500"
        boxShadow="base"
        align="center"
        color="black"
        rounded={4}
        flex={1}
        gap={6}
        mb={6}
        py={4}
        px={6}
      >
        <Flex align="center" justifyContent="space-between" gap={4}>
          <FTTPIcon fontSize="60px" />
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
    <IncidentSummary />
    <Flex gap={6} mb={6}>
      <ISPHubOverview />
      <ISPHubCallToAction />
      <BandwidthUsage />
    </Flex>
  </Page>
)

export default DashboardDesktopPage
