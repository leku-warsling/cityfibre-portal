import { Button } from "@chakra-ui/button"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Image } from "@chakra-ui/image"
import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/layout"
import { Page } from "@ui/lib"
import { Link } from "react-router-dom"
import FTTPServicesImg from "../../../assets/images/fttp-services.jpg"
import { Card, CardBody } from "../../components/card"
import { usePage } from "../../hooks/use-page.hook"

type ProductCardProps = {
  buttonText?: string
  features?: string[]
  name: string
  link: string
}

const ProductCard = ({
  name,
  features = [],
  link,
  buttonText = "Check Availability",
}: ProductCardProps) => (
  <Card maxWidth="320px">
    <Image
      src={FTTPServicesImg}
      objectFit="cover"
      height="160px"
      width="100%"
    />
    <CardBody align="flex-start" gap={4}>
      <Text fontSize="lg" fontWeight={600}>
        {name}
      </Text>
      <UnorderedList fontSize="sm" listStylePos="inside">
        {features.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </UnorderedList>
      <Button rightIcon={<ArrowForwardIcon />} as={Link} to={link} w="full">
        {buttonText}
      </Button>
    </CardBody>
  </Card>
)

const PRODUCTS = [
  {
    name: "FTTP Services",
    features: [
      "1000Mb/s symmetric bandwidth",
      "Unlimited",
      "Able to support multiple line profiles",
    ],
    link: "/orders/fttp",
  },
  {
    name: "Ethernet Services",
    features: [
      "100Mbps, 1Gbps bandwidth options",
      "5-hour repair SLA as standard",
      "Competitive pricing",
    ],
    link: "/orders/ethernet",
  },
]

const ProductsPage = () => {
  usePage({ title: "Orders" })

  return (
    <Page maxH="93vh" overflowY="auto">
      <Page.Header mb={6} pb={2}>
        Products
      </Page.Header>
      <Flex flexDir={{ base: "column", md: "row" }} gap={6} align="center">
        {PRODUCTS.map((item) => (
          <ProductCard {...item} />
        ))}
      </Flex>
    </Page>
  )
}

export default ProductsPage
