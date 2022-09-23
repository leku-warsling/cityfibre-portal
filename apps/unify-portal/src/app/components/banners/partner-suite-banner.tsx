import { Figure, Logo, CirclesBackdrop } from "@ui/lib"
import { Heading, Text } from "@chakra-ui/layout"

export const PartnerSuiteBanner = () => (
  <Figure
    bgColor="secondary.500"
    bgImage={CirclesBackdrop}
    bgPos="center"
    bgSize="cover"
    h="100vh"
    w="50%"
  >
    <Figure.Header pt={{ lg: 10, md: 8 }} pl={{ lg: 10, md: 8 }}>
      <Logo
        height="48"
        fill="#fff"
        style={{
          filter: "drop-shadow(0px 2px 2px rgb(0 0 0 / 0.15)",
        }}
      />
    </Figure.Header>
    <Figure.Caption pl={{ lg: 10, md: 8 }} pb={12} gap={4} pr={{ md: 8 }}>
      <Heading fontSize={{ lg: "3xl", md: "xl" }}>
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
