import {
  AppShell,
  AppBar,
  Sidebar,
  IconButton,
  SearchInput,
  Nav,
  PartnersIcon,
  Logo,
  Text,
} from '@ui';
import {
  Badge,
  VStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Divider,
  HStack,
  MenuDivider,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiSettings,
  FiUsers,
  FiInbox,
  FiHelpCircle,
  FiUser,
  FiLogOut,
} from 'react-icons/fi';
import { BiTransferAlt } from 'react-icons/bi';
import { RiDashboard3Line } from 'react-icons/ri';
import { Outlet } from 'react-router-dom'
import { useAuth } from '../providers/auth.provider';

const AppHeader = () => {
  const { logout } = useAuth()
  return (
    <AppBar pl={4} pr={6} py={3} bgColor="white" boxShadow="sm">
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
            <MenuList zIndex={100}>
              <MenuItem icon={<FiUser/>}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={<FiLogOut/>} onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </AppBar.Item>
      </AppBar.Section>
    </AppBar>
  );
}

const AppSidebar = () => {
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
      height="100vh"
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
        <Nav.Item isActive icon={RiDashboard3Line}>Dashboard</Nav.Item>
        <Nav.SubMenu icon={BiTransferAlt} label="Migrations">
          <Nav.Item>Pending</Nav.Item>
          <Nav.Item>Completed</Nav.Item>
          <Nav.Item>Failed</Nav.Item>
        </Nav.SubMenu>
        <Divider borderColor="#718589" my={2} />
        <Nav.Item icon={FiUsers}>User Management</Nav.Item>
        <Nav.Item icon={FiSettings}>Settings</Nav.Item>
        <Nav.Item icon={FiHelpCircle}>Help & Support</Nav.Item>
      </Nav>
    </Sidebar>
  );
};

const MainLayout = () => (
  <AppShell header={<AppHeader />} sidebar={<AppSidebar />}>
    <Outlet />
  </AppShell> 
)

export default MainLayout