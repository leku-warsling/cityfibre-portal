import { Container, HStack } from '@chakra-ui/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { repeat } from 'ramda';
import { FC } from 'react';
import { PinInput, PinInputField, PinInputProps } from '..';

type ExamplePinInputProps = PinInputProps & {
  length: number;
  spacing?: number;
};

const ExamplePinInput: FC<ExamplePinInputProps> = ({
  length = 4,
  spacing = 1,
  ...props
}) => (
  <HStack>
    <PinInput {...props}>{repeat(<PinInputField />, length)}</PinInput>
  </HStack>
);

export default {
  title: 'Components / Forms / PinInput',
  component: ExamplePinInput,
  decorators: [
    (story: Function) => (
      <Container maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </Container>
    ),
  ],
  parameters: {
    docs: {
      page: null,
    },
  }
} as ComponentMeta<typeof ExamplePinInput>;

const Template: ComponentStory<typeof ExamplePinInput> = (args) => (
  <ExamplePinInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  length: 8,
};

export const Sizes = () => (
  <>
    {['xs', 'sm', 'md', 'lg'].map((size) => (
      <div key={size} style={{ marginBottom: '1rem' }}>
        <PinInput size={size}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </div>
    ))}
  </>
);
