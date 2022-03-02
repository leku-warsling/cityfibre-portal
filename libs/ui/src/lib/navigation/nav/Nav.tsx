import { FC } from "react"
import { 
  chakra,
  FlexProps,
  StylesProvider,
  useMultiStyleConfig,
  useStyles, 
} from "@chakra-ui/react"
import NavItem from "./NavItem"
import NavSubMenu from "./NavSubMenu"

type NavProps = FlexProps & {
  size?: "sm" | "md" | "lg"
  variant?: string,
  orientation?: "vertical" | "horizontal"
}

type NavComponent = FC<NavProps> & {
  Item: typeof NavItem
  SubMenu: typeof NavSubMenu
}

const Nav: NavComponent = ({ 
  size,
  variant,
  orientation,
  children,
  ...props
}) => {
  const styles = useMultiStyleConfig('Nav', { size, variant })
  
  return (
    <chakra.div
      as="nav" 
      __css={styles["nav"]} 
      role="navigation"
      {...props}
    >
      <StylesProvider value={styles}>
        {children}
      </StylesProvider>
    </chakra.div>
  )
}

Nav.defaultProps = {
  direction: "column",
  role: "navigation",
  as: "nav",
}

Nav.Item = NavItem
Nav.SubMenu = NavSubMenu

export default Nav