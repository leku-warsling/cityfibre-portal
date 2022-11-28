import { Story, Meta } from "@storybook/react"
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons"
import {
  Container,
  HStack,
  Stack,
  VStack,
  Button,
  ButtonGroup,
  IconButton,
  ButtonProps,
} from "@chakra-ui/react"
import BeatLoader from "react-spinners/BeatLoader"

export default {
  title: "Components / Forms / Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "solid",
        "outline",
        "ghost",
        "link",
        "unstyled",
      ],
      table: {
        defaultValue: "solid",
      },
    },
    colorScheme: {
      control: { type: "select" },
      options: [
        "primary",
        "green",
        "blue",
        "red",
        "gray",
        "orange",
        "teal",
        "teal",
        "whiteAlpha",
        "blackAlpha",
        "yellow",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      table: {
        defaultValue: "primary",
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        defaultValue: "md",
      },
    },
    spinnerPlacement: {
      control: { type: "select" },
      options: ["start", "end"],
      table: {
        defaultValue: "start",
      },
    },
    boxShadow: {
      control: { type: "select" },
      options: ["none", "base", "dark-lg", "lg", "md", "outline", "2xl"],
      table: {
        defaultValue: "none",
      },
    },
  },
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = ({ as, ...args }) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isActive: false,
  isDisabled: false,
  isLoading: false,
  variant: "primary",
  loadingText: "Loading",
  size: "md",
  spinnerPlacement: "start",
  children: "Button",
}

export const states = () => (
  <VStack spacing="6">
    <HStack justifyContent="space-between">
      <Button variant="primary">Normal</Button>
      <Button variant="primary" isActive>
        Active
      </Button>
      <Button variant="primary" isDisabled>
        Disabled
      </Button>
      <Button variant="primary" loadingText="Loading" isLoading>
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="secondary">Normal</Button>
      <Button variant="secondary" isActive>
        Active
      </Button>
      <Button variant="secondary" isDisabled>
        Disabled
      </Button>
      <Button variant="secondary" loadingText="Loading" isLoading>
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="outline" colorScheme="blackAlpha">
        Normal
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" isActive>
        Active
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" isDisabled>
        Disabled
      </Button>
      <Button
        variant="outline"
        colorScheme="blackAlpha"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="ghost">Normal</Button>
      <Button variant="ghost" isActive>
        Active
      </Button>
      <Button variant="ghost" isDisabled>
        Disabled
      </Button>
      <Button variant="ghost" loadingText="Loading" isLoading>
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="link" colorScheme="primary">
        Normal
      </Button>
      <Button variant="link" colorScheme="primary" isActive>
        Active
      </Button>
      <Button variant="link" colorScheme="primary" isDisabled>
        Disabled
      </Button>
      <Button
        variant="link"
        colorScheme="primary"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
    </HStack>
  </VStack>
)

export const variants = () => (
  <VStack spacing={6}>
    <HStack spacing={6}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button colorScheme="blue" variant="solid">
        Solid
      </Button>
    </HStack>
    <HStack spacing={6}>
      <Button colorScheme="primary" variant="outline">
        Outline
      </Button>
      <Button colorScheme="primary" variant="ghost">
        Ghost
      </Button>
      <Button colorScheme="primary" variant="link">
        Link
      </Button>
      <Button colorScheme="primary" variant="unstyled">
        Unstyled
      </Button>
    </HStack>
  </VStack>
)

export const sizes = () => (
  <VStack spacing="6">
    <HStack justifyContent="space-between">
      <Button variant="primary" size="xs">
        XSmall
      </Button>
      <Button variant="primary" size="sm">
        Small
      </Button>
      <Button variant="primary" size="md">
        Medium
      </Button>
      <Button variant="primary" size="lg">
        Large
      </Button>
      <Button variant="primary" size="xl">
        XLarge
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="secondary" size="xs">
        XSmall
      </Button>
      <Button variant="secondary" size="sm">
        Small
      </Button>
      <Button variant="secondary" size="md">
        Medium
      </Button>
      <Button variant="secondary" size="lg">
        Large
      </Button>
      <Button variant="secondary" size="xl">
        XLarge
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="outline" colorScheme="blackAlpha" size="xs">
        XSmall
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" size="sm">
        Small
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" size="md">
        Medium
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" size="lg">
        Large
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" size="xl">
        XLarge
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="ghost" size="xs">
        XSmall
      </Button>
      <Button variant="ghost" size="sm">
        Small
      </Button>
      <Button variant="ghost" size="md">
        Medium
      </Button>
      <Button variant="ghost" size="lg">
        Large
      </Button>
      <Button variant="ghost" size="xl">
        XLarge
      </Button>
    </HStack>
    <HStack justifyContent="space-between" w="100%">
      <Button variant="link" colorScheme="primary" size="xs">
        XSmall
      </Button>
      <Button variant="link" colorScheme="primary" size="sm">
        Small
      </Button>
      <Button variant="link" colorScheme="primary" size="md">
        Medium
      </Button>
      <Button variant="link" colorScheme="primary" size="lg">
        Large
      </Button>
      <Button variant="link" colorScheme="primary" size="xl">
        XLarge
      </Button>
    </HStack>
  </VStack>
)

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} variant="secondary">
      Email
    </Button>
    <Button rightIcon={<ArrowForwardIcon />} variant="primary">
      Call us
    </Button>
    <Button leftIcon={<EmailIcon />} variant="outline" colorScheme="gray">
      Email
    </Button>
    <Button
      rightIcon={<ArrowForwardIcon />}
      variant="link"
      colorScheme="primary"
    >
      Call us
    </Button>
  </Stack>
)

