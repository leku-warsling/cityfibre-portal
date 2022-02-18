import { Container, Stack } from "@chakra-ui/react"
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
  parameters: {
    docs: {
      page: null,
    },
  }
}

export const basic = () => <Textarea defaultValue="This is a textarea" />

export const rows = () => (
  <Textarea defaultValue="This is a textarea" rows={12} />
)

export const states = () => (
  <Stack spacing={6}>
    <Textarea placeholder="Idle textarea" />
    <Textarea isDisabled placeholder="Disabled textarea" />
    <Textarea isReadOnly placeholder="Readonly textarea" />
    <Textarea isInvalid errorBorderColor="red:500" placeholder="Invalid textarea" />
  </Stack>
)

export const sizes = () => (
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

export const resize = () => (
  <Textarea placeholder="Here is a sample placeholder" resize="horizontal" />
)