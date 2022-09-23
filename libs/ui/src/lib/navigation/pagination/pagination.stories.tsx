import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Container } from "@chakra-ui/layout"
import { Pagination } from "./pagination"
import { useState } from "react"

export default {
  title: "Components / Navigation / Pagination",
  component: Pagination,
  argTypes: {},
  decorators: [(story: any) => <Container mt="40px">{story()}</Container>],
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = ({ page, ...args }) => {
  const [activeIndex, setActiveIndex] = useState<number>(page)
  return <Pagination {...args} page={activeIndex} onChange={setActiveIndex} />
}

export const Primary = Template.bind({})

Primary.args = {
  colorScheme: "blue",
  variant: "ghost",
  total: 100,
  current: 1,
  spacing: 1,
  size: "md",
}
