import { useEffect, useState } from "react"
import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
import { INCIDENT_COLUMNS, INCIDENT_DATA } from "./data"
import { Page, Statistic, Table } from "@ui"

const DashboardPage = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const actions = [
    <Button
      to="/incidents/create"
      alignItems="center"
      variant="link"
      as={Link}
      mr={6}
    >
      <span>View all issues</span>
    </Button>,
    <Button
      leftIcon={<AddIcon fontSize="12px" />}
      to="/incidents/create"
      alignItems="center"
      as={Link}
    >
      <span>Raise an incident</span>
    </Button>,
  ]

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={[6, 6, 8]} actions={actions}>
        Latest Issues
      </Page.Header>
      <Flex gap={6}>
        <Table
          columns={INCIDENT_COLUMNS}
          isLoading={isLoading}
          data={INCIDENT_DATA}
          boxShadow="base"
          overflowY="auto"
          bgColor="white"
          rounded={5}
          maxH="80vh"
        />
        <VStack flexGrow={1}>
          <HStack
            bgColor="white"
            boxShadow="base"
            width="100%"
            rounded={4}
            py={6}
            px={8}
          >
            <Text fontSize="2xl" fontWeight={800} mr={8}>
              169
            </Text>
            <Text fontWeight={600} color="gray.500">
              Total Incidents
            </Text>
          </HStack>
        </VStack>
      </Flex>
    </Page>
  )
}

export default DashboardPage
