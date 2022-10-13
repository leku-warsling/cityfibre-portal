import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Page } from "@ui/lib/layout"
import OrderSummary from "./desktop/components/order-summary"
import OrderDonutChart from "./desktop/components/order-donut-chart"
import OrderOverviewCard from "./desktop/components/ordering-overview-card"
import { EthernetIcon, FTTPIcon } from "../../../assets"
import ISPHubOverview from "./desktop/components/isp-hub-overview"
import ISPHubCallToAction from "./desktop/components/isp-hub-cta"
import OrdersByProduct from "./desktop/components/orders-by-product"
import OrdersTableCard from "./desktop/components/orders-table-card"

const OrdersDashboardPage = () => {
  return (
    <Page maxH="93vh" overflowY="auto">
      <Flex gap={6} mb={6}>
        <OrderOverviewCard />
        <OrderDonutChart />
        <OrdersByProduct />
      </Flex>
      <Flex width="100%" minH="400px" mb={6} gap={6}>
        <OrdersTableCard />
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
      <OrderSummary />
      <Flex gap={6} mb={6} minH="420px">
        <ISPHubOverview />
        <ISPHubCallToAction />
      </Flex>
    </Page>
  )
}

export default OrdersDashboardPage
