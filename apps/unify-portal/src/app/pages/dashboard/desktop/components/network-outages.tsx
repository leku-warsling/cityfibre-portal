import { Flex, Box, Heading, Select, useToken } from "@chakra-ui/react"
import { LabelList, BarChart, XAxis, Bar } from "recharts"
import random from "lodash-es/random"
import times from "ramda/es/times"

const data = times((n) => {
  const h = n * 3
  return {
    time: `${h < 10 ? "0" : ""}${h.toFixed(2)} ${h > 12 ? "PM" : "AM"}`,
    outages: random(5, 60),
  }
}, 8)

const NetworkOutages = () => {
  const primaryColor = useToken("colors", "primary.500")
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
          interval="preserveStartEnd"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          stroke="#4a5568"
          color="#4a5568"
          fontWeight={600}
          dy={5}
        />
        <Bar dataKey="outages" fill={primaryColor}>
          <LabelList
            fill={primaryColor}
            fontWeight={800}
            position="top"
            fontSize={14}
            dy={-8}
          />
        </Bar>
      </BarChart>
    </Box>
  )
}

export default NetworkOutages