export const Loading = () => (
  <VStack spacing="6">
    <HStack justifyContent="space-between">
      <Button variant="primary" isLoading>
        Loading
      </Button>
      <Button variant="primary" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button
        variant="primary"
        spinnerPlacement="start"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="primary"
        spinnerPlacement="end"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="primary"
        spinner={<BeatLoader size={8} color="gray" />}
        isLoading
      >
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="secondary" isLoading>
        Loading
      </Button>
      <Button variant="secondary" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button
        variant="secondary"
        spinnerPlacement="start"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="secondary"
        spinnerPlacement="end"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="secondary"
        spinner={<BeatLoader size={8} color="gray" />}
        isLoading
      >
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="outline" colorScheme="blackAlpha" isLoading>
        Loading
      </Button>
      <Button
        variant="outline"
        colorScheme="blackAlpha"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="outline"
        colorScheme="blackAlpha"
        spinnerPlacement="start"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="outline"
        colorScheme="blackAlpha"
        spinnerPlacement="end"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="outline"
        colorScheme="blackAlpha"
        spinner={<BeatLoader size={8} color="gray" />}
        isLoading
      >
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="ghost" colorScheme="blackAlpha" isLoading>
        Loading
      </Button>
      <Button
        variant="ghost"
        colorScheme="blackAlpha"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="ghost"
        colorScheme="blackAlpha"
        spinnerPlacement="start"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="ghost"
        colorScheme="blackAlpha"
        spinnerPlacement="end"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
      <Button
        variant="ghost"
        colorScheme="blackAlpha"
        spinner={<BeatLoader size={8} color="gray" />}
        isLoading
      >
        Loading
      </Button>
    </HStack>
  </VStack>
)

export const iconButton = () => (
  <VStack spacing="6">
    <HStack justifyContent="space-between">
      <IconButton
        aria-label="Search database"
        icon={<ArrowForwardIcon />}
        variant="primary"
        size="sm"
      />
      <IconButton
        aria-label="Search database"
        icon={<ArrowForwardIcon />}
        variant="primary"
      />
      <IconButton
        aria-label="Search database"
        icon={<ArrowForwardIcon />}
        variant="primary"
        size="lg"
      />
    </HStack>
    <HStack justifyContent="space-between">
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        variant="secondary"
        size="sm"
      />
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        variant="secondary"
      />
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        variant="secondary"
        size="lg"
      />
    </HStack>
    <HStack justifyContent="space-between">
      <IconButton
        aria-label="Search database"
        icon={<PhoneIcon />}
        variant="outline"
        colorScheme="blackAlpha"
        size="sm"
      />
      <IconButton
        aria-label="Search database"
        icon={<PhoneIcon />}
        variant="outline"
        colorScheme="blackAlpha"
      />
      <IconButton
        aria-label="Search database"
        icon={<PhoneIcon />}
        variant="outline"
        colorScheme="blackAlpha"
        size="lg"
      />
    </HStack>
    <HStack justifyContent="space-between">
      <IconButton
        aria-label="Search database"
        icon={<EmailIcon />}
        variant="ghost"
        size="sm"
      />
      <IconButton
        aria-label="Search database"
        icon={<EmailIcon />}
        variant="ghost"
      />
      <IconButton
        aria-label="Search database"
        icon={<EmailIcon />}
        variant="ghost"
        size="lg"
      />
    </HStack>
  </VStack>
)

export const buttonGroup = () => (
  <ButtonGroup variant="outline">
    <Button colorScheme="blue">Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
)

export const attachedButtons = () => (
  <Stack direction="row" spacing="6">
    <ButtonGroup isAttached variant="outline" colorScheme="blackAlpha">
      <Button marginEnd="-px">Save</Button>
      <IconButton
        fontSize="2xl"
        aria-label="Add to friends"
        icon={<ChevronDownIcon />}
      />
    </ButtonGroup>
    <ButtonGroup isAttached colorScheme="primary">
      <Button marginEnd="-px">Save</Button>
      <IconButton
        fontSize="2xl"
        aria-label="Add to friends"
        borderLeft="1px solid"
        borderColor="#E2E8F0"
        icon={<ChevronDownIcon />}
      />
    </ButtonGroup>
  </Stack>
)
