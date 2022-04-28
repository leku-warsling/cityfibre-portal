import { Story, Meta } from '@storybook/react';
import {
  Container,
  CircularProgress,
  CircularProgressProps,
  CircularProgressLabel,
} from '@chakra-ui/react';

export default {
  title: 'Components / Feedback / Circular Progress',
  component: CircularProgress,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<CircularProgressProps>;

const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgress {...args}>
    <CircularProgressLabel>{args.value}%</CircularProgressLabel>
  </CircularProgress>
);

export const Playground = Template.bind({});

Playground.args = {
  min: 0,
  max: 100,
  value: 60,
  size: '150px',
};
