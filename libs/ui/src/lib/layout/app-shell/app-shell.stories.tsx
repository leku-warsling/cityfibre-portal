import { Story, Meta } from "@storybook/react"
import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Text,
  Divider,
  Badge,
  Flex,
} from "@chakra-ui/react"
// import { SearchInput } from "../../inputs"
import { AppShell, AppShellProps } from "./app-shell"
import { AppBar } from "../appbar/AppBar"
import { Sidebar } from "../sidebar"
import Nav from "../../navigation/nav"
import { Page } from "../page"
import {
  FiMenu,
  FiSettings,
  FiUsers,
  FiInbox,
  FiPhone,
  FiHelpCircle,
  FiPlus,
  FiMoreVertical,
  FiDownload,
} from "react-icons/fi"
import { BiHome, BiDollarCircle, BiBasket } from "react-icons/bi"
import { RiDashboard3Line } from "react-icons/ri"
import { PartnersIcon, LogoIcon } from "../../assets"

export default {
  title: "Components / Layout / AppShell",
  component: AppBar,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="1400px" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<AppShellProps>

const ExampleAppBar = () => (
  <AppBar pl={4} pr={6} py={3} bgColor="white">
    <AppBar.Section>
      <IconButton
        variant="ghost"
        colorScheme="gray"
        aria-label="Toggle menu"
        icon={<FiMenu fontSize="20px" />}
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
)

const ExampleSidebar = () => {
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
    <Sidebar.Section fontWeight="semibold" color="#718589" gap={1} mt="auto">
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
          <LogoIcon height="32" />
        </Flex>
      )}
    </Sidebar.Section>
  )

  const content = (
    <Sidebar.Section flexGrow={1}>
      <Nav>
        <Nav.Item icon={FiInbox}>
          <span>Inbox</span>
          <Badge
            variant="primary"
            colorScheme="primary"
            fontSize="14px"
            px="10px"
            py="4px"
            rounded="full"
          >
            3
          </Badge>
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
    </Sidebar.Section>
  )

  return (
    <Sidebar isOpen onClose={() => null} height="900px" overflowY="auto">
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
}

const actions = [
  <IconButton
    key={0}
    aria-label="Download"
    size="sm"
    variant="ghost"
    _hover={{ bg: "gray.200" }}
    icon={<FiDownload />}
  />,
  // <IconButton
  //   key={0}
  //   aria-label="List view"
  //   size="sm"
  //   variant="ghost"
  //   _hover={{ bg: 'gray.200' }}
  //   icon={<FiList />}
  // />,
  // <IconButton
  //   key={0}
  //   aria-label="Grid view"
  //   size="sm"
  //   variant="ghost"
  //   _hover={{ bg: 'gray.200' }}
  //   icon={<FiGrid />}
  // />,
  // <IconButton
  //   key={0}
  //   aria-label="Settings"
  //   size="sm"
  //   variant="ghost"
  //   _hover={{ bg: 'gray.200' }}
  //   icon={<FiSettings />}
  // />,
  <IconButton
    key={0}
    aria-label="Add Invoice"
    size="sm"
    variant="ghost"
    _hover={{ bg: "gray.200" }}
    icon={<FiPlus />}
  />,
  <IconButton
    key={0}
    aria-label="Menu"
    size="sm"
    variant="ghost"
    _hover={{ bg: "gray.200" }}
    icon={<FiMoreVertical />}
  />,
]

const Template: Story<AppShellProps> = (args) => {
  const breadcrumb = [
    {
      path: "/billing",
      name: "Billing",
    },
    {
      path: "/billing/invoices",
      name: "Invoices",
    },
  ]

  return (
    <AppShell
      {...args}
      header={<ExampleAppBar />}
      sidebar={<ExampleSidebar />}
      boxShadow="2xl"
    >
      <Page>
        <Page.Header breadcrumb={breadcrumb} actions={actions}>
          Invoices
        </Page.Header>
      </Page>
    </AppShell>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  h: "900px",
  maxW: "1200px",
}
