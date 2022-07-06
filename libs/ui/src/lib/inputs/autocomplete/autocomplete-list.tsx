import { forwardRef, memo } from "react"
import { List } from "@chakra-ui/react"
import { AutocompleteListProps } from "./types"

const AutocompleteList = forwardRef<HTMLUListElement, AutocompleteListProps>(
  ({ isOpen, children, ...props }, ref) => (
    <List display={isOpen ? undefined : "none"} {...props} ref={ref}>
      {isOpen && children}
    </List>
  )
)

AutocompleteList.defaultProps = {
  border: "1px solid #ddd",
  overflowY: "auto",
  boxShadow: "lg",
  pos: "absolute",
  maxH: "250px",
  zIndex: 1000,
  bg: "white",
  top: "100%",
  rounded: 4,
  w: "100%",
  mt: "4px",
}

export default memo(AutocompleteList)
