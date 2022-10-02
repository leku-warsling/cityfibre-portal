import { Flex, Text } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import random from "lodash-es/random"
import { Label } from "recharts"
import { currency } from "@ui/lib/util"
import GaugeChart from "@unify/components/charts/gauge.chart"
import { Card, CardBody, CardFooter, CardHeader } from "@unify/components/card"

const BillingGauge = () => {
  const data = [{ value: 527.65 }, { value: 602.35 }]
  const totalIncome = random(100000, 999999)
  const totalDue = random(100000, 999999)

  const actions = [
    <Select variant="outline" maxW="150px" color="black" borderColor="black">
      <option value="">All</option>
      <option value="1">24 Hours</option>
      <option value="2">Week</option>
      <option value="3">Month</option>
      <option value="4">Quarter</option>
      <option value="5">Year</option>
    </Select>,
  ]

  return (
    <Card
      bgColor="primary.500"
      maxWidth="400px"
      flex={1}
      size="lg"
      color="black"
    >
      <CardHeader actions={actions}>Revenue</CardHeader>
      <CardBody>
        <GaugeChart
          valueColor="secondary.500"
          trackColor="white"
          dataKey="value"
          data={data}
        >
          <Label
            dy={-10}
            width={30}
            position="center"
            fontWeight={600}
            fill="#000"
            fontSize="24px"
          >
            43%
          </Label>
        </GaugeChart>
      </CardBody>
      <CardFooter justify="space-between">
        <Flex flexDir="column" fontWeight={600}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
            lineHeight={1}
          >
            Total Income
          </Text>
          <Text fontSize="2xl">{currency.toPounds(totalIncome)}</Text>
        </Flex>
        <Flex flexDir="column" fontWeight={600}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontSize="lg"
            fontWeight={800}
            lineHeight={1}
          >
            Total Due
          </Text>
          <Text fontSize="2xl">{currency.toPounds(totalDue)}</Text>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default BillingGauge
