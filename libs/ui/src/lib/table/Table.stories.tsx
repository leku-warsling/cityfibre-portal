import { Box, Container, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react';
import Table, { TableProps } from './Table';
import { faker } from '@faker-js/faker';
import { useMemo } from 'react';
import { test, times } from 'ramda';

export default {
  title: 'Components / Data Display / Table',
  component: Table,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="1200px" mt="40px">
        {story()}
      </Container>
    ),
  ],
} as Meta<TableProps<object>>;

const createRecord = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  employer: faker.company.companyName(),
});

type ExampleCustomer = {
  name: string;
  phone: string;
  email: string;
  employer: string;
};

type Props = Omit<TableProps<object>, 'data' | 'columns'>;

const Template: Story<Props> = (args) => {
  const data = times(createRecord, 50);

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      disableFilters: true,
    },
    {
      Header: 'Email',
      accessor: 'email',
      Filter: EmailProviderFilter,
      filter: 'includes',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
      disableFilters: true,
      disableSortBy: true,
    },
    {
      Header: 'Employer',
      accessor: 'employer',
      disableFilters: true,
    },
  ] as const;

  return (
    <Box bgColor="white" px="6" pt="2" pb="4" rounded={5} boxShadow="base">
      <Table {...args} data={data} columns={columns} />
    </Box>
  );
};

const isEmailAddress = test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const EmailProviderFilter = ({ column }: any) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;
  const options = useMemo(() => {
    const providers = new Set()

    for (const { values } of preFilteredRows) {
      if (!isEmailAddress(values[id])) continue
      const provider = values[id].split('@')[1].split(".")[0]
      providers.add(provider);
    }

    return Array.from(providers);
  }, [id, preFilteredRows]) as string[]

  return (
    <RadioGroup 
      value={filterValue}
      onChange={setFilter}
    >
      <Stack spacing={2} direction="column" textTransform="capitalize">
        <Radio value="">All</Radio>
        {options.map((option, i) => (
          <Radio key={i} value={option}>
            {option}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'simple',
  isLoading: false,
};
