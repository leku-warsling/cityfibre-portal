import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover"
import {
  chakra,
  HTMLChakraProps,
  StylesProvider,
  useStyles,
} from "@chakra-ui/system"
import { Portal } from "@chakra-ui/portal"
import { Icon } from "@chakra-ui/icon"
import { HStack } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import not from "ramda/es/not"
import { cloneElement, FC, ReactElement, useContext, useState } from "react"
import { IconType } from "react-icons"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { NavContext } from "./nav"

export type NavSubMenuOwnProps = {
  label: string
  icon?: IconType
  level?: number
  children: ReactElement[]
}

export type NavSubMenuProps = HTMLChakraProps<"button"> & NavSubMenuOwnProps

const NavSubMenu: FC<NavSubMenuProps> = ({
  label,
  children,
  level = 0,
  icon,
  ...props
}) => {
  const { isCollapsed } = useContext(NavContext)
  const [show, setShow] = useState(false)
  const styles = useStyles()
  const Indicator = show ? FiChevronUp : FiChevronDown

  const trigger = (
    <chakra.button
      __css={styles["item"]}
      onClick={() => setShow(not)}
      width="100%"
      {...props}
    >
      {!!icon && <Icon as={icon} fontSize="xl" flex="0 auto" />}
      <HStack hidden={isCollapsed} flexGrow={1} justifyContent="space-between">
        <span>{label}</span>
        <Indicator fontSize="20px" />
      </HStack>
    </chakra.button>
  )

  if (!isCollapsed) {
    return (
      <chakra.div>
        {trigger}
        <Collapse in={show}>
          <chakra.div
            __css={styles["nav"]}
            p={3}
            bg="blackAlpha.50"
            rounded={5}
          >
            {children.map((child, i) =>
              cloneElement(child, {
                ...child.props,
                key: child.key ?? i,
                fontSize: "14px",
                py: 1.5,
                px: 3,
              })
            )}
          </chakra.div>
        </Collapse>
      </chakra.div>
    )
  }

  return (
    <Popover trigger="hover" placement="right">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <Portal>
        <PopoverContent
          ml={4}
          bg="primary.500"
          borderColor="primary.500"
          boxShadow="lg"
        >
          <PopoverArrow
            bg="primary.500"
            borderColor="primary.500"
            color="white"
          />
          <PopoverHeader
            textTransform="uppercase"
            letterSpacing="widest"
            color="secondary.500"
            fontWeight={800}
            fontSize="xs"
            border="none"
            pt={5}
            pl={6}
          >
            {label}
          </PopoverHeader>
          <PopoverBody px="4" pt={0} pb={4}>
            <StylesProvider value={styles}>
              <chakra.div __css={styles["nav"]} w="100%" color="white">
                {children.map((child, i) =>
                  cloneElement(child, {
                    ...child.props,
                    key: child.key ?? i,
                    fontSize: "sm",
                    level: level + 1,
                  })
                )}
              </chakra.div>
            </StylesProvider>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default NavSubMenu
