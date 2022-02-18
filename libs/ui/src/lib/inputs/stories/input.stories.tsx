import { useState } from 'react';
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons';
import { 
  Container, 
  Stack, 
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel, 
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { PasswordInput } from '..';

export default {
  title: 'Components / Forms / Input',
  decorators: [
    (story: Function) => (
      <Container maxW="560px" mx="auto" mt="40px">
        {story()}
      </Container>
    ),
  ],
  parameters: {
    docs: {
      page: null,
    },
  }
};

export const Basic = () => <Input placeholder="Basic input" isDisabled />;

export const sizes = () => (
  <Stack align="start" spacing={6}>
    {['xs', 'sm', 'md', 'lg'].map((size) => (
      <Input key={size} size={size} placeholder={`${size} input`} />
    ))}
  </Stack>
);

export const states = () => (
  <Stack align="start" spacing={6}>
    <Input placeholder="Idle" />
    <Input isInvalid placeholder="Invalid" />
    <Input isDisabled placeholder="Disabled" />
    <Input isReadOnly placeholder="Readonly" />
  </Stack>
);

export const variants = () => (
  <Stack align="start" spacing={6}>
    <Input placeholder="Solid" />
    <Input variant="outline" placeholder="Outline" />
    <Input variant="filled" placeholder="Filled" />
    <Input variant="flushed" placeholder="Flushed" />
    <Input variant="unstyled" placeholder="Unstyled" />
  </Stack>
);

export const WithInputAddon = () => (
  <Stack align="start">
    <InputGroup>
      <InputLeftAddon children="+234" />
      <Input placeholder="Phone number..." />
    </InputGroup>

    <InputGroup size="sm">
      <InputLeftAddon children="https://" />
      <Input placeholder="website.com" />
      <InputRightAddon children=".com" />
    </InputGroup>
  </Stack>
);

export const WithInputElement = () => (
  <Stack align="start">
    <InputGroup>
      <InputLeftElement children={<PhoneIcon color="gray.300" />} />
      <Input pl="60px" type="tel" placeholder="Phone number" />
    </InputGroup>

    <InputGroup size="sm">
      <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
      <Input placeholder="Enter amount" />
      <InputRightElement children={<CheckIcon color="green.500" />} />
    </InputGroup>
  </Stack>
);

export const Password = () => <PasswordInput placeholder="Enter password" />;

export const WithFocusAndErrorColors = () => (
  <Stack align="start" spacing="10">
    <Input focusBorderColor="lime" placeholder="Here is a sample placeholder" />

    <Input
      focusBorderColor="pink.400"
      placeholder="Here is a sample placeholder"
    />

    <Input
      isInvalid
      errorBorderColor="red.300"
      placeholder="Here is a sample placeholder"
    />

    <Input
      isInvalid
      errorBorderColor="crimson"
      placeholder="Here is a sample placeholder"
    />
  </Stack>
);

function FormError(props: any) {
  return (
    <FormErrorMessage
      mt="0"
      bg="red.500"
      color="white"
      px="1"
      lineHeight="1em"
      borderRadius="sm"
      {...props}
    />
  );
}

export const WithFormControl = () => {
  const [isError, setIsError] = useState(false);
  return (
    <Stack align="start">
      <FormControl id="first-name" isInvalid={isError}>
        <chakra.div display="flex" mb="2">
          <FormLabel mb="0" lineHeight="1em">
            Amount
          </FormLabel>
          <FormError>is invalid!</FormError>
        </chakra.div>
        <InputGroup size="sm">
          <InputLeftElement children="$" />
          <Input placeholder="Enter amount" />
          <InputRightAddon children=".com" />
        </InputGroup>
        <FormHelperText>Keep it very short and sweet!</FormHelperText>
      </FormControl>
      <button onClick={() => setIsError((s) => !s)}>Toggle Invalid</button>
    </Stack>
  );
};

export const WithInputElementBug = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <button onClick={onToggle}>Toggle element</button>
      <InputGroup>
        {isOpen && <InputLeftElement>O</InputLeftElement>}
        <Input name="input" placeholder="placeholder" />
      </InputGroup>
    </>
  );
};
