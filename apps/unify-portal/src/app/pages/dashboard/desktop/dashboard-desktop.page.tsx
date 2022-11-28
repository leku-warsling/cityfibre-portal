import { Icon } from "@chakra-ui/icons"
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import { Page } from "@ui/lib/layout"
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
import { FiArrowRight } from "react-icons/fi"
import { RiHomeWifiLine } from "react-icons/ri"
import { MdCable } from "react-icons/md"
import { FC, ReactNode } from "react"
import { BiUpArrowAlt } from "react-icons/bi"

type StatTileProps = {
  label: ReactNode
  value: number
  description: ReactNode
  deviation: number
}

const StatTile: FC<StatTileProps> = ({
  label,
  value,
  description,
  deviation,
}) => {
  return (
    <Flex
      flexDir="column"
      boxShadow="base"
      bgColor="white"
      fontWeight={700}
      rounded={4}
      px={8}
      py={6}
      gap={1}
    >
      <Text>{label}</Text>
      <Flex align="center" fontWeight={800} fontSize="28px" color="primary.500">
        <Text>{deviation}%</Text>
        <BiUpArrowAlt />
      </Flex>
      <Text fontSize="6xl" fontWeight={800} lineHeight={1}>
        {value}
      </Text>
      <Text fontSize="sm">{description}</Text>
    </Flex>
  )
}

const DashboardDesktopPage = () => {
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
              rightIcon={<FiArrowRight />}
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
          <StatTile
            label="Total Orders"
            value={120}
            deviation={30}
            description="Since last monthy"
          />
          <StatTile
            label="In Progress"
            value={52}
            deviation={30}
            description="Since last monthy"
          />
          <StatTile
            label="Cancelled Orders"
            value={15}
            deviation={30}
            description="Since last monthy"
          />
          <StatTile
            label="Completed Orders"
            value={60}
            deviation={30}
            description="Since last monthy"
          />
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
              rightIcon={<FiArrowRight />}
              colorScheme="gray"
              variant="ghost"
            >
              View all invoices
            </Button>
          }
        />
      </Flex>
      <Flex mb={6} gap={6}>
        <Flex
          justifyContent="space-between"
          bgColor="primary.500"
          boxShadow="base"
          align="center"
          color="black"
          rounded={4}
          flex={1}
          gap={6}
          py={6}
          px={8}
        >
          <Flex align="center" justifyContent="space-between" gap={4}>
            <Icon as={MdCable} fontSize="35px" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Ethernet Services
            </Text>
          </Flex>
          <Button rightIcon={<FiArrowRight />}>Check Availability</Button>
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
          py={6}
          px={8}
        >
          <Flex align="center" justifyContent="space-between" gap={4}>
            <Icon as={RiHomeWifiLine} fontSize="35px" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              FTTP Services
            </Text>
          </Flex>
          <Button rightIcon={<FiArrowRight />}>Check Availability</Button>
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
}

export default DashboardDesktopPage
