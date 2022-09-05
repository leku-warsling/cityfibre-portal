import { Container } from "@chakra-ui/react"
import { Story, Meta } from "@storybook/react"
import { Card, CardProps } from "./card"
import { TabbedCard, TabbedCardProps } from "./tabbed-card"

export default {
  title: "Components / Data Display / Cards",
  component: Card,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<CardProps>

// TabbedCard.displayName = 'Statistic';

const Template: Story<TabbedCardProps> = (args) => <TabbedCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  boxShadow: "md",
  bgColor: "blue.500",
  color: "white",
  colorScheme: "white",
  px: 6,
  py: 3,
  rounded: 4,
  tabList: [
    {
      children: "Support",
      content: "Support info",
    },
    {
      children: "Billing",
      content: "Billing info",
    },
    {
      children: "Orders",
      content: "Orders info",
    },
    {
      children: "VOIP",
      content: "VOIP info",
    },
  ],
}
