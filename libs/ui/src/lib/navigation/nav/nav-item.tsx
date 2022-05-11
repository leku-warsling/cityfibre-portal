import { FC, useContext } from "react"
import {
  chakra,
  useStyles,
  Icon,
  HTMLChakraProps,
  Tooltip,
} from "@chakra-ui/react"
import { NavContext } from "./nav"
import { dataAttr } from "@chakra-ui/utils"
import { IconType } from "react-icons"
import ConditionalWrapper from "../../wrappers/conditional-wrapper"

export type NavItemOwnProps = {
  icon?: IconType
  size?: "sm" | "md" | "lg"
  isActive?: boolean
  level?: number
}

export type NavItemProps = HTMLChakraProps<"a"> & NavItemOwnProps

const NavItem: FC<NavItemProps> = ({
  children,
  isActive,
  icon,
  level = 0,
  ...props
}) => {
  const { isCollapsed } = useContext(NavContext)
  const styles = useStyles()
  const shouldCollapse = isCollapsed && level < 1

  const label = (
    <chakra.span
      display="flex"
      alignItems="center"
      flexGrow={1}
      justifyContent="space-between"
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
          colorScheme="brand"
          label={label}
          placement="right"
          hasArrow
          ml={4}
          py={3}
          px={6}
          fontWeight="semibold"
          shouldWrapChildren
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
