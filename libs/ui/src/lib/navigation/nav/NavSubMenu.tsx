import { cloneElement, FC, ReactElement, useState } from 'react';
import {
  chakra,
  useStyles,
  Icon,
  HTMLChakraProps,
  BoxProps,
  Collapse,
  HStack,
} from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { not } from 'ramda';

export type NavSubMenuOwnProps = {
  label: string;
  icon?: IconType;
  children: ReactElement[];
};

export type NavSubMenuProps = HTMLChakraProps<'button'> & NavSubMenuOwnProps;

const NavSubMenu: FC<NavSubMenuProps> = ({
  label,
  children,
  icon,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const styles = useStyles();
  const Indicator = show ? FiChevronUp : FiChevronDown;

  return (
    <chakra.div>
      <chakra.button
        __css={styles['item']}
        onClick={() => setShow(not)}
        {...props}
      >
        {!!icon && <Icon as={icon} fontSize="22px" />}
        <HStack flexGrow={1} justifyContent="space-between">
          <span>{label}</span>
          <Indicator fontSize="20px" />
        </HStack>
      </chakra.button>
      <Collapse in={show}>
        <chakra.div __css={styles['nav']} p={3} bg="whiteAlpha.100" rounded={5}>
          {children.map((child) =>
            cloneElement(child, {
              ...child.props,
              fontSize: '14px',
              py: 1.5,
              px: 3,
            })
          )}
        </chakra.div>
      </Collapse>
    </chakra.div>
  );
};

export default NavSubMenu;
