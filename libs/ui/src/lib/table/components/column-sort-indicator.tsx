import { Icon, Stack } from "@chakra-ui/react"
import pick from "ramda/es/pick"
import whereEq from "ramda/es/whereEq"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import { UseSortByColumnProps } from "react-table"

export type ColumnSortIndicatorProps<D extends object> = Pick<
  UseSortByColumnProps<D>,
  "canSort" | "isSorted" | "isSortedDesc"
>

export const getSortIndicatorProps = pick([
  "canSort",
  "isSorted",
  "isSortedDesc",
])

const isDescending = whereEq({
  isSorted: true,
  isSortedDesc: true,
})

const isAscending = whereEq({
  isSorted: true,
  isSortedDesc: false,
})

export const ColumnSortIndicator = <D extends object>(
  props: ColumnSortIndicatorProps<D>
) => {
  if (!props.canSort) return null
  return (
    <Stack
      alignItems="center"
      direction="column"
      fontSize="11px"
      spacing="-6px"
    >
      <Icon as={BiCaretUp} opacity={isAscending(props) ? 1 : 0.5} />
      <Icon as={BiCaretDown} opacity={isDescending(props) ? 1 : 0.5} />
    </Stack>
  )
}
