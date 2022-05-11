// @ts-nocheck
import { Container } from "@chakra-ui/react"
import CircularSlider from "@fseehawer/react-circular-slider"
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "Components / Forms / Circular Slider",
  component: CircularSlider,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as ComponentMeta<typeof CircularSlider>

const Template: ComponentStory<typeof CircularSlider> = (args) => (
  <CircularSlider {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: "Amount",
  min: 0,
  max: 100,
  width: 150,
  appendToValue: "%",
  verticalOffset: "0",
  labelFontSize: "14px",
  valueFontSize: "1.5rem",
}
