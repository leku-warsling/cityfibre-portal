import { ArrowForwardIcon, Icon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, Select, Text } from "@chakra-ui/react"
import { Page } from "@ui/lib/layout"
import StatCallToAction from "./desktop/components/stat-cta"
import ServiceSummary from "./desktop/components/service-summary"
import DonutChart from "./desktop/components/donut-chart"
import SupportOverviewCard from "./desktop/components/support-overview-card"
import TableCard from "./desktop/components/table-card"
import { INCIDENT_COLUMNS, INCIDENT_DATA } from "./data"
import { BiMessageError, BiStation, BiWrench } from "react-icons/bi"
import ServiceLineProfiles from "./desktop/components/service-line-profiles"
import NetworksCard from "./desktop/components/networks-card"
import NetworkOutages from "./desktop/components/network-outages"
import ISPHubOverview from "./desktop/components/isp-hub-overview"
import ISPHubCallToAction from "./desktop/components/isp-hub-cta"
import IncidentProgress from "./desktop/components/incident-progress"

const SuportDashboardPage = () => {
  return (
    <Page maxH="93vh" overflowY="auto">
      <Flex gap={6} mb={6}>
        <SupportOverviewCard />
        <DonutChart />
        <IncidentProgress />
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
          <StatCallToAction value="52" label="Open Incidents" />
          <StatCallToAction value="4" label="New Incidents" />
          <StatCallToAction value="7" label="Cancelled Incidents" />
          <StatCallToAction value="4" label="Recurring Incidents" />
          <StatCallToAction value="4" label="Services Delayed" />
        </Flex>
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
            <Icon as={BiMessageError} fontSize="4xl" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              Raise An Incident
            </Text>
          </Flex>
          <IconButton
            aria-label="Raise Incident"
            icon={<ArrowForwardIcon />}
            bgColor="secondary.500"
            color="black"
            size="lg"
          />
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
            <Icon as={BiMessageError} fontSize="4xl" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              View All Incidents
            </Text>
          </Flex>
          <IconButton
            aria-label="Raise Incident"
            icon={<ArrowForwardIcon />}
            bgColor="secondary.500"
            color="black"
            size="lg"
          />
        </Flex>
      </Flex>
      <ServiceSummary />
      <Flex width="100%" minH="400px" mb={6} gap={6}>
        <ServiceLineProfiles />
        <TableCard
          flex={1}
          columns={INCIDENT_COLUMNS}
          data={INCIDENT_DATA}
          title="Services"
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
              View all services
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
            <Icon as={BiWrench} fontSize="4xl" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              View Delayed Serices
            </Text>
          </Flex>
          <IconButton
            aria-label="Raise Incident"
            icon={<ArrowForwardIcon />}
            bgColor="secondary.500"
            color="black"
            size="lg"
          />
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
            <Icon as={BiStation} fontSize="4xl" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              View All Networks
            </Text>
          </Flex>
          <IconButton
            aria-label="Raise Incident"
            icon={<ArrowForwardIcon />}
            bgColor="secondary.500"
            color="black"
            size="lg"
          />
        </Flex>
      </Flex>
      <Flex gap={6} mb={6}>
        <NetworksCard />
        <NetworkOutages />
      </Flex>
      <Flex gap={6} mb={6} minH="420px">
        <ISPHubOverview />
        <ISPHubCallToAction />
      </Flex>
    </Page>
  )
}

export default SuportDashboardPage
