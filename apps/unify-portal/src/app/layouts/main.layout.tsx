import { RiDashboard3Line } from "react-icons/ri"
import { PageState } from "../hooks/use-page.hook"
import { Link, Outlet } from "react-router-dom"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { SearchIcon } from "@chakra-ui/icons"
import { useAuth } from "../providers/auth.provider"
import { useState } from "react"
import { AppShell, Sidebar, AppBar } from "@ui/lib/layout"
import { PartnersIcon, LogoIcon } from "@ui/lib/assets"
import { Nav } from "@ui/lib/navigation"
import { IconButton } from "@chakra-ui/button"
import { Text, Divider, Badge, Box, Flex } from "@chakra-ui/layout"
import {
  MenuDivider,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/menu"
import { InputLeftElement, InputGroup, Input } from "@chakra-ui/input"
import { Avatar } from "@chakra-ui/avatar"
import { Icon } from "@chakra-ui/icon"
import { Portal } from "@chakra-ui/portal"
import { useDisclosure } from "@chakra-ui/hooks"
import { Hide, Show } from "@chakra-ui/media-query"
import {
  FiHelpCircle,
  FiSettings,
  FiLogOut,
  FiUsers,
  FiInbox,
} from "react-icons/fi"
import {
  BiBasket,
  BiBell,
  BiBookReader,
  BiCommentDetail,
  BiDollar,
  BiErrorCircle,
  BiPhoneCall,
  BiSupport,
} from "react-icons/bi"
import { TutorialModal } from "./components"
import { useFlags } from "launchdarkly-react-client-sdk"

const UserMenu = () => {
  const { logout } = useAuth()
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar bg="gray.200" size="sm" name="Luke Rawlings" />
        </MenuButton>
        <MenuList zIndex={100}>
          <MenuItem as={Link} to="account/settings" icon={<FiSettings />}>
            Settings
          </MenuItem>
          <MenuItem onClick={onOpen} icon={<BiCommentDetail />}>
            Tutorials
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<FiLogOut />} onClick={logout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
      {isOpen && <TutorialModal isOpen={isOpen} onClose={onClose} />}
    </>
  )
}
const MainLayout = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [page, setPage] = useState<PageState>({})
  const { showIspHub } = useFlags()

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
        <Text
          fontSize="2xl"
          fontWeight={800}
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {page?.title}
        </Text>
      </AppBar.Section>
      <Hide below="lg">
        <AppBar.Section flexGrow={1} justifyContent="center">
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
      </Hide>
      <AppBar.Section marginLeft="auto">
        <Show below="lg">
          <AppBar.Item>
            <IconButton
              aria-label="Site Search"
              colorScheme="gray"
              icon={<SearchIcon />}
              variant="ghost"
            />
          </AppBar.Item>
        </Show>
        <AppBar.Item>
          <Menu>
            <MenuButton
              aria-label="Notifications"
              as={IconButton}
              variant="ghost"
              fontSize="lg"
              colorScheme="gray"
              icon={<BiBell />}
            />
            <Portal>
              <MenuList zIndex={100} p={4}>
                <MenuItem
                  as={Link}
                  to="incidents/INC0084093"
                  icon={<BiErrorCircle fontSize="24px" />}
                >
                  <Text fontSize="sm" fontWeight={600}>
                    Support
                  </Text>
                  <Text fontSize="xs">Incident INC0084093 updated</Text>
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="incidents/INC0084093"
                  icon={<BiErrorCircle fontSize="24px" />}
                >
                  <Text fontSize="sm" fontWeight={600}>
                    Support
                  </Text>
                  <Text fontSize="xs">Incident INC0084093 updated</Text>
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="incidents/INC0084093"
                  icon={<BiErrorCircle fontSize="24px" />}
                >
                  <Text fontSize="sm" fontWeight={600}>
                    Support
                  </Text>
                  <Text fontSize="xs">Incident INC0084093 updated</Text>
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="incidents/INC0084093"
                  icon={<BiErrorCircle fontSize="24px" />}
                >
                  <Text fontSize="sm" fontWeight={600}>
                    Support
                  </Text>
                  <Text fontSize="xs">Incident INC0084093 updated</Text>
                </MenuItem>
                <MenuItem
                  as={Link}
                  to="incidents/INC0084093"
                  icon={<BiErrorCircle fontSize="24px" />}
                >
                  <Text fontSize="sm" fontWeight={600}>
                    Support
                  </Text>
                  <Text fontSize="xs">Incident INC0084093 updated</Text>
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </AppBar.Item>
        <AppBar.Item ml={2}>
          <UserMenu />
        </AppBar.Item>
      </AppBar.Section>
    </AppBar>
  )

  const brand = (
    <Box bgColor="secondary.500" rounded={5} px={3} py={2}>
      <PartnersIcon fontSize="xl" color="black" />
    </Box>
  )

  const footer = (
    <Sidebar.Section fontWeight="semibold" color="secondary.500" gap={1}>
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
          <LogoIcon fontSize="40px" />
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
              color="black"
              colorScheme="secondary"
              fontSize="14px"
              px="10px"
              py="4px"
              rounded="full"
            >
              3
            </Badge>
          </Nav.Item>
          <Divider borderColor="black" my="1" />
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
            <Nav.Item as={Link} to="/networks">
              Networks
            </Nav.Item>
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
            <Nav.Item as={Link} to="/orders/products">
              Products
            </Nav.Item>
          </Nav.SubMenu>
          {showIspHub && (
            <Nav.Item as={Link} to="/" icon={BiBookReader}>
              ISP Hub
            </Nav.Item>
          )}
          <Divider borderColor="black" my={2} />
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
    <AppShell
      height={{ base: "auto", height: "100vh" }}
      sidebar={sidebar}
      header={header}
    >
      <Outlet context={{ setPage }} />
    </AppShell>
  )
}

export default MainLayout
