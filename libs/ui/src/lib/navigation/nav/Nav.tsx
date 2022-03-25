import { FC, createContext } from 'react';
import {
  chakra,
  FlexProps,
  StylesProvider,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import NavItem from './nav-item';
import NavSubMenu from './nav-sub-menu';

export type NavProps = FlexProps & {
  variant?: string;
  orientation?: 'vertical' | 'horizontal';
  isCollapsed?: boolean;
  activeIndex?: number | string;
};

export type NavComponent = FC<NavProps> & {
  Item: typeof NavItem;
  SubMenu: typeof NavSubMenu;
};

export type NavContextProps = {
  isCollapsed: boolean;
  activeIndex: string | number;
};

export const NavContext = createContext<NavContextProps>(null!);

const Nav: NavComponent = ({
  variant,
  orientation,
  isCollapsed = false,
  activeIndex = 0,
  children,
  ...props
}) => {
  const styles = useMultiStyleConfig('Nav', {
    variant,
    isCollapsed,
    orientation,
  });

  return (
    <chakra.div as="nav" __css={styles['nav']} role="navigation" {...props}>
      <NavContext.Provider value={{ isCollapsed, activeIndex }}>
        <StylesProvider value={styles}>{children}</StylesProvider>
      </NavContext.Provider>
    </chakra.div>
  );
};

Nav.defaultProps = {
  direction: 'column',
  role: 'navigation',
  as: 'nav',
};

Nav.Item = NavItem;
Nav.SubMenu = NavSubMenu;

export default Nav;
