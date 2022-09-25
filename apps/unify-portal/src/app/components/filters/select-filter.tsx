import { ChevronDownIcon } from "@chakra-ui/icons"
import { FC } from "react"
import { MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/menu"
import { ButtonProps, Button } from "@chakra-ui/button"
import { Portal } from "@chakra-ui/portal"

export type SelectFilterOption = { label: string; value?: string }

export type SelectFilterOwnProps = {
  options: SelectFilterOption[]
  onSelect: (value?: string) => void
}

export type SelectFilterProps = Omit<ButtonProps, "onSelect"> &
  SelectFilterOwnProps

export const SelectFilter: FC<SelectFilterProps> = ({
  rightIcon = <ChevronDownIcon fontSize="xl" />,
  variant = "outline",
  onSelect,
  options,
  children,
  ...props
}) => {
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
        <MenuList zIndex={10}>
          {options.map(({ label, value }, index) => (
            <MenuItem key={index} onClick={() => onSelect(value)}>
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  )
}
