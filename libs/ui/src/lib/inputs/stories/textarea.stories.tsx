import { Container, Stack, TextareaProps } from "@chakra-ui/react"
import { Story, Meta } from '@storybook/react';
import { Textarea } from ".."

export default {
  title: "Components / Forms / Textarea",
  decorators: [
    (story: Function) => (
      <Container maxW="500px" mt="40px">
        {story()}
      </Container>
    ),
  ],
} as Meta<TextareaProps>;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />

export const Primary = Template.bind({})
Primary.args = {
  defaultValue: "This is a textarea",
  size: "md",
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
  isReadOnly: false,
  resize: "vertical",
}

export const Rows = () => (
  <Textarea defaultValue="This is a textarea" rows={12} />
)

export const States = () => (
  <Stack spacing={6}>
    <Textarea placeholder="Idle textarea" />
    <Textarea isDisabled placeholder="Disabled textarea" />
    <Textarea isReadOnly placeholder="Readonly textarea" />
    <Textarea isInvalid errorBorderColor="red:500" placeholder="Invalid textarea" />
  </Stack>
)

export const Sizes = () => (
  <Stack spacing={6}>
    <Textarea
      size="xs"
      placeholder="A sample placeholder"
      defaultValue="This is a x-small textarea"
    />
    <Textarea
      size="sm"
      placeholder="A sample placeholder"
      defaultValue="This is a small textarea"
    />
    <Textarea
      placeholder="A sample placeholder"
      defaultValue="This is a default textarea"
    />
    <Textarea
      size="lg"
      placeholder="A sample placeholder"
      defaultValue="This is a large textarea"
    />
  </Stack>
)

export const Resize = () => (
  <Textarea placeholder="Here is a sample placeholder" resize="horizontal" />
)