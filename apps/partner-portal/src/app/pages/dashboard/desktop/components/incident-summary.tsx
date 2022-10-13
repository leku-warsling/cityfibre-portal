import { ArrowForwardIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress"
import { Select } from "@chakra-ui/select"
import { Button } from "@chakra-ui/button"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@partner-portal/components"

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
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            Total
          </Text>
          <Flex
            bgColor="primary.500"
            h="108px"
            w="108px"
            rounded="full"
            align="center"
            justify="center"
          >
            <Text fontWeight={800} fontSize="2xl" color="black">
              400
            </Text>
          </Flex>
          <Flex align="center" gap={1.5} fontWeight={800} color="primary.500">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            New
          </Text>
          <CircularProgress value={20} color="primary.500" size={28}>
            <CircularProgressLabel fontSize="2xl" fontWeight={800}>
              30
            </CircularProgressLabel>
          </CircularProgress>
          <Flex align="center" gap={1.5} fontWeight={800} color="primary.500">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            In Progress
          </Text>
          <CircularProgress value={30} color="primary.500" size={28}>
            <CircularProgressLabel fontSize="2xl" fontWeight={800}>
              52
            </CircularProgressLabel>
          </CircularProgress>
          <Flex align="center" gap={1.5} fontWeight={800} color="primary.500">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            Submitted
          </Text>
          <CircularProgress value={65} color="primary.500" size={28}>
            <CircularProgressLabel fontSize="2xl" fontWeight={800}>
              200
            </CircularProgressLabel>
          </CircularProgress>
          <Flex align="center" gap={1.5} fontWeight={800} color="primary.500">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            Closed
          </Text>
          <CircularProgress value={80} color="primary.500" size={28}>
            <CircularProgressLabel fontSize="2xl" fontWeight={800}>
              300
            </CircularProgressLabel>
          </CircularProgress>
          <Flex align="center" gap={1.5} fontWeight={800} color="primary.500">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            Resolved
          </Text>
          <CircularProgress value={100} color="green.500" size={28}>
            <CircularProgressLabel fontSize="2xl" fontWeight={800}>
              400
            </CircularProgressLabel>
          </CircularProgress>
          <Flex align="center" gap={1.5} fontWeight={800} color="green.500">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
        <Flex flexDir="column" align="center" gap={2}>
          <Text
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight={800}
            fontSize="lg"
          >
            Cancelled
          </Text>
          <CircularProgress value={40} color="red.600" size={28}>
            <CircularProgressLabel fontSize="2xl" fontWeight={800}>
              50
            </CircularProgressLabel>
          </CircularProgress>
          <Flex align="center" gap={1.5} fontWeight={800} color="red.600">
            <TriangleUpIcon />
            <Text>20%</Text>
          </Flex>
        </Flex>
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
