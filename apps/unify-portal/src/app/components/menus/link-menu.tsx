import { Link } from "react-router-dom"
import { FC } from "react"
import {
  ButtonProps,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Menu,
} from "@chakra-ui/react"

export type LinkMenuOwnProps = {
  items: {
    title: string
    url: string
  }[]
}

export type LinkMenuProps = ButtonProps & LinkMenuOwnProps

export const LinkMenu: FC<LinkMenuProps> = ({ children, items, ...props }) => (
  <Menu>
    <MenuButton as={Button} {...props}>
      {children}
    </MenuButton>
    <MenuList fontSize="md">
      {items.map((item, index) => (
        <MenuItem key={index} as={Link} to={item.url}>
          {item.title}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
)

LinkMenu.defaultProps = {
  mr: 4,
}
