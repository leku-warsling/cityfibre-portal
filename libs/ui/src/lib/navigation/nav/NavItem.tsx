import { FC } from "react"
import { chakra, useStyles, Icon, HTMLChakraProps } from "@chakra-ui/react"
import { dataAttr } from "@chakra-ui/utils"
import { IconType } from "react-icons"

export type NavItemOwnProps = {
  icon?: IconType
  size?: "sm" | "md" | "lg"
  isActive?: boolean
}

export type NavItemProps = HTMLChakraProps<"a"> & NavItemOwnProps

const NavItem: FC<NavItemProps> = ({
  children,
  isActive,
  icon,
  ...props
}) => {
  const styles = useStyles()

  return (
    <chakra.a __css={styles["item"]} data-active={dataAttr(isActive)} {...props}>
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