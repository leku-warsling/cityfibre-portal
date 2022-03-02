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
  HStack,
  Box,
  Text,
  VStack,
  Divider,
  Badge,
  Button,
} from '@chakra-ui/react';
import { SearchInput } from '../../inputs';
import AppShell, { AppShellProps } from './app-shell';
import AppBar from '../appbar/AppBar';
import { Sidebar } from '../sidebar';
import Nav from '../../navigation/nav';
import Page from '../page';
import {
  FiMenu,
  FiSettings,
  FiUsers,
  FiInbox,
  FiPhone,
  FiHelpCircle,
  FiPlus,
} from 'react-icons/fi';
import { BiHome, BiDollarCircle, BiBasket } from 'react-icons/bi';
import { RiDashboard3Line } from 'react-icons/ri';
import { ReactComponent as PartnersIcon } from '../../../assets/svg/partners.svg';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

export default {
  title: 'Components / Layout / AppShell',
  component: AppBar,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="1400px" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<AppShellProps>;

const ExampleAppBar = () => (
  <AppBar pl={4} pr={6} py={4} bgColor="white">
    <AppBar.Section>
      <IconButton
        variant="ghost"
        colorScheme="gray"
        aria-label="Toggle menu"
        icon={<FiMenu fontSize="20px" />}
      />
    </AppBar.Section>
    <AppBar.Section flexGrow={1} justifyContent="center">
      <SearchInput
        variant="filled"
        maxW="400px"
        placeholder="Search for issues, invoices, services..."
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

const ExampleSidebar = () => {
  const header = (
    <HStack spacing={3}>
      <Box bgColor="brand.500" rounded={5} p={2}>
        <PartnersIcon
          height="20"
          style={{
            filter: 'drop-shadow(0px 5px 2px rgb(0 0 0 / 0.1)',
          }}
        />
      </Box>
      <Text fontSize="20px" fontWeight={600}>
        Partner Suite
      </Text>
    </HStack>
  );

  const footer = (
    <VStack w="100%" color="#718589">
      <Text fontWeight={600}>Powered by</Text>
      <Logo height="32" />
    </VStack>
  );

  return (
    <Sidebar
      isOpen
      onClose={() => null}
      header={header}
      footer={footer}
      height="1080px"
      overflowY="auto"
    >
      <Nav>
        <Nav.Item icon={FiInbox}>
          <HStack alignItems="center" justifyContent="space-between" w="100%">
            <span>Inbox</span>
            <Badge
              variant="solid"
              colorScheme="brand"
              fontSize="14px"
              px="10px"
              py="4px"
              rounded="full"
            >
              3
            </Badge>
          </HStack>
        </Nav.Item>
        <Divider borderColor="#718589" my="1" />
        <Nav.Item icon={RiDashboard3Line}>Dashboard</Nav.Item>
        <Nav.SubMenu icon={BiHome} label="Support">
          <Nav.Item>Incidents</Nav.Item>
          <Nav.Item>Services</Nav.Item>
          <Nav.Item>Networks</Nav.Item>
        </Nav.SubMenu>
        <Nav.SubMenu icon={BiDollarCircle} label="Billing">
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Invoices
          </Nav.Item>
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Credit Notes
          </Nav.Item>
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Payments
          </Nav.Item>
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Statements
          </Nav.Item>
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Bank Details
          </Nav.Item>
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Orders On Hold
          </Nav.Item>
          <Nav.Item fontSize="14px" py={1.5} px={3}>
            Bandwidth Usage
          </Nav.Item>
        </Nav.SubMenu>
        <Nav.SubMenu icon={BiBasket} label="Orders">
          <Nav.Item>FTTP</Nav.Item>
          <Nav.Item>Ethernet</Nav.Item>
        </Nav.SubMenu>
        <Nav.Item icon={FiPhone}>VOIP</Nav.Item>
        <Divider borderColor="#718589" my={2} />
        <Nav.Item icon={FiUsers}>User Management</Nav.Item>
        <Nav.Item icon={FiSettings}>Settings</Nav.Item>
        <Nav.Item icon={FiHelpCircle}>Help & Support</Nav.Item>
      </Nav>
    </Sidebar>
  );
};

const actions = [
  <Button
    key={0}
    aria-label="Add Invoice"
    size="sm"
    variant="primary"
    leftIcon={<FiPlus />}
  >
    Invoice
  </Button>,
];

const Template: Story<AppShellProps> = (args) => {
  const breadcrumb = [
    {
      path: "/billing",
      name: "Billing",
    },
    {
      path: "/billing/invoices",
      name: "Invoices",
    }
  ]

  return (
    <AppShell
      header={<ExampleAppBar />}
      sidebar={<ExampleSidebar />}
      boxShadow="2xl"
    >
      <Page>
        <Page.Header
          breadcrumb={breadcrumb}
          actions={actions}
        >
          Invoices
        </Page.Header>
      </Page>
    </AppShell>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
