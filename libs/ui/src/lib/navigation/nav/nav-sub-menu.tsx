import { cloneElement, FC, ReactElement, useContext, useState } from "react"
import {
  chakra,
  useStyles,
  Icon,
  HTMLChakraProps,
  BoxProps,
  Collapse,
  HStack,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  PopoverArrow,
  PopoverBody,
  StylesProvider,
  PopoverHeader,
} from "@chakra-ui/react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { IconType } from "react-icons"
import not from "ramda/es/not"
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
            bg="whiteAlpha.100"
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
        <PopoverContent ml={4} bg="brand.800" borderColor="brand.800">
          <PopoverArrow bg="brand.800" borderColor="brand.800" color="white" />
          <PopoverHeader
            border="none"
            color="whiteAlpha.700"
            letterSpacing="widest"
            pt={5}
            pl={6}
            fontWeight={800}
            fontSize="xs"
            textTransform="uppercase"
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
                    fontSize: "14px",
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
