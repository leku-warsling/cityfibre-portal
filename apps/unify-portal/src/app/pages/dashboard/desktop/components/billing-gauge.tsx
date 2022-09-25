import { Flex, Text, Box, Heading } from "@chakra-ui/layout"
import { useToken } from "@chakra-ui/system"
import { Select } from "@chakra-ui/select"
import random from "lodash-es/random"
import { Cell, Label, Pie, PieChart } from "recharts"

const BillingGauge = () => {
  const data = [{ value: 527.65 }, { value: 602.35 }]
  const secondaryColor = useToken("colors", "secondary.500")

  return (
    <Box
      maxWidth="570px"
      boxShadow="base"
      bgColor="primary.500"
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
          <Cell fill={secondaryColor} />
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

export default BillingGauge
