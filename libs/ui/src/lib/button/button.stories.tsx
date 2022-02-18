import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import {
  Container,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/layout';
import { BeatLoader } from 'react-spinners';
import { Button, ButtonGroup, IconButton } from '.';

export default {
  title: 'Components / Forms / Button',
  component: Button,
  argTypes: {
    variant: { 
      control: { type: "select"},
      options: [
        "primary",
        "secondary",
        "solid",
        "outline",
        "ghost",
        "link",
        "unstyled",
      ],
      defaultValue: "solid"
    },
    colorScheme: { 
      control: { type: "select"},
      options: [
        "brand",
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
        "telegram"
      ],
      defaultValue: "solid"
    },
    size: {
      control: { type: "select" },
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
      ],
      defaultValue: "md"
    },
    spinnerPlacement: {
      control: { type: "select" },
      options: [
        "start",
        "end",
      ],
      defaultValue: "start"
    },
    boxShadow: {
      control: { type: "select" },
      options: [
        "none",
        "base",
        "dark-lg",
        "lg",
        "md",
        "outline",
        "2xl"
      ],
      defaultValue: "none"
    }
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
  parameters: {
    docs: {
      page: null,
    },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isLoading: false,
  variant: "solid",
  colorScheme: "brand",
  loadingText: "Loading",
  size: "md",
  spinnerPlacement: "start",
  children: "Button"
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
      <Button variant="link" colorScheme="brand">
        Normal
      </Button>
      <Button variant="link" colorScheme="brand" isActive>
        Active
      </Button>
      <Button variant="link" colorScheme="brand" isDisabled>
        Disabled
      </Button>
      <Button
        variant="link"
        colorScheme="brand"
        loadingText="Loading"
        isLoading
      >
        Loading
      </Button>
    </HStack>
  </VStack>
);

export const variants = () => (
  <VStack spacing={6}>
    <HStack spacing={6}>
      <Button variant="primary">
        Primary
      </Button>
      <Button variant="secondary">
        Secondary
      </Button>
      <Button colorScheme="blue" variant="solid">
        Solid
      </Button>
    </HStack>
    <HStack spacing={6}>
      <Button colorScheme="brand" variant="outline">
        Outline
      </Button>
      <Button colorScheme="brand" variant="ghost">
        Ghost
      </Button>
      <Button colorScheme="brand" variant="link">
        Link
      </Button>
      <Button colorScheme="brand" variant="unstyled">
        Unstyled
      </Button>
    </HStack>
  </VStack>
);

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
      <Button variant="link" colorScheme="brand" size="xs">
        XSmall
      </Button>
      <Button variant="link" colorScheme="brand" size="sm">
        Small
      </Button>
      <Button variant="link" colorScheme="brand" size="md">
        Medium
      </Button>
      <Button variant="link" colorScheme="brand" size="lg">
        Large
      </Button>
      <Button variant="link" colorScheme="brand" size="xl">
        XLarge
      </Button>
    </HStack>
  </VStack>
);

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
    <Button rightIcon={<ArrowForwardIcon />} variant="link" colorScheme="brand">
      Call us
    </Button>
  </Stack>
);

export const Loading = () => (
  <VStack spacing="6">
    <HStack justifyContent="space-between">
      <Button variant="primary" isLoading>Loading</Button>
      <Button variant="primary" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="primary" spinnerPlacement="start" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="primary" spinnerPlacement="end" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="primary" spinner={<BeatLoader size={8} color="gray" />} isLoading>
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="secondary" isLoading>Loading</Button>
      <Button variant="secondary" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="secondary" spinnerPlacement="start" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="secondary" spinnerPlacement="end" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="secondary" spinner={<BeatLoader size={8} color="gray" />} isLoading>
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="outline" colorScheme="blackAlpha" isLoading>Loading</Button>
      <Button variant="outline" colorScheme="blackAlpha" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" spinnerPlacement="start" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" spinnerPlacement="end" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="outline" colorScheme="blackAlpha" spinner={<BeatLoader size={8} color="gray" />} isLoading>
        Loading
      </Button>
    </HStack>
    <HStack justifyContent="space-between">
      <Button variant="ghost" colorScheme="blackAlpha" isLoading>Loading</Button>
      <Button variant="ghost" colorScheme="blackAlpha" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="ghost" colorScheme="blackAlpha" spinnerPlacement="start" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="ghost" colorScheme="blackAlpha" spinnerPlacement="end" loadingText="Loading" isLoading>
        Loading
      </Button>
      <Button variant="ghost" colorScheme="blackAlpha" spinner={<BeatLoader size={8} color="gray" />} isLoading>
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
);

export const buttonGroup = () => (
  <ButtonGroup variant="outline">
    <Button colorScheme="blue">Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
);

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
    <ButtonGroup isAttached colorScheme="brand">
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
);

// const motionConfig = {
//   initial: false,
//   transition: {
//     type: 'spring',
//     duration: 2,
//     bounce: 0,
//   },
// };

// const MotionButton = motion(Button);
// const BG_GRADIENT_SOFT = `linear-gradient(to right, #fa8080, #F40000)`;
// const BG_GRADIENT_SOFT_REVERSED = `linear-gradient(to right, #F40000, #fa8080)`;

// export const WithMotion = () => {
//   const [binary, setBinary] = React.useState(false);
//   return (
//     <>
//       <Button onClick={() => setBinary((binary) => !binary)}>
//         Toggle binary state: {String(binary)}
//       </Button>
//       <MotionButton
//         {...motionConfig}
//         animate={{
//           scale: binary ? 1.2 : 1,
//           backgroundImage: binary
//             ? BG_GRADIENT_SOFT
//             : BG_GRADIENT_SOFT_REVERSED,
//         }}
//       >
//         ({String(binary)}) Doesn't work
//       </MotionButton>
//     </>
//   );
// };
