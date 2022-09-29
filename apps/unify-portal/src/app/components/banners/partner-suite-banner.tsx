import { LogoIcon } from "@ui/lib/assets"
import { Figure } from "@ui/lib/figure"
import { Heading, Text } from "@chakra-ui/layout"
import { useToken } from "@chakra-ui/system"

export const PartnerSuiteBanner = () => {
  const primaryColor = useToken("colors", "primary.500")
  return (
    <Figure
      bgColor="secondary.500"
      // bgImage={CirclesBackdrop}
      bgPos="center"
      bgSize="cover"
      maxW="750px"
      h="100vh"
      w="50%"
    >
      <Figure.Header pt={{ lg: 10, md: 8 }} pl={{ lg: 10, md: 8 }}>
        <LogoIcon height="48" fill={primaryColor} />
      </Figure.Header>
      <Figure.Caption pl={{ lg: 10, md: 8 }} pb={12} gap={4} pr={{ md: 8 }}>
        <Heading fontSize={{ lg: "3xl", md: "xl" }}>
          CityFibre Partner Suite
        </Heading>
        <Text maxW="500px">
          Serve your customers quickly and effectively from everything to
          ordering products and services for businesses to managing and
          resolving service issues
        </Text>
      </Figure.Caption>
    </Figure>
  )
}
