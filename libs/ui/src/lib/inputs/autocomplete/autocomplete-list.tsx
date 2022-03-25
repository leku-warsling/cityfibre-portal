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
  boxShadow: "lg",
  rounded: 4,
  border: "1px solid #ddd",
  pos: "absolute",
  zIndex: 1000,
  w: "100%",
  maxH: "250px",
  bg: "white",
  overflowY: "auto",
  top: "100%",
  mt: "4px"
}

export default memo(AutocompleteList)
