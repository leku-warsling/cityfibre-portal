import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { isNilOrEmpty } from "ramda-adjunct"
import append from "ramda/es/append"
import identity from "ramda/es/identity"
import { FC, ReactNode } from "react"
import { IconType } from "react-icons"
import { FiMoreVertical } from "react-icons/fi"
import { confirm, ConfirmProps } from "../../overlay"

export type TableAction = {
  confirmConfig?: Omit<ConfirmProps, "onConfirm">
  handler: (data: any) => void
  isBatchable?: boolean
  icon?: IconType
  label: ReactNode
}

type OverflowMenuItemProps = Omit<TableAction, "handler" | "label"> & {
  onClick: () => void
}

const OverflowMenuItem: FC<OverflowMenuItemProps> = ({
  confirmConfig,
  icon: Icon,
  onClick,
  children,
}) => {
  const _onClick = !confirmConfig
    ? onClick
    : () =>
        confirm({
          title: confirmConfig.title,
          description: confirmConfig.description,
          onConfirm: onClick,
        })

  return (
    <MenuItem icon={Icon && <Icon fontSize="18px" />} onClick={_onClick}>
      {children}
    </MenuItem>
  )
}

export type OverflowMenuProps = {
  row: Record<string, string>
  actions: TableAction[]
}

export const OverflowMenu = ({ actions, row }: OverflowMenuProps) => (
  <Menu>
    <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="ghost" />
    <MenuList>
      {actions.map(({ handler, label, ...props }, idx) => (
        <OverflowMenuItem onClick={() => handler(row)} key={idx} {...props}>
          {label}
        </OverflowMenuItem>
      ))}
    </MenuList>
  </Menu>
)

export const withOverflowMenu = (actions: TableAction[]) => {
  if (isNilOrEmpty(actions)) return identity
  return append({
    id: "actions",
    Header: "Actions",
    Cell: ({ row }: any) => <OverflowMenu row={row} actions={actions} />,
  })
}
