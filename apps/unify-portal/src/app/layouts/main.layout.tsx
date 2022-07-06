import { RiDashboard3Line } from "react-icons/ri"
import { Outlet } from "react-router-dom"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
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
} from "@ui"
import {
  Badge,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Divider,
  MenuDivider,
  useDisclosure,
  Flex,
  Icon,
} from "@chakra-ui/react"
import {
  FiSettings,
  FiUsers,
  FiInbox,
  FiHelpCircle,
  FiUser,
  FiLogOut,
} from "react-icons/fi"
import {
  BiBasket,
  BiDollar,
  BiError,
  BiNetworkChart,
  BiPhoneCall,
  BiWrench,
} from "react-icons/bi"

const MainLayout = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  const header = (
    <AppBar
      bgColor="white"
      boxShadow="sm"
      zIndex={1}
      position="sticky"
      pl={4}
      pr={6}
      py={3}
      top="0"
    >
      <AppBar.Section>
        <IconButton
          aria-label="Toggle menu"
          onClick={onToggle}
          colorScheme="gray"
          variant="ghost"
          icon={
            <Icon
              as={isOpen ? AiOutlineMenuFold : AiOutlineMenuUnfold}
              fontSize="xl"
            />
          }
        />
      </AppBar.Section>
      <AppBar.Section flexGrow={1} justifyContent="center">
        {/* <SearchInput
          variant="filled"
          maxW="400px"
          placeholder="Search for issues, invoices, services..."
          onSearch={console.log}
        /> */}
      </AppBar.Section>
      <AppBar.Section marginLeft="auto">
        <AppBar.Item>
          <Menu>
            <MenuButton>
              <Avatar bg="gray.200" size="sm" name="Luke Rawlings" />
            </MenuButton>
            <MenuList zIndex={100}>
              <MenuItem icon={<FiUser />}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </AppBar.Item>
      </AppBar.Section>
    </AppBar>
  )

  const brand = (
    <Box bgColor="brand.500" rounded={5} p={3}>
      <PartnersIcon
        height="20"
        style={{
          filter: "drop-shadow(0px 5px 2px rgb(0 0 0 / 0.1)",
        }}
      />
    </Box>
  )

  const footer = (
    <Sidebar.Section fontWeight="semibold" color="brand.500" gap={1}>
      {({ isCollapsed }) => (
        <Flex
          hidden={isCollapsed}
          justifyContent="center"
          flexDirection="column"
          alignSelf="flex-end"
          alignItems="center"
          mt="auto"
          gap={2}
        >
          <Text fontWeight={600}>Powered by</Text>
          <Logo height="40" />
        </Flex>
      )}
    </Sidebar.Section>
  )

  const content = (
    <Sidebar.Section flexGrow={1}>
      {({ isCollapsed }) => (
        <Nav isCollapsed={isCollapsed}>
          <Nav.Item icon={FiInbox}>
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
          </Nav.Item>
          <Divider borderColor="brand.500" my="1" />
          <Nav.Item icon={RiDashboard3Line}>Dashboard</Nav.Item>
          <Nav.Item isActive icon={BiError}>
            Incidents
          </Nav.Item>
          <Nav.Item icon={BiNetworkChart}>Networks</Nav.Item>
          <Nav.Item icon={BiWrench}>Services</Nav.Item>
          <Nav.Item icon={BiDollar}>Billing</Nav.Item>
          <Nav.Item icon={BiPhoneCall}>VOIP</Nav.Item>
          <Nav.Item icon={BiBasket}>Ordering</Nav.Item>
          <Divider borderColor="brand.500" my={2} />
          <Nav.Item icon={FiUsers}>User Management</Nav.Item>
          <Nav.Item icon={FiSettings}>Settings</Nav.Item>
          <Nav.Item icon={FiHelpCircle}>Help & Support</Nav.Item>
        </Nav>
      )}
    </Sidebar.Section>
  )

  const sidebar = (
    <Sidebar isOpen={isOpen} onClose={onClose} height="100vh" overflowY="auto">
      <Sidebar.Section fontSize="xl" fontWeight="semibold" pt={6}>
        {({ isCollapsed }) => (
          <Flex alignItems="center" gap={isCollapsed ? 0 : 3}>
            {brand}
            <Text hidden={isCollapsed}>Partner Suite</Text>
          </Flex>
        )}
      </Sidebar.Section>
      {content}
      {footer}
    </Sidebar>
  )

  return (
    <AppShell header={header} sidebar={sidebar}>
      <Outlet />
    </AppShell>
  )
}

export default MainLayout
