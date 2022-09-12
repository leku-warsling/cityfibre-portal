import FTTPServicesImg from "../../../assets/images/fttp-services.jpg"
import { usePage } from "../../hooks/use-page.hook"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Card } from "../../components/card"
import { Page } from "@ui"
import {
  Button,
  Flex,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const ProductsPage = () => {
  usePage({ title: "Orders" })

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2}>
        Products
      </Page.Header>
      <Flex flexDir={{ base: "column", md: "row" }} gap={6} align="center">
        <Card rounded={4} boxShadow="base" maxWidth="320px">
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
            <Button
              rightIcon={<ArrowForwardIcon />}
              to="/orders/fttp"
              isFullWidth
              as={Link}
            >
              Check Availability
            </Button>
          </VStack>
        </Card>
        <Card rounded={4} boxShadow="base" maxWidth="320px">
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
              Ethernet Services
            </Text>
            <UnorderedList fontSize="sm" listStylePos="inside">
              <ListItem>100Mbps, 1Gbps bandwidth options</ListItem>
              <ListItem>5-hour repair SLA as standard</ListItem>
              <ListItem>Competitive pricing</ListItem>
            </UnorderedList>
            <Button
              rightIcon={<ArrowForwardIcon />}
              to="/orders/ethernet"
              isFullWidth
              as={Link}
            >
              Check Availability
            </Button>
          </VStack>
        </Card>
      </Flex>
    </Page>
  )
}
