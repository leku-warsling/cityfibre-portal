import { ChevronDownIcon } from "@chakra-ui/icons"
import { FC } from "react"
import {
  ButtonProps,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Portal,
  Menu,
} from "@chakra-ui/react"

export type ColumnFilterOption = { label: string; value?: string }

export type ColumnFilterOwnProps = {
  options: ColumnFilterOption[]
  onSelect: (value?: any) => void
}

export type ColumnFilterProps = Omit<ButtonProps, "onSelect"> &
  ColumnFilterOwnProps

export const ColumnFilter: FC<ColumnFilterProps> = ({
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
