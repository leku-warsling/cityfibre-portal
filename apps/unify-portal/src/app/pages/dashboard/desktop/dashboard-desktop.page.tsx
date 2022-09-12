import { ReactComponent as EthernetIcon } from "../../../../assets/svg/ethernet-icon.svg"
import { ReactComponent as FTTPIcon } from "../../../../assets/svg/fttp-icon.svg"
import { ReactComponent as TeamSVG } from "../../../../assets/svg/team.svg"
import { ReactComponent as ISPHubSVG } from "../../../../assets/svg/isp-hub.svg"
import { AddIcon, ArrowForwardIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { ReactNode, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Page, Table } from "@ui"
import {
  INCIDENT_COLUMNS,
  INCIDENT_DATA,
  INVOICE_COLUMNS,
  INVOICE_DATA,
} from "../data"
import {
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ListItem,
  Button,
  VStack,
  Modal,
  Flex,
  Icon,
  Text,
  Box,
  List,
  Heading,
  Badge,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Progress,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react"
import {
  LabelList,
  AreaChart,
  BarChart,
  PieChart,
  Legend,
  XAxis,
  Label,
  YAxis,
  Bar,
  Pie,
  Cell,
  Area,
} from "recharts"
import { GroupStats } from "../../../components/statistic/group-stats"
import { prop, sum, times } from "ramda"
import { random } from "lodash-es"
import { BiBookReader } from "react-icons/bi"

const data = times((n) => {
  const h = n * 3
  return {
    time: `${h < 10 ? "0" : ""}${h.toFixed(2)} ${h > 12 ? "PM" : "AM"}`,
    outages: random(5, 60),
  }
}, 8)

const BandwidthUsage = () => {
  const data = times(
    (n) => ({
      name: n + 1,
      usage: random(3000, 5000),
    }),
    31
  )

  return (
    <AreaChart
      width={700}
      height={330}
      data={data}
      margin={{
        top: 16,
        right: 16,
        left: 0,
        bottom: 16,
      }}
    >
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        fontWeight={600}
        tickCount={12}
        interval={2}
      />
      <YAxis axisLine={false} tickLine={false} fontWeight={600} />
      <Area
        type="monotone"
        fillOpacity={1}
        dataKey="usage"
        stroke="#00397b"
        fill="#00397b"
      />
    </AreaChart>
  )
}

const NetworkOutages = () => {
  return (
    <Box
      maxWidth="570px"
      minH="400px"
      flex={1}
      height="100%"
      rounded={4}
      boxShadow="base"
      bgColor="white"
      px={8}
      py={6}
    >
      <Flex justify="space-between" mb={4} align="center">
        <Heading fontSize="lg" fontWeight={600}>
          Network Outages
        </Heading>
        <Select variant="outline" maxW="150px" defaultValue="1">
          <option value="">All</option>
          <option value="1">24 Hours</option>
          <option value="2">Week</option>
          <option value="3">Month</option>
          <option value="4">Quarter</option>
          <option value="5">Year</option>
        </Select>
      </Flex>
      <BarChart
        width={500}
        height={300}
        data={data}
        barCategoryGap={2}
        margin={{
          top: 32,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="time"
          // tickFormatter={tickFormatter}
          interval="preserveStartEnd"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          stroke="#4a5568"
          color="#4a5568"
          fontWeight={600}
          dy={5}
        />
        <Bar dataKey="outages" fill="#00397b">
          <LabelList
            dy={-8}
            position="top"
            fill="#00397b"
            fontSize={14}
            fontWeight={800}
          />
        </Bar>
      </BarChart>
    </Box>
  )
}

const StatCallToAction = (props: { value: ReactNode; label: ReactNode }) => {
  return (
    <Flex
      bgColor="brand.800"
      boxShadow="base"
      color="#fff"
      p={4}
      rounded={4}
      gap={4}
      align="center"
    >
      <Flex
        fontWeight={800}
        bgColor="#9D8DFF"
        w={10}
        h={10}
        align="center"
        justify="center"
        rounded={4}
        fontSize="lg"
      >
        {props.value}
      </Flex>
      <Text flex={1} fontWeight={600}>
        {props.label}
      </Text>
      <Icon as={ArrowForwardIcon} fontSize="lg" mr={2} />
    </Flex>
  )
}

const DonutChart = () => {
  const data = [
    { name: "New", value: random(50, 100), fill: "#00397b" },
    { name: "In Progress", value: random(50, 100), fill: "#9D8DFF" },
    { name: "Submitted", value: random(50, 100), fill: "#015DCB" },
    { name: "Closed", value: random(50, 100), fill: "#0094C8" },
    { name: "Resolved", value: random(50, 100), fill: " #6F5DFF" },
    { name: "Cancelled", value: random(50, 100), fill: "#00BADE" },
  ]
  const total = sum(data.map(prop("value")))

  return (
    <Box
      maxWidth="570px"
      boxShadow="base"
      bgColor="white"
      height="100%"
      minH="400px"
      flex={1}
      rounded={4}
      px={8}
      py={6}
    >
      <Flex justify="space-between" mb={4} align="center">
        <Heading fontSize="lg" fontWeight={600}>
          Incidents Breakdown
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
      <PieChart width={800} height={300}>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          // formatter={renderColorfulLegendText}
        />
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={85}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          <Label width={30} position="center" fontWeight={600}>
            {`${total} Incidents`}
          </Label>
        </Pie>
      </PieChart>
    </Box>
  )
}

const BillingGauge = () => {
  const data = [{ value: 527.65 }, { value: 602.35 }]
  return (
    <Box
      maxWidth="570px"
      boxShadow="base"
      bgColor="brand.800"
      minH="400px"
      rounded={4}
      px={8}
      py={6}
    >
      <Flex justify="space-between" mb={4} align="center">
        <Heading fontSize="lg" fontWeight={800} color="white">
          Revenue
        </Heading>
        <Select variant="outline" maxW="150px" color="white">
          <option value="">All</option>
          <option value="1">24 Hours</option>
          <option value="2">Week</option>
          <option value="3">Month</option>
          <option value="4">Quarter</option>
          <option value="5">Year</option>
        </Select>
      </Flex>
      <PieChart height={240} width={320}>
        <Pie
          startAngle={180}
          endAngle={0}
          innerRadius="55%"
          data={data}
          dataKey="value"
          labelLine={false}
          blendStroke
          isAnimationActive={false}
          cy="65%"
        >
          <Cell fill="#9D8DFF" />
          <Cell fill="#fff" />
          <Label
            dy={-10}
            width={30}
            position="center"
            fontWeight={600}
            fill="#fff"
            fontSize="24px"
          >
            43%
          </Label>
        </Pie>
      </PieChart>
      <Flex justify="space-between">
        <Flex flexDir="column" color="white" fontWeight={600}>
          <Text
            textTransform="uppercase"
            letterSpacing="wider"
            fontSize="sm"
            lineHeight={1}
          >
            Total Income
          </Text>
          <Text fontSize="2xl">
            {random(100000, 999999).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </Text>
        </Flex>
        <Flex flexDir="column" color="white" fontWeight={600}>
          <Text
            textTransform="uppercase"
            letterSpacing="wider"
            fontSize="sm"
            lineHeight={1}
          >
            Total Due
          </Text>
          <Text fontSize="2xl">
            {random(100000, 999999).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

const TabbedCard = () => {
  return (
    <Box boxShadow="base" bgColor="white" flex={1} rounded={4} px={8} py={6}>
      <Flex justify="space-between" mb={2} align="center">
        <Heading fontSize="lg" fontWeight={600}>
          Support
        </Heading>
        <Select variant="outline" maxW="200px">
          <option value="">Incidents</option>
          <option value="1">Services</option>
          <option value="2">Networks</option>
        </Select>
      </Flex>
      <Tabs variant="unstyled">
        <TabList>
          <Tab
            _selected={{ borderBottom: "2px solid", borderColor: "brand.500" }}
          >
            Recent
          </Tab>
          <Tab>Delayed</Tab>
          <Tab>Resolved</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0} pb={0}>
            <Table columns={INCIDENT_COLUMNS} data={INCIDENT_DATA} size="md" />
            <Flex justify="flex-end" pt={4}>
              <Button
                variant="ghost"
                colorScheme="gray"
                rightIcon={<ArrowForwardIcon />}
              >
                View all issues
              </Button>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

const TableCard = () => {
  return (
    <Box boxShadow="base" bgColor="white" flex={1} rounded={4} pt={6} pb={3}>
      <Flex justify="space-between" px={6} mb={4} align="center">
        <Heading fontSize="lg" fontWeight={600}>
          Incidents
        </Heading>
        <Select variant="outline" maxW="200px">
          <option value="">Latest</option>
          <option value="1">Delayed</option>
          <option value="2">Resolved</option>
        </Select>
      </Flex>
      <Box
        sx={{
          "& thead th": {
            bgColor: "gray.100",
          },
        }}
      >
        <Table columns={INCIDENT_COLUMNS} data={INCIDENT_DATA} size="md" />
      </Box>
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
    </Box>
  )
}

const TableCard2 = () => {
  return (
    <Box boxShadow="base" bgColor="white" flex={1} rounded={4} pt={6} pb={3}>
      <Flex justify="space-between" px={6} mb={4} align="center">
        <Heading fontSize="lg" fontWeight={600}>
          Invoices
        </Heading>
        <Select variant="outline" maxW="200px">
          <option value="">Latest</option>
          <option value="1">Due</option>
          <option value="1">Past Due</option>
          <option value="2">Closed</option>
        </Select>
      </Flex>
      <Box
        sx={{
          "& thead th": {
            bgColor: "gray.100",
          },
        }}
      >
        <Table columns={INVOICE_COLUMNS} data={INVOICE_DATA} size="md" />
      </Box>
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
    </Box>
  )
}

const DashboardDesktopPage = () => {
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
      {/* <Page.Header pb={2} mb={6} actions={actions}>
        Latest Issues
      </Page.Header> */}
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
                  _hover={{ bgColor: "brand.800", color: "white" }}
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
        <TableCard />
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
        bgColor="brand.800"
        rounded={4}
        boxShadow="base"
        py={6}
        px={8}
        color="white"
        align="center"
        justifyContent="space-between"
        gap={6}
      >
        {/* <Flex
          bgColor="#9D8DFF"
          w={12}
          h={12}
          align="center"
          justify="center"
          rounded={4}
        >
          <Icon as={BiDollar} fontSize="2xl" />
        </Flex> */}
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
            color="#9D8DFF"
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
            color="#9D8DFF"
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
            color="#9D8DFF"
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
            color="#9D8DFF"
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
            color="#9D8DFF"
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
            color="#9D8DFF"
            lineHeight={1.3}
          >
            400GB
          </Text>
        </Box>
        <Flex
          bgColor="#9D8DFF"
          w={12}
          h={12}
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
        <TableCard2 />
      </Flex>
      <Flex gap={6}>
        <Flex
          mb={6}
          bgColor="brand.800"
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
          <Button bgColor="#9D8DFF" size="lg" rightIcon={<ArrowForwardIcon />}>
            Check Availability
          </Button>
        </Flex>
        <Flex
          mb={6}
          bgColor="brand.800"
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
          <Button bgColor="#9D8DFF" size="lg" rightIcon={<ArrowForwardIcon />}>
            Check Availability
          </Button>
        </Flex>
      </Flex>
      {/* <Flex gap={6} mb={6}>
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
      </Flex> */}
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
              bgColor="brand.800"
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
              color="brand.800"
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
            <CircularProgress value={20} color="brand.800" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                30
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="brand.800"
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
            <CircularProgress value={30} color="brand.800" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                52
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="brand.800"
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
            <CircularProgress value={65} color="brand.800" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                200
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="brand.800"
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
            <CircularProgress value={80} color="brand.800" size={28}>
              <CircularProgressLabel fontSize="2xl" fontWeight={800}>
                300
              </CircularProgressLabel>
            </CircularProgress>
            <Flex
              align="center"
              gap={1.5}
              fontWeight={800}
              color="brand.800"
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
            color="brand.800"
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
            <Progress colorScheme="brand" rounded="full" value={80} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #3</Text>
              <Text fontWeight={800}>30%</Text>
            </Flex>
            <Progress colorScheme="brand" rounded="full" value={30} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #4</Text>
              <Text fontWeight={800}>40%</Text>
            </Flex>
            <Progress colorScheme="brand" rounded="full" value={40} />
          </Box>
          <Box>
            <Flex mb={1.5} justify="space-between">
              <Text fontWeight={600}>Course #5</Text>
              <Text fontWeight={800}>60%</Text>
            </Flex>
            <Progress colorScheme="brand" rounded="full" value={60} />
          </Box>
        </Flex>
        <Flex
          bgColor="brand.800"
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
            bgColor="#9D8DFF"
            w="350px"
            h="350px"
            rounded="full"
            position="absolute"
            left="-13%"
            bottom="-25%"
          ></Box>
          <Flex
            bgColor="#9D8DFF"
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
            color="white"
            zIndex={10}
            fontWeight={800}
            mb={2}
            gap={3}
            align="center"
          >
            <Icon as={BiBookReader} />
            <Text>ISP Hub</Text>
          </Flex>
          <Text zIndex={10} color="white" fontWeight={600} w="250px">
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
        <Box flex={1} boxShadow="base" bgColor="white" rounded={4} p={6}>
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
      {/* <Flex w="100%" gap={6}>
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
      </Flex> */}
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

export default DashboardDesktopPage
