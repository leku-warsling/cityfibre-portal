import ConditionalWrapper from "../../wrappers/conditional-wrapper"
import { dataAttr } from "@chakra-ui/utils"
import { IconType } from "react-icons"
import { useContext } from "react"
import { NavContext } from "./nav"
import { ChakraComponent, useStyles, chakra } from "@chakra-ui/system"
import { Tooltip } from "@chakra-ui/tooltip"
import { Icon } from "@chakra-ui/icon"

export type NavItemProps = {
  size?: "sm" | "md" | "lg"
  isActive?: boolean
  icon?: IconType
  level?: number
}

export type NavItemComponent = ChakraComponent<"a", NavItemProps>

const NavItem: NavItemComponent = ({
  level = 0,
  children,
  isActive,
  icon,
  ...props
}) => {
  const { isCollapsed } = useContext(NavContext)
  const styles = useStyles()
  const shouldCollapse = isCollapsed && level < 1

  const label = (
    <chakra.span
      justifyContent="space-between"
      alignItems="center"
      display="flex"
      flexGrow={1}
      minW="150px"
    >
      {children}
    </chakra.span>
  )

  return (
    <ConditionalWrapper
      condition={shouldCollapse}
      wrapper={(content) => (
        <Tooltip
          fontWeight="semibold"
          bgColor="primary.500"
          color="black"
          shouldWrapChildren
          placement="right"
          label={label}
          hasArrow
          ml={4}
          py={3}
          px={6}
        >
          {content}
        </Tooltip>
      )}
    >
      <chakra.a
        __css={styles["item"]}
        data-active={dataAttr(isActive)}
        {...props}
      >
        {!!icon && <Icon as={icon} fontSize="xl" flex="0 auto" />}
        {!shouldCollapse && label}
      </chakra.a>
    </ConditionalWrapper>
  )
}

NavItem.defaultProps = {
  width: "100%",
  size: "md",
}

export default NavItem
