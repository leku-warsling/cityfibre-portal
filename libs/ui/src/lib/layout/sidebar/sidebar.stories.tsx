import {
  Badge,
  Box,
  chakra,
  Container,
  Divider,
  Flex,
  IconButton,
  StyleProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { Meta, Story } from "@storybook/react"
import prop from "ramda/es/prop"
import { FC, IframeHTMLAttributes, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { BiBasket, BiDollarCircle, BiHome } from "react-icons/bi"
import {
  FiHelpCircle,
  FiInbox,
  FiMenu,
  FiPhone,
  FiSettings,
  FiUsers,
} from "react-icons/fi"
import { RiDashboard3Line } from "react-icons/ri"
import Logo from "../../assets/icons/logo.icon"
import PartnersIcon from "../../assets/icons/partners.icon"
import Nav from "../../navigation/nav"
import { Sidebar, SidebarProps } from "./sidebar"

export default {
  title: "Components / Layout / Sidebar",
  component: Sidebar,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="100vw" mt="16px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<SidebarProps>

const getStyleNodes = () => Array.from(document.getElementsByTagName("style"))

const getCSSRules = ({ sheet }: HTMLStyleElement) => {
  return sheet && Array.from<CSSRule>(sheet.cssRules).map(prop("cssText"))
}

const getAllStyles = (nodes: HTMLStyleElement[]) => {
  return nodes.flatMap(getCSSRules).join("\n")
}

type FrameProps = IframeHTMLAttributes<HTMLIFrameElement> & StyleProps

type UseStyleObserverState = {
  target: HTMLHeadElement
  defaultNodes?: HTMLStyleElement[]
  selector?: string
}

const addCSSRuleWatcher = (apply: ProxyHandler<any>["apply"]) => {
  return ({ sheet }: HTMLStyleElement) => {
    if (!sheet) return

    const proxy = new Proxy(sheet.insertRule, { apply })
    sheet.insertRule = proxy
  }
}

const useStyleObserver = ({ target }: UseStyleObserverState) => {
  const forceUpdate: () => void = useState<any>()[1].bind(null, {})
  const nodes = getStyleNodes()

  useEffect(() => {
    let observer = new MutationObserver((mutations) => {
      console.log("mutations:", mutations)
      setImmediate(forceUpdate)
    })

    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
    })

    setTimeout(forceUpdate, 100)

    return () => {
      observer.disconnect()
      observer = null!
    }
  }, [])

  const watcher = addCSSRuleWatcher((target, i, args) => {
    forceUpdate()
    return target.apply(i, args)
  })

  nodes.forEach(watcher)

  return getAllStyles(nodes)
}

const Frame: FC<FrameProps> = ({ children, ...props }) => {
  const [frameRef, setFrameRef] = useState<HTMLIFrameElement | null>(null)
  const styles = useStyleObserver({
    target: document.getElementsByTagName("head")[0],
  })

  const mountNode = frameRef?.contentDocument?.body

  return (
    <chakra.iframe {...props} ref={setFrameRef}>
      {mountNode &&
        createPortal(
          <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            {children}
          </>,
          mountNode
        )}
    </chakra.iframe>
  )
}

const Template: Story<SidebarProps> = (args) => {
  const { isOpen, onToggle, onClose } = useDisclosure()

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
          <Nav.Item isActive icon={RiDashboard3Line}>
            Dashboard
          </Nav.Item>
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
      )}
    </Sidebar.Section>
  )

  const header = (
    <Sidebar.Section fontSize="xl" fontWeight="semibold">
      {({ isCollapsed }) => (
        <Flex alignItems="center" gap={isCollapsed ? 0 : 3}>
          {brand}
          <Text hidden={isCollapsed}>Partner Suite</Text>
        </Flex>
      )}
    </Sidebar.Section>
  )

  return (
    <Flex
      width="90vw"
      height="100vh"
      shadow="lg"
      bgColor="white"
      position="relative"
    >
      <IconButton
        variant="ghost"
        onClick={onToggle}
        aria-label="Toggle menu"
        icon={<FiMenu />}
        position="absolute"
        top={4}
        right={4}
      />
      <Sidebar
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        height="100vh"
        overflowY="auto"
        position="absolute"
      >
        {header}
        {content}
        {footer}
      </Sidebar>
      <Box flexGrow={1} />
    </Flex>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
