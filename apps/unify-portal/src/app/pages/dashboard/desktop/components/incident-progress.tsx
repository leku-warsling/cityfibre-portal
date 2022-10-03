import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react"
import { Select } from "@chakra-ui/select"
import { Card, CardBody, CardFooter, CardHeader } from "@unify/components/card"

const IncidentProgress = () => {
  const actions = [
    <Select variant="outline" maxW="150px">
      <option value="">All</option>
      <option value="1">24 Hours</option>
      <option value="2">Week</option>
      <option value="3">Month</option>
      <option value="4">Quarter</option>
      <option value="5">Year</option>
    </Select>,
  ]

  return (
    <Card maxWidth="480px" size="lg" flex={1}>
      <CardHeader actions={actions}>Incident Progress</CardHeader>
      <CardBody justify="center" align="center">
        <CircularProgress value={59} size="170px" thickness="8px">
          <CircularProgressLabel
            fontSize="2xl"
            lineHeight={1}
            fontWeight={800}
            textTransform="uppercase"
          >
            52 <br /> Open
          </CircularProgressLabel>
        </CircularProgress>
      </CardBody>
      <CardFooter justify="space-between">
        <Flex flexDir="column" fontWeight={700}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
            lineHeight={1}
          >
            Average Downtime
          </Text>
          <Text fontSize="2xl">1.5%</Text>
        </Flex>
        <Flex flexDir="column" fontWeight={700}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontSize="lg"
            fontWeight={800}
            lineHeight={1}
          >
            Average Uptime
          </Text>
          <Text fontSize="2xl">98.5%</Text>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default IncidentProgress
