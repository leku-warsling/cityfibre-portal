import { Story, Meta } from '@storybook/react';
import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  chakra,
  IconButton,
  Text,
  useDisclosure,
  StyleProps,
} from '@chakra-ui/react';
import Sidebar, { SidebarProps } from './sidebar';
import Nav from '../../navigation/nav';
import {
  FiSettings,
  FiUsers,
  FiInbox,
  FiPhone,
  FiHelpCircle,
  FiMenu,
} from 'react-icons/fi';
import { BiHome, BiDollarCircle, BiBasket } from 'react-icons/bi';
import { RiDashboard3Line } from 'react-icons/ri';
import { ReactComponent as PartnersIcon } from '../../../assets/svg/partners.svg';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { IframeHTMLAttributes, useEffect, useState, FC } from 'react';
import { createPortal } from 'react-dom';

export default {
  title: 'Components / Layout / Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <Container maxW="5xl" mt="40px" p="0">
        {story()}
      </Container>
    ),
  ],
} as Meta<SidebarProps>;

const getStyles = () =>
  Array.from(document.querySelectorAll('style[data-emotion]'))
    .map(({ innerHTML }) => innerHTML)
    .join('');

type FrameProps = IframeHTMLAttributes<HTMLIFrameElement> & StyleProps;

const Frame: FC<FrameProps> = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const [styles, setStyles] = useState<string>(null!);

  useEffect(() => {
    setStyles(getStyles());
    const head = document.getElementsByTagName('head')[0];
    let observer = new MutationObserver((mutations, observer) => {
      setStyles(getStyles());
    });

    observer.observe(head, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      observer = null!;
    };
  }, []);

  const mountNode = contentRef?.contentDocument?.body;

  return (
    <chakra.iframe {...props} ref={setContentRef}>
      {mountNode &&
        createPortal(
          <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            {children}
          </>,
          mountNode
        )}
    </chakra.iframe>
  );
};

const Template: Story<SidebarProps> = (args) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const brand = (
    <Box bgColor="brand.500" rounded={5} p={2}>
      <PartnersIcon
        height="20"
        style={{
          filter: 'drop-shadow(0px 5px 2px rgb(0 0 0 / 0.1)',
        }}
      />
    </Box>
  );

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
  );

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
  );

  const header = (
    <Sidebar.Section fontSize="xl" fontWeight="semibold">
      {({ isCollapsed }) => (
        <Flex alignItems="center" gap={isCollapsed ? 0 : 3}>
          {brand}
          <Text hidden={isCollapsed}>Partner Suite</Text>
        </Flex>
      )}
    </Sidebar.Section>
  );

  return (
    <Frame width="100%" height="90vh" boxShadow="lg">
      <Flex
        width="100vw"
        height="100vh"
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
    </Frame>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
