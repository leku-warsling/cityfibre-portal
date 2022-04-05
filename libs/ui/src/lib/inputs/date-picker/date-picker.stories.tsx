import { Story, Meta } from '@storybook/react';
import { Container } from '@chakra-ui/react';
import DatePicker from './date-picker';
import { DatePickerProps } from './types';

export default {
  title: 'Components / Forms / DatePicker',
  component: DatePicker,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<DatePickerProps>;

const Template: Story<DatePickerProps> = (args) => (
  <DatePicker {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
