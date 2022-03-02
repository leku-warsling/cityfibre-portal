import { Story, Meta } from '@storybook/react';
import {
  Badge,
  Box,
  Container,
  Divider,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Sidebar, { SidebarProps } from './Sidebar';
import Nav from '../../navigation/nav';
import {
  FiSettings,
  FiUsers,
  FiInbox,
  FiPhone,
  FiHelpCircle,
} from 'react-icons/fi';
import { BiHome, BiDollarCircle, BiBasket } from 'react-icons/bi';
import { RiDashboard3Line } from 'react-icons/ri';
import { ReactComponent as PartnersIcon } from '../../../assets/svg/partners.svg';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

export default {
  title: 'Components / Layout / Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container bgColor="white" maxW="5xl" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<SidebarProps>;

const Template: Story<SidebarProps> = (args) => {
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
      {...args}
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
          <Nav.Item>Invoices</Nav.Item>
          <Nav.Item>Credit Notes</Nav.Item>
          <Nav.Item>Payments</Nav.Item>
          <Nav.Item>Statements</Nav.Item>
          <Nav.Item>Bank Details</Nav.Item>
          <Nav.Item>Orders On Hold</Nav.Item>
          <Nav.Item>Bandwidth Usage</Nav.Item>
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

export const Primary = Template.bind({});
Primary.args = {};
