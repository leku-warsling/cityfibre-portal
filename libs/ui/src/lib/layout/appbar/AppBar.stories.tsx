import { Story, Meta } from '@storybook/react';
import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Avatar,
} from '@chakra-ui/react';
import { SearchInput } from "../../inputs"
import AppBar, { AppBarProps } from './AppBar';
import { FiMenu } from 'react-icons/fi';

export default {
  title: 'Components / Layout / AppBar',
  component: AppBar,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container bgColor="white" maxW="5xl" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<AppBarProps>;

const Template: Story<AppBarProps> = (args) => {
  return (
    <AppBar px={6} py={4}>
      <AppBar.Section>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="Toggle menu"
          icon={<FiMenu fontSize="24px" />}
        />
      </AppBar.Section>
      <AppBar.Section flexGrow={1} justifyContent="center">
        <SearchInput
          variant="filled"
          maxW="400px"
          placeholder="Search for issues, invoices, services...
"
          onSearch={console.log}
        />
      </AppBar.Section>
      <AppBar.Section marginLeft="auto">
        <AppBar.Item>
          <Menu>
            <MenuButton>
              <Avatar bg="gray.200" size="sm" name="Luke Rawlings" />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </AppBar.Item>
      </AppBar.Section>
    </AppBar>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
