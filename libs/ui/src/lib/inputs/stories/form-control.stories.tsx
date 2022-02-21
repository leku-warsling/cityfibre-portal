import { ComponentStory, ComponentMeta } from '@storybook/react';
import { 
  Container,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Select, 
} from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type FormItemProps = {
  isRequired: boolean
  isInvalid: boolean
  isDisabled: boolean
  isReadOnly: boolean
  label: string
  helpText?: string
  errorMessage?: string
  showErrorIcon?: boolean
  children: ReactNode
}

const FormItem: FC<FormItemProps> = ({
  label,
  helpText,
  errorMessage,
  showErrorIcon,
  children,
  ...props
}) => (
  <FormControl {...props}>
    <FormLabel>{label}</FormLabel>
    {children}
    <FormHelperText>{helpText}</FormHelperText>
    <FormErrorMessage>
      {showErrorIcon && <FormErrorIcon />}
      {errorMessage}
    </FormErrorMessage>
  </FormControl>
)

export default {
  title: "Components / Forms / FormControl",
  component: FormItem,
  decorators: [
    (story: Function) => (
      <Container mx="auto" mt="40px" maxW="400px">
        {story()}
      </Container>
    ),
  ],
} as ComponentMeta<typeof FormItem>

const Template: ComponentStory<typeof FormItem> = ({ children, ...args }) => (
  <FormItem {...args}>
    {children}
  </FormItem>
)

export const Primary = Template.bind({})
Primary.args = {
  isRequired: false,
  isInvalid: false,
  isDisabled: false,
  isReadOnly: false,
  showErrorIcon: false,
  errorMessage: "Your first name is invalid",
  helpText: "Keep it very short and sweet!",
  label: "First Name",
  children: <Input placeholder="Enter first name" />
}

export const InputExample = () => (
  <FormControl id="first-name" isRequired isInvalid>
    <FormLabel>First name</FormLabel>
    <Input placeholder="First Name" />
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
)

export const TextAreaExample: React.FC = () => (
  <FormControl id="first-name" isInvalid>
    <FormLabel>First name</FormLabel>
    <Textarea placeholder="First Name" />
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
    <FormErrorMessage>
      <FormErrorIcon />
      Your First name is invalid
    </FormErrorMessage>
  </FormControl>
)

export const SelectExample: React.FC = () => (
  <FormControl id="first-name" isInvalid>
    <FormLabel>First name</FormLabel>
    <Select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
    <FormHelperText>Keep it very short and sweet!</FormHelperText>
    <FormErrorMessage>
      <FormErrorIcon />
      Your First name is invalid
    </FormErrorMessage>
  </FormControl>
)

/**
 * You can style the label when the input is focused,
 * simply pass the `_focus` pseudo prop
 */
export const StylingFocus: React.FC = () => (
  <FormControl id="first-name">
    <FormLabel _focus={{ color: "blue.600" }}>First name</FormLabel>
    <Input placeholder="First Name" width="100%" />
    <FormErrorMessage>Your First name is invalid</FormErrorMessage>
  </FormControl>
)