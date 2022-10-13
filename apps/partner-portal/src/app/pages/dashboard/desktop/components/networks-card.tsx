import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Badge, List, ListItem, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import { Select } from "@chakra-ui/select"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@partner-portal/components/card"
import { times } from "ramda"

const NetworksCard = () => {
  const actions = [
    <Select
      variant="outline"
      maxW="150px"
      color="black"
      borderColor="black"
      defaultValue="0"
    >
      <option value="0">Status</option>
      <option value="1">Changes</option>
    </Select>,
  ]

  return (
    <Card flex={1} size="lg" maxWidth="800px">
      <CardHeader actions={actions}>Networks</CardHeader>
      <CardBody>
        <List spacing={2} mb={3}>
          {times(
            () => (
              <ListItem
                _hover={{ bgColor: "primary.500", color: "white" }}
                justifyContent="space-between"
                alignItems="center"
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
      </CardBody>
      <CardFooter justify="flex-end">
        <Button
          variant="ghost"
          colorScheme="gray"
          size="sm"
          rightIcon={<ArrowForwardIcon />}
        >
          View all
        </Button>
      </CardFooter>
    </Card>
  )
}

export default NetworksCard
