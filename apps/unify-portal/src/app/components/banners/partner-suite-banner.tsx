import { Figure, Heading, Text, Logo, loginBackdrop } from "@ui"

export const PartnerSuiteBanner = () => (
  <Figure
    bgImage={loginBackdrop}
    bgPos="center"
    bgSize="cover"
    h="100vh"
    w="50%"
  >
    <Figure.Header pt={{ lg: 20, md: 8 }} pl={{ lg: 24, md: 8 }}>
      <Logo height="48" />
    </Figure.Header>
    <Figure.Caption pl={{ lg: 24, md: 8 }} pb={14} gap={4} pr={{ md: 8 }}>
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
