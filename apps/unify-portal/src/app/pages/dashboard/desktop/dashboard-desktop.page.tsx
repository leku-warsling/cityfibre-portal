import { ArrowForwardIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import { Page } from "@ui/lib/layout"
import { EthernetIcon, FTTPIcon } from "../../../../assets"
import {
  INCIDENT_COLUMNS,
  INCIDENT_DATA,
  INVOICE_COLUMNS,
  INVOICE_DATA,
  STATS_BAR,
} from "../data"
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
import OverviewCard from "./components/overview-card"
import NetworksCard from "./components/networks-card"
import { useFlags } from "launchdarkly-react-client-sdk"

const DashboardDesktopPage = () => {
  const { showIspHub } = useFlags()
  return (
    <Page maxH="93vh" overflowY="auto">
      <Flex gap={6} mb={6}>
        <OverviewCard />
        <NetworksCard />
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
            <Text
              fontSize="2xl"
              fontWeight={800}
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              Total Orders
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={2}>
              120
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              fontSize="lg"
              color="primary.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text>30%</Text>
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
            <Text
              fontSize="2xl"
              fontWeight={800}
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              In Progress
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={1}>
              52
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              color="primary.600"
              fontSize="lg"
              mb={2}
            >
              <TriangleUpIcon />
              <Text>30%</Text>
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
            <Text
              fontSize="2xl"
              fontWeight={800}
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              Cancelled Orders
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={1}>
              15
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              fontSize="lg"
              color="primary.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text>30%</Text>
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
            <Text
              fontSize="2xl"
              fontWeight={800}
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              Completed Orders
            </Text>
            <Text fontSize="3xl" fontWeight={800} mb={1}>
              60
            </Text>
            <Flex
              align="center"
              gap={1}
              fontWeight={800}
              fontSize="lg"
              color="primary.600"
              mb={2}
            >
              <TriangleUpIcon />
              <Text>30%</Text>
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
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Ethernet Services
            </Text>
          </Flex>
          <Button
            bgColor="secondary.500"
            color="black"
            size="lg"
            fontWeight={800}
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
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              FTTP Services
            </Text>
          </Flex>
          <Button
            rightIcon={<ArrowForwardIcon />}
            bgColor="secondary.500"
            fontWeight={800}
            color="black"
            size="lg"
          >
            Check Availability
          </Button>
        </Flex>
      </Flex>
      <IncidentSummary />
      <Flex gap={6} mb={6}>
        {showIspHub && <ISPHubOverview />}
        {showIspHub && <ISPHubCallToAction />}
        <BandwidthUsage />
      </Flex>
    </Page>
  )
}

export default DashboardDesktopPage
