import { Container } from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import axios from "axios"
import take from "ramda/es/take"
import { Autocomplete } from "./autocomplete"
import { AutocompleteProps } from "./types"

const getOptions = async () => {
  return axios
    .get("https://bestofjs-static-api.vercel.app/projects.json")
    .then(({ data }) =>
      take(100, data.projects).map((item: any) => ({
        label: item.name,
        ...item,
      }))
    )
}

export default {
  title: "Components / Forms / Autocomplete",
  component: Autocomplete,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<AutocompleteProps>

const Template: Story<AutocompleteProps> = (
  args,
  { loaded: { options = [] } }
) => {
  console.log("options", options)
  return <Autocomplete {...args} options={options} />
}

export const Primary = Template.bind({})

Primary.loaders = [
  async () => ({
    options: await getOptions(),
  }),
]

Primary.args = {}
