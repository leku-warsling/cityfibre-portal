import { ListItem, ListItemProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface DropdownItemProps extends ListItemProps {
  isActive?: boolean
}

export const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(
  ({ isActive, children, ...props }, ref) => {
    return (
      <ListItem
        _hover={{ bgColor: "gray.200" }}
        bgColor={isActive ? "teal.100" : undefined}
        {...props}
        ref={ref}
      >
        {children}
      </ListItem>
    )
  }
)

DropdownItem.defaultProps = {
  transition: "background-color 220ms, color 220ms",
  cursor: "pointer",
  rounded: 4,
  px: 4,
  py: 2,
}
