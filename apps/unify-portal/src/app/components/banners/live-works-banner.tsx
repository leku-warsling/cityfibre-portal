import liveWorksBgImg from "../../../assets/images/live-works-bg.jpg"
import { Text, Heading } from "@chakra-ui/react"
import { Figure, Logo } from "@ui/lib"

export const LiveWorksBanner = () => (
  <Figure
    bgImage={liveWorksBgImg}
    bgPos="center"
    bgSize="cover"
    color="white"
    h="100vh"
    w="48%"
  >
    <Figure.Header pt={20} pl={14}>
      <Logo
        style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.22))" }}
        height="48"
      />
    </Figure.Header>
    <Figure.Caption
      bg="primary.500"
      boxShadow="lg"
      rounded={4}
      maxW="500px"
      ml={14}
      mb={14}
      gap={3}
      px={8}
      py={6}
    >
      <Heading fontSize="2xl">
        Please Provide Information
        <br /> On Live Works
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel ex
        risus. Integer tortor dui, pulvinar eu leo vitae, faucibus maximus quam
      </Text>
    </Figure.Caption>
  </Figure>
)
