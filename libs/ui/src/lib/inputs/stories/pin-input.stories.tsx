import { Container, HStack, PinInputProps } from "@chakra-ui/react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { FC } from "react"
import { PinInput } from ".."

type ExamplePinInputProps = PinInputProps & {
  length: number
  spacing?: number
}

const ExamplePinInput: FC<ExamplePinInputProps> = ({
  length = 4,
  spacing = 1,
  ...props
}) => (
  <HStack>
    <PinInput {...props} length={length} />
  </HStack>
)

export default {
  title: "Components / Forms / PinInput",
  component: ExamplePinInput,
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </Container>
    ),
  ],
} as ComponentMeta<typeof ExamplePinInput>

const Template: ComponentStory<typeof ExamplePinInput> = (args) => (
  <ExamplePinInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  length: 8,
}

export const Sizes = () => (
  <>
    {["xs", "sm", "md", "lg"].map((size) => (
      <div key={size} style={{ marginBottom: "1rem" }}>
        <PinInput size={size} length={5} />
      </div>
    ))}
  </>
)
