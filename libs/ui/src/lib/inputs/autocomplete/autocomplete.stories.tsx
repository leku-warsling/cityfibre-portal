import { Story, Meta } from '@storybook/react';
import { Container } from '@chakra-ui/react';
import { AutocompleteProps } from './types';
import Autocomplete from './autocomplete';
import axios from 'axios';
import { take } from 'ramda';

const getOptions = async () => {
  return axios
    .get('https://bestofjs-static-api.vercel.app/projects.json')
    .then(({ data }) =>
      take(100, data.projects).map((item: any) => ({
        label: item.name,
        ...item,
      }))
    );
};

export default {
  title: 'Components / Forms / Autocomplete',
  component: Autocomplete,
  argTypes: {},
  decorators: [(story: Function) => <Container mt="40px">{story()}</Container>],
} as Meta<AutocompleteProps>;

const Template: Story<AutocompleteProps> = (
  args,
  { loaded: { options = [] } }
) => {
  console.log('options', options);
  return <Autocomplete {...args} options={options} />;
};

export const Primary = Template.bind({});

Primary.loaders = [
  async () => ({
    options: await getOptions(),
  }),
];

Primary.args = {};
