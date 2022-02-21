import { Container, Stack } from "@chakra-ui/layout"
import { Select } from ".."

export default {
  title: "Components / Forms / Select",
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" mt="40px">
        {story()}
      </Container>
    ),
  ],
}

export const variants = () => (
  <Stack spacing={6}>
    <Select placeholder="Select option">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>

    <Select placeholder="Select option" variant="outline" borderColor="gray.500">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>

    <Select placeholder="Select option" variant="filled">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>

    <Select placeholder="Select option" variant="flushed">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>

    <Select placeholder="Select option" variant="unstyled">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </Select>
  </Stack>
)

export const sizes = () => (
  <Stack spacing={4}>
    {["xs", "sm", "md", "lg"].map((size) => (
      <Select placeholder={`${size} size`} size={size} key={size} />
    ))}
  </Stack>
)

const UpDownIcon = (props: any) => (
  <svg viewBox="0 0 6 15" fill="none" stroke="currentColor" {...props}>
    <path d="M5 5.5L3 3.5L1 5.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M5 9.5L3 11.5L1 9.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const selectIcon = () => (
  <Select icon={<UpDownIcon />} placeholder="Placeholder" size="md" />
)

export const states = () => (
  <Stack>
    <Select
      placeholder="Idle"
    />

    <Select
      isDisabled
      placeholder="Disabled"
    />

    <Select
      isInvalid
      placeholder="Invalid"
    />

    <Select
      isReadOnly
      placeholder="Readonly"
    />
  </Stack>
)