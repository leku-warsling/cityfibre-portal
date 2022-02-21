import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container, HStack } from "@chakra-ui/react"
import { Switch } from ".."

export default {
  title: "Components / Forms / Switch",
  component: Switch,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [
        "sm",
        "md",
        "lg",
      ],
      table: {
        defaultValue: 'md',
      }
    },
    colorScheme: { 
      control: { type: "select"},
      options: [
        "brand",
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
        "telegram"
      ],
      table: {
        defaultValue: 'brand',
      }
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

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  isChecked: false,
  isDisabled: false,
  isReadOnly: false,
  isInvalid: false,
  colorScheme: "brand",
  size: "md",
}

export const States = () => (
  <HStack spacing={6}>
    <Switch isInvalid size="md" colorScheme="brand" />
    <Switch isChecked size="md" colorScheme="brand" />
    <Switch isDisabled size="md" colorScheme="brand" />
    <Switch isReadOnly size="md" colorScheme="brand" />
  </HStack>
)

export const Sizes = () => (
  <HStack spacing={6}>
    <Switch size="sm" colorScheme="brand" />
    <Switch size="md" colorScheme="brand" />
    <Switch size="lg" colorScheme="brand" />
  </HStack>
)

