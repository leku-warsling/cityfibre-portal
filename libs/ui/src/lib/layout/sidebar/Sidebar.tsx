import { FC, ReactNode } from 'react';
import {
  chakra,
  useStyleConfig,
  HTMLChakraProps,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { equals } from 'ramda';

export type SidebarProps = HTMLChakraProps<'aside'> & {
  header?: ReactNode;
  variant?: 'slim' | 'overlay' | 'static';
  colorScheme?: string;
  onClose: () => void;
  isOpen: boolean;
  footer?: ReactNode;
};

const isOverlay = equals<any>('overlay');

const Sidebar: FC<SidebarProps> = ({
  header,
  variant,
  onClose,
  isOpen,
  footer,
  colorScheme,
  children,
  ...props
}) => {
  const styles = useStyleConfig('Sidebar', { variant });

  if (isOverlay(variant)) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <chakra.aside __css={styles} {...props}>
      <chakra.div p={8}>
        {header}
      </chakra.div>
      <chakra.div flexGrow={1} width="100%" px={6} py={8}>
        {children}
      </chakra.div>
      <chakra.div p={8} w="100%">
        {footer}
      </chakra.div>
    </chakra.aside>
  );
};

Sidebar.defaultProps = {
  height: '100vh',
  width: "360px",
};

export default Sidebar;
