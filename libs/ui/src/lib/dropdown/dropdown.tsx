import { FC, ReactElement, RefObject } from "react"
import { ListProps, List } from "@chakra-ui/layout"
import { SystemProps } from "@chakra-ui/system"
import { Portal } from "@chakra-ui/portal"
import {
  PopoverAnchor,
  PopoverContent,
  PopoverBody,
  Popover,
} from "@chakra-ui/popover"
import { DropdownItem } from "./dropdown-item"

export type DropdownProps = {
  initialFocusRef?: RefObject<HTMLInputElement>
  overlay?: ReactElement<ListProps>
  spacing?: SystemProps["margin"]
  withinPortal?: boolean
  onClose: () => void
  onOpen: () => void
  isOpen: boolean
}

export type DropdownComponent = FC<DropdownProps> & {
  Menu: typeof List
  Item: typeof DropdownItem
}

export const Dropdown: DropdownComponent = ({
  withinPortal = false,
  initialFocusRef,
  children,
  overlay,
  onClose,
  onOpen,
  isOpen,
}) => {
  const content = (
    <PopoverContent width="100%" maxHeight="250px" overflowY="auto">
      <PopoverBody>{overlay}</PopoverBody>
    </PopoverContent>
  )

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      onClose={onClose}
      isOpen={isOpen}
      onOpen={onOpen}
      matchWidth
      isLazy
    >
      <PopoverAnchor>{children}</PopoverAnchor>
      {withinPortal ? <Portal>{content}</Portal> : content}
    </Popover>
  )
}

Dropdown.Menu = List
Dropdown.Item = DropdownItem
