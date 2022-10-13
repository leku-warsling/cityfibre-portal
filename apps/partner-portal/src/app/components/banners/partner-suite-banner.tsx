import { LogoIcon, AnimatedCircles } from "@ui/lib/assets"
import { Heading, Text } from "@chakra-ui/layout"
import { Figure } from "@ui/lib/figure"

export const PartnerSuiteBanner = () => (
  <Figure
    bgColor="secondary.500"
    bgPos="center"
    bgSize="cover"
    maxW="750px"
    h="100vh"
    w="50%"
  >
    <AnimatedCircles />
    <Figure.Header pt={{ lg: 10, md: 8 }} pl={{ lg: 10, md: 8 }}>
      <LogoIcon fontSize="48px" fill="#000" />
    </Figure.Header>
    <Figure.Caption pl={{ lg: 10, md: 8 }} pb={12} gap={3} pr={{ md: 8 }}>
      <Heading
        fontSize={{ lg: "3xl", md: "xl" }}
        textTransform="uppercase"
        letterSpacing="wide"
        fontWeight={800}
      >
        CityFibre Partner Suite
      </Heading>
      <Text maxW="500px">
        Serve your customers quickly and effectively from everything to ordering
        products and services for businesses to managing and resolving service
        issues
      </Text>
    </Figure.Caption>
  </Figure>
)
