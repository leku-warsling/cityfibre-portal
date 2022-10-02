import { Checkbox } from "@chakra-ui/checkbox"
import { isNilOrEmpty } from "ramda-adjunct"
import identity from "ramda/es/identity"
import prepend from "ramda/es/prepend"
import { forwardRef } from "react"
import { TableAction } from "./overflow-menu"

const hasBatchableActions = (a: TableAction[]) =>
  a.filter((x) => x.isBatchable).length > 0

export const RowSelection = forwardRef<HTMLInputElement, any>(
  ({ indeterminate, checked, ...rest }, ref) => (
    <Checkbox
      isIndeterminate={indeterminate}
      colorScheme="primary"
      isChecked={checked}
      size="lg"
      ref={ref}
      {...rest}
    />
  )
)

export const withRowSelection = (actions: TableAction[]) => {
  if (isNilOrEmpty(actions) || !hasBatchableActions(actions)) {
    return identity
  }
  return prepend({
    id: "selection",
    Header: (col: any) => (
      <RowSelection {...col.getToggleAllRowsSelectedProps()} />
    ),
    Cell: ({ row }: any) => (
      <RowSelection {...row.getToggleRowSelectedProps()} />
    ),
  })
}
