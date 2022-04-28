import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Container, UseToastOptions, useToast } from '@chakra-ui/react';
import { FC } from 'react';

const Toast: FC<UseToastOptions> = ({ children, ...props }) => {
  const toast = useToast();

  return <Button onClick={() => toast(props)}>{children}</Button>;
};

export default {
  title: 'Components / Feedback / Toast',
  component: Toast,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['info', 'warning', 'success', 'error'],
      table: {
        defaultValue: 'success',
      },
    },
    variants: {
      control: { type: 'select' },
      options: ['solid', 'subtle', 'left-accent', 'top-accent'],
      table: {
        defaultValue: 'solid',
      },
    },
    position: {
      control: { type: 'select' },
      options: [
        'top',
        'top-right',
        'top-left',
        'bottom',
        'bottom-right',
        'bottom-left',
      ],
      table: {
        defaultValue: 'bottom',
      },
    },
  },
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  title: 'Toast Titile',
  description: 'Sit nulla est ex deserunt exercitation anim occaecat',
  status: 'success',
  duration: 9000,
  variant: 'solid',
  isClosable: true,
  children: 'Show toast',
};
