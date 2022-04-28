import { Story, Meta } from '@storybook/react';
import { Container, Progress, ProgressProps } from '@chakra-ui/react';

export default {
  title: 'Components / Feedback / Progress',
  component: Progress,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<ProgressProps>;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  min: 0,
  max: 100,
  value: 60,
};
