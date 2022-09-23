import {
  AppShell,
  AppBar,
  Sidebar,
  IconButton,
  SearchInput,
  Nav,
  PartnersIcon,
  Logo,
} from "@ui/lib"
import { Badge, Text, Box, Divider, Flex } from "@chakra-ui/layout"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/menu"
import { Avatar } from "@chakra-ui/avatar"
import { Icon } from "@chakra-ui/icon"
import { useDisclosure } from "@chakra-ui/hooks"
import {
  FiSettings,
  FiUsers,
  FiInbox,
  FiHelpCircle,
  FiUser,
  FiLogOut,
} from "react-icons/fi"
import { BiTransferAlt } from "react-icons/bi"
import { RiDashboard3Line } from "react-icons/ri"
import { Outlet } from "react-router-dom"
import { useAuth } from "../providers/auth.provider"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"

const MainLayout = () => {
  const { logout } = useAuth()
  const { isOpen, onToggle, onClose } = useDisclosure()

  const header = (
    <AppBar pl={4} pr={6} py={3} bgColor="white" boxShadow="sm">
      <AppBar.Section>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="Toggle menu"
          icon={
            <Icon
              as={isOpen ? AiOutlineMenuFold : AiOutlineMenuUnfold}
              fontSize="xl"
            />
          }
          onClick={onToggle}
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
              <MenuItem icon={<FiUser />}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={<FiLogOut />} onClick={logout}>
                Logout
              </MenuItem>
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
    <Sidebar.Section fontWeight="semibold" color="#718589" gap={1}>
      {({ isCollapsed }) => (
        <Flex
          hidden={isCollapsed}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt="auto"
          alignSelf="flex-end"
        >
          <Text fontWeight={600}>Powered by</Text>
          <Logo height="32" />
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
              colorScheme="secondary"
              fontSize="14px"
              px="10px"
              py="4px"
              rounded="full"
            >
              3
            </Badge>
          </Nav.Item>
          <Divider borderColor="#718589" my="1" />
          <Nav.Item isActive icon={RiDashboard3Line}>
            Dashboard
          </Nav.Item>
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
      )}
    </Sidebar.Section>
  )

  const sidebar = (
    <Sidebar
      height={{ base: "auto", lg: "100vh" }}
      isOpen={isOpen}
      onClose={onClose}
      overflowY="auto"
    >
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
