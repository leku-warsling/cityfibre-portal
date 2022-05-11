import { Container, HStack } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import { BiUpArrowAlt } from 'react-icons/bi';
import Statistic, { StatisticProps } from './statistic';

export default {
  title: 'Components / Data Display / Statistic',
  component: Statistic,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<StatisticProps>;

Statistic.displayName = 'Statistic';

const Template: Story<StatisticProps> = (args) => <Statistic {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Incidents',
  children: 300,
  boxShadow: 'lg',
  rounded: 4,
  px: 6,
  py: 4,
  maxWidth: '250px',
  bgColor: '#fff',
  description: (
    <HStack spacing={1}>
      <BiUpArrowAlt />
      <span>33%</span>
    </HStack>
  ),
};
