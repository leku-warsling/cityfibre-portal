import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Container, HStack } from "@chakra-ui/react"
import { Switch } from ".."

export default {
  title: "Components / Forms / Switch",
  component: Switch,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: "md",
      },
    },
    colorScheme: {
      control: { type: "select" },
      options: [
        "primary",
        "green",
        "blue",
        "red",
        "gray",
        "orange",
        "teal",
        "teal",
        "whiteAlpha",
        "blackAlpha",
        "yellow",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      table: {
        defaultValue: "brand",
      },
    },
  },
  decorators: [
    (story: Function) => (
      <Container maxWidth="lg" mx="auto" mt={6} p={6}>
        {story()}
      </Container>
    ),
  ],
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isChecked: false,
  isDisabled: false,
  isReadOnly: false,
  isInvalid: false,
  colorScheme: "primary",
  size: "md",
}

export const States = () => (
  <HStack spacing={6}>
    <Switch isInvalid size="md" colorScheme="primary" />
    <Switch isChecked size="md" colorScheme="primary" />
    <Switch isDisabled size="md" colorScheme="primary" />
    <Switch isReadOnly size="md" colorScheme="primary" />
  </HStack>
)

export const Sizes = () => (
  <HStack spacing={6}>
    <Switch size="sm" colorScheme="primary" />
    <Switch size="md" colorScheme="primary" />
    <Switch size="lg" colorScheme="primary" />
  </HStack>
)
