import { ArrowForwardIcon, Icon, TriangleUpIcon } from "@chakra-ui/icons"
import {
  Button,
  Flex,
  IconButton,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { Page } from "@ui/lib/layout"
import ISPHubOverview from "./desktop/components/isp-hub-overview"
import ISPHubCallToAction from "./desktop/components/isp-hub-cta"
import TableCard from "./desktop/components/table-card"
import { INVOICE_COLUMNS, INVOICE_DATA } from "./data"
import { BiCreditCard, BiDollarCircle } from "react-icons/bi"
import { BillingGauge } from "./desktop/components"
import BandwidthUsage from "./desktop/components/bandwidth-usage"
import BillingDonutChart from "./desktop/components/billing-donut-chart"
import BillingSummary from "./desktop/components/billing-summary"

const BillingDashboardPage = () => {
  return (
    <Page maxH="93vh" overflowY="auto">
      <Flex gap={6} mb={6}>
        <BillingDonutChart />
        <BillingGauge />
        <BandwidthUsage />
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
            <Text
              fontSize="2xl"
              fontWeight={800}
              textTransform="uppercase"
              letterSpacing="wide"
              mb={2}
            >
              Total Invoices
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
              Total Payments
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
              Total Credit Notes
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
              Total Statements
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
            <Icon as={BiCreditCard} fontSize="4xl" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              View All Invoices
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
            <Icon as={BiDollarCircle} fontSize="4xl" />
            <Text
              fontWeight={800}
              fontSize="2xl"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              View All Payments
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
      <BillingSummary />
      <Flex gap={6} mb={6} minH="420px">
        <ISPHubOverview />
        <ISPHubCallToAction />
      </Flex>
    </Page>
  )
}

export default BillingDashboardPage
