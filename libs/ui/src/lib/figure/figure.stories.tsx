import { Story, Meta } from "@storybook/react"
import { Container, Heading, Text } from "@chakra-ui/react"
import { Figure, FigureProps } from "./figure"
import loginBgImage from "../assets/img/login-bg.jpg"
import { ReactComponent as Logo } from "../assets/svg/logo.svg"

export default {
  title: "Components / Media / Figure",
  component: Figure,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="5xl" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<FigureProps>

const Template: Story<FigureProps> = (args) => {
  return (
    <Figure bgImage={loginBgImage} w="850px" h="1172px">
      <Figure.Header pt={20} pl={28}>
        <Logo height="40" fill="#009F4D" />
      </Figure.Header>
      <Figure.Caption pl={28} pb={24} gap={4}>
        <Heading size="lg" color="brand.800">
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

export const Primary = Template.bind({})
Primary.args = {}
