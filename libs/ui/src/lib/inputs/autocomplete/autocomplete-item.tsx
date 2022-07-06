import { forwardRef, memo } from "react"
import { ListItem } from "@chakra-ui/react"
import { AutocompleteItemProps } from "./types"

const AutocompleteItem = forwardRef<HTMLLIElement, AutocompleteItemProps>(
  ({ isActive, children, ...props }, ref) => {
    return (
      <ListItem bg={isActive ? "teal.100" : undefined} {...props} ref={ref}>
        {children}
      </ListItem>
    )
  }
)

AutocompleteItem.defaultProps = {
  transition: "background-color 220ms, color 220ms",
  cursor: "pointer",
  px: 4,
  py: 2,
}

export default memo(AutocompleteItem)
