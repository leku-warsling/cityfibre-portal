import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Container } from "@chakra-ui/react"
import { SearchInput } from "./search-input"

export default {
  title: "Components / Forms / SearchInput",
  component: SearchInput,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput />

export const Primary = Template.bind({})
Primary.args = {}
