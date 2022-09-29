import { Box, Flex, Text } from "@chakra-ui/layout"
import { Progress } from "@chakra-ui/progress"
import { Card, CardBody, CardHeader } from "@unify/components"

const ISPHubOverview = () => {
  return (
    <Card flex={1} maxWidth="420px" size="lg">
      <CardHeader>ISP Hub Overview</CardHeader>
      <CardBody gap={4}>
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
          <Progress colorScheme="primary" rounded="full" value={80} />
        </Box>
        <Box>
          <Flex mb={1.5} justify="space-between">
            <Text fontWeight={600}>Course #3</Text>
            <Text fontWeight={800}>30%</Text>
          </Flex>
          <Progress colorScheme="primary" rounded="full" value={30} />
        </Box>
        <Box>
          <Flex mb={1.5} justify="space-between">
            <Text fontWeight={600}>Course #4</Text>
            <Text fontWeight={800}>40%</Text>
          </Flex>
          <Progress colorScheme="primary" rounded="full" value={40} />
        </Box>
        <Box>
          <Flex mb={1.5} justify="space-between">
            <Text fontWeight={600}>Course #5</Text>
            <Text fontWeight={800}>60%</Text>
          </Flex>
          <Progress colorScheme="primary" rounded="full" value={60} />
        </Box>
      </CardBody>
    </Card>
  )
}

export default ISPHubOverview
