import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import { Card, CardBody, CardFooter, CardHeader } from "@unify/components"
import { FiArrowUp } from "react-icons/fi"
import { FC } from "react"

type StatProgressProps = {
  percentage: number
  deviation: number
  label: string
  value: number
}

const StatProgress: FC<StatProgressProps> = ({
  label,
  value,
  percentage,
  deviation,
}) => (
  <Flex flexDir="column" align="center" gap={2}>
    <Text
      textTransform="uppercase"
      letterSpacing="wide"
      fontWeight={800}
      fontSize="2xl"
    >
      {label}
    </Text>
    <CircularProgress value={percentage} color="primary.500" size={28}>
      <CircularProgressLabel fontSize="28px" fontWeight={800}>
        {value}
      </CircularProgressLabel>
    </CircularProgress>
    <Flex fontSize="2xl" align="center" gap={1.5} fontWeight={800}>
      <FiArrowUp />
      <Text>{deviation}%</Text>
    </Flex>
  </Flex>
)

const IncidentSummary = () => {
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
    <Card maxWidth="1600px" flex={1} size="lg" mb={6} gap={10}>
      <CardHeader actions={actions}>Incident Summary</CardHeader>
      <CardBody flexDir="row" justify="space-between" px={14}>
        <StatProgress
          label="Total"
          value={400}
          percentage={100}
          deviation={22}
        />
        <StatProgress label="New" value={30} percentage={30} deviation={20} />
        <StatProgress
          label="In Progress"
          value={52}
          percentage={40}
          deviation={20}
        />
        <StatProgress
          label="Submitted"
          value={200}
          percentage={50}
          deviation={20}
        />
        <StatProgress
          label="Closed"
          value={300}
          percentage={50}
          deviation={20}
        />
        <StatProgress
          label="Resolved"
          value={400}
          percentage={100}
          deviation={30}
        />
        <StatProgress
          label="Cancelled"
          value={50}
          percentage={10}
          deviation={10}
        />
      </CardBody>
      <CardFooter justify="flex-end">
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="gray"
          variant="ghost"
        >
          View all issues
        </Button>
      </CardFooter>
    </Card>
  )
}

export default IncidentSummary
