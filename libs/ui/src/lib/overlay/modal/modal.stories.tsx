import { Story, Meta } from '@storybook/react';
import {
  Container,
  Button,
  useDisclosure,
  ButtonProps,
} from '@chakra-ui/react';
import Modal, { ModalProps } from './modal';

export default {
  title: 'Components / Overlay / Modal',
  component: Modal,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        'full',
      ],
      table: {
        defaultValue: 'xl',
      },
    },
  },
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<ModalProps>;

Modal.displayName = 'Modal';

const Template: Story<ModalProps> = (args) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const actions: ButtonProps[] = [
    {
      variant: 'ghost',
      onClick: onClose,
      children: 'Cancel',
    },
    {
      onClick: onClose,
      children: 'Ok',
    },
  ];

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={onClose} actions={actions} />
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'Modal Title',
  children:
    'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
};
