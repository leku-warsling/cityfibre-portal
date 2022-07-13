import { RiDashboard3Line } from "react-icons/ri"
import { Link, Outlet } from "react-router-dom"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { BiBasket, BiDollar, BiPhoneCall, BiSupport } from "react-icons/bi"
import { SearchIcon } from "@chakra-ui/icons"
import { useAuth } from "../providers/auth.provider"
import {
  PartnersIcon,
  IconButton,
  AppShell,
  Sidebar,
  AppBar,
  Logo,
  Text,
  Nav,
} from "@ui"
import {
  InputLeftElement,
  useDisclosure,
  MenuDivider,
  MenuButton,
  InputGroup,
  MenuList,
  MenuItem,
  Divider,
  Avatar,
  Badge,
  Box,
  Menu,
  Flex,
  Icon,
  Input,
} from "@chakra-ui/react"
import {
  FiHelpCircle,
  FiSettings,
  FiLogOut,
  FiUsers,
  FiInbox,
} from "react-icons/fi"

const MainLayout = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { logout } = useAuth()

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
      <AppBar.Section>
        <Text fontSize="lg" fontWeight={600}>
          Dashboard
        </Text>
      </AppBar.Section>
      <AppBar.Section flexGrow={1} justifyContent="center">
        {/* <SearchInput
          variant="filled"
          maxW="400px"
          placeholder="Search for issues, invoices, services..."
          onSearch={console.log}
        /> */}
        <InputGroup maxW="400px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            variant="filled"
            placeholder="Search for issues, invoices, services.."
          />
        </InputGroup>
      </AppBar.Section>
      <AppBar.Section marginLeft="auto">
        <AppBar.Item>
          <Menu>
            <MenuButton>
              <Avatar bg="gray.200" size="sm" name="Luke Rawlings" />
            </MenuButton>
            <MenuList zIndex={100}>
              <MenuItem as={Link} to="account/settings" icon={<FiSettings />}>
                Settings
              </MenuItem>
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
          <Nav.Item as={Link} to="/" icon={RiDashboard3Line}>
            Dashboard
          </Nav.Item>
          <Nav.SubMenu icon={BiSupport} label="Support">
            <Nav.Item as={Link} to="/incidents">
              Incidents
            </Nav.Item>
            <Nav.Item as={Link} to="/services">
              Services
            </Nav.Item>
            <Nav.Item>Networks</Nav.Item>
          </Nav.SubMenu>
          <Nav.SubMenu icon={BiDollar} label="Billing">
            <Nav.Item as={Link} to="/invoices">
              Invoices
            </Nav.Item>
            <Nav.Item as={Link} to="/credit-notes">
              Credit Notes
            </Nav.Item>
            <Nav.Item as={Link} to="/payments">
              Payments
            </Nav.Item>
            <Nav.Item>Statements</Nav.Item>
            <Nav.Item as={Link} to="/bank-details">
              Bank Details
            </Nav.Item>
            <Nav.Item>Orders On Hold</Nav.Item>
            <Nav.Item as={Link} to="/bandwidth-usage">
              Bandwidth Usage
            </Nav.Item>
          </Nav.SubMenu>
          <Nav.Item icon={BiPhoneCall}>VOIP</Nav.Item>
          <Nav.SubMenu icon={BiBasket} label="Ordering">
            <Nav.Item as={Link} to="/orders">
              Orders
            </Nav.Item>
            <Nav.Item>Products</Nav.Item>
          </Nav.SubMenu>
          <Divider borderColor="brand.500" my={2} />
          <Nav.SubMenu icon={FiUsers} label="User Management">
            <Nav.Item as={Link} to="/users">
              Users
            </Nav.Item>
            <Nav.Item as={Link} to="/roles">
              Roles
            </Nav.Item>
          </Nav.SubMenu>
          <Nav.Item as={Link} to="/help" icon={FiHelpCircle}>
            Help & Support
          </Nav.Item>
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
