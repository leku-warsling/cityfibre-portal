import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex, Select } from "@chakra-ui/react"
import { Page } from "@ui/lib/layout"
import StatCallToAction from "./desktop/components/stat-cta"
import SupportOverviewCard from "./desktop/components/support-overview-card"
import TableCard from "./desktop/components/table-card"
import { INCIDENT_COLUMNS, INCIDENT_DATA } from "./data"

const SuportDashboardPage = () => {
  return (
    <Page maxH="93vh" overflowY="auto">
      <Flex mb={6}>
        <SupportOverviewCard />
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
    </Page>
  )
}

export default SuportDashboardPage
