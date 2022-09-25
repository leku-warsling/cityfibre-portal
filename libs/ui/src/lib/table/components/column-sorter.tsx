import { ChevronDownIcon } from "@chakra-ui/icons"
import { FC } from "react"
import { MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/menu"
import { ButtonProps, Button } from "@chakra-ui/button"
import { Portal } from "@chakra-ui/portal"

export type ColumnSorterOption = { label: string; value?: string }

export type ColumnSorterOwnProps = {
  options: ColumnSorterOption[]
  onSelect: (value?: any) => void
}

export type ColumnSorterProps = Omit<ButtonProps, "onSelect"> &
  ColumnSorterOwnProps

export const ColumnSorter: FC<ColumnSorterProps> = ({
  rightIcon = <ChevronDownIcon fontSize="xl" />,
  variant = "outline",
  zIndex = 10,
  onSelect,
  options,
  children,
  ...props
}) => {
  const items = options.map(({ label, value }, index) => (
    <MenuItem key={index} onClick={() => onSelect(value)}>
      {label}
    </MenuItem>
  ))

  return (
    <Menu>
      <MenuButton
        rightIcon={rightIcon}
        variant={variant}
        as={Button}
        {...props}
      >
        {children}
      </MenuButton>
      <Portal>
        <MenuList zIndex={zIndex}>{items}</MenuList>
      </Portal>
    </Menu>
  )
}
