import { FC } from "react"
import { chakra, useStyles, Icon, HTMLChakraProps } from "@chakra-ui/react"
import { IconType } from "react-icons"

export type NavItemOwnProps = {
  icon?: IconType
  size?: "sm" | "md" | "lg" 
}

export type NavItemProps = HTMLChakraProps<"a"> & NavItemOwnProps

const NavItem: FC<NavItemProps> = ({
  children,
  icon,
  ...props
}) => {
  const styles = useStyles()

  return (
    <chakra.a __css={styles["item"]} {...props}>
      {!!icon && <Icon as={icon} fontSize="22px"/>}
      <chakra.span flexGrow={1}>
        {children}
      </chakra.span>
    </chakra.a>
  )
}


NavItem.defaultProps = {
  width: "100%",
  size: "md",
}

export default NavItem