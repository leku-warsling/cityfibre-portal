// @ts-nocheck

import { FC, forwardRef, Fragment, ReactNode, useEffect, useMemo } from "react"
import { confirm, ConfirmProps } from "../overlay/confirm"
import BeatLoader from "react-spinners/BeatLoader"
import { FiMoreVertical } from "react-icons/fi"
import { isNilOrEmpty } from "ramda-adjunct"
import prepend from "ramda/es/prepend"
import { IconType } from "react-icons"
import whereEq from "ramda/es/whereEq"
import repeat from "ramda/es/repeat"
import append from "ramda/es/append"
import omit from "ramda/es/omit"
import pick from "ramda/es/pick"
import { identity } from "ramda"
import { BiCaretDown, BiFilterAlt, BiCaretUp } from "react-icons/bi"
import { Pagination } from "../navigation/pagination"
import { flow } from "fp-ts/lib/function"
import {
  UseFiltersColumnProps,
  UseSortByColumnProps,
  UseSortByOptions,
  usePagination,
  TableOptions,
  useRowSelect,
  useExpanded,
  useFilters,
  useSortBy,
  useTable,
  Column,
} from "react-table"
import {
  TableProps as _TableProps,
  PopoverCloseButton,
  Table as ChakraTable,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  ButtonGroup,
  IconButton,
  MenuButton,
  StyleProps,
  MenuItem,
  MenuList,
  Skeleton,
  Checkbox,
  Popover,
  Spinner,
  chakra,
  Button,
  Select,
  HStack,
  Thead,
  Tbody,
  Stack,
  Menu,
  Icon,
  Text,
  Box,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react"

type Action = {
  confirmConfig?: Omit<ConfirmProps, "onConfirm">
  handler: (data: any) => void
  isBatchable?: boolean
  icon?: IconType
  label: ReactNode
}

export type Col = StyleProps & { span?: number }

type TableOwnProps<T extends object> = {
  onPaginate?: (value: { pageIndex: number; pageSize: number }) => void
  onSort?: (value: { id: string; desc?: boolean }) => void
  renderExpansion?: (data: any) => ReactNode
  footer?: (state: any) => ReactNode
  hiddenColumns?: string[]
  isExpandable?: boolean
  isFilterable?: boolean
  isSelectable?: boolean
  isPaginated?: boolean
  isFetching?: boolean
  isSortable?: boolean
  isLoading?: boolean
  isSticky?: boolean
  actions?: Action[]
  colgroup?: Col[]
}

type TableProps<T extends object> = _TableProps &
  TableOptions<T> &
  UseSortByOptions<T> &
  TableOwnProps<T> &
  Record<string, any>

type SortIndicatorProps<D extends object> = Pick<
  UseSortByColumnProps<D>,
  "canSort" | "isSorted" | "isSortedDesc"
>

const hasBatchableActions = (a: Action[]) =>
  a.filter((x) => x.isBatchable).length > 0

const getSortIndicatorProps = pick(["canSort", "isSorted", "isSortedDesc"])
const getColumnFilterProps = pick([
  "canFilter",
  "setFilter",
  "filterValue",
  "preFilteredRows",
  "filteredRows",
])

const isDescending = whereEq({
  isSorted: true,
  isSortedDesc: true,
})

const isAscending = whereEq({
  isSorted: true,
  isSortedDesc: false,
})

const stickyHeaderProps = {
  position: "sticky",
  bgColor: "#fff",
  zIndex: 10,
  top: 0,
  boxShadow:
    "0 1px 3px -1.5px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
} as const

export type GetTableHeadOpts = {
  isSticky: boolean
}

const getTableHeadProps = ({ isSticky }) => {
  return isSticky ? stickyHeaderProps : {}
}

const SortIndicator = <D extends object>(props: SortIndicatorProps<D>) => {
  if (!props.canSort) return null
  return (
    <Stack
      direction="column"
      fontSize="11px"
      spacing="-6px"
      alignItems="center"
    >
      <Icon as={BiCaretUp} opacity={isAscending(props) ? 1 : 0.5} />
      <Icon as={BiCaretDown} opacity={isDescending(props) ? 1 : 0.5} />
    </Stack>
  )
}

type ColumnFilter<D extends object> = UseFiltersColumnProps<D> & {
  render: (type: string) => ReactNode
}

const ColumnFilter = <D extends object>(props: ColumnFilter<D>) => {
  if (!props.canFilter) return null
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Filter column"
          colorScheme="blackAlpha"
          icon={<BiFilterAlt />}
          variant="ghost"
          ml="1"
          size="xs"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody p={4}>{props.render("Filter")}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

const renderSkeletonCell = <T extends object>(column: Column<T>) => ({
  ...column,
  Cell: <Skeleton height="20px" />,
})

const RowSelectCheckbox = forwardRef<any, any>(
  ({ indeterminate, checked, ...rest }, ref) => (
    <Checkbox
      isIndeterminate={indeterminate}
      colorScheme="brand"
      isChecked={checked}
      size="lg"
      ref={ref}
      {...rest}
    />
  )
)

const selectionColumn = {
  id: "selection",
  Header: (col: any) => (
    <RowSelectCheckbox {...col.getToggleAllRowsSelectedProps()} />
  ),
  Cell: ({ row }: any) => (
    <RowSelectCheckbox {...row.getToggleRowSelectedProps()} />
  ),
}

type MenuActionProps = Omit<Action, "handler"> & {
  onClick: () => void
}

const MenuAction: FC<MenuActionProps> = ({
  icon: Icon,
  label,
  confirmConfig,
  onClick,
  ...props
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
      {label}
    </MenuItem>
  )
}

const createActionColumn = (actions: Action[]) => {
  const OverflowMenu = ({ row }: any) => (
    <Menu>
      <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="ghost" />
      <MenuList>
        {actions.map(({ handler, ...props }, i) => (
          <MenuAction
            onClick={() => handler(row.original)}
            key={`overflow-item-${i}`}
            {...props}
          />
        ))}
      </MenuList>
    </Menu>
  )

  return {
    id: "actions",
    Header: "Actions",
    Cell: OverflowMenu,
  }
}

const Table = <T extends object>({
  manualPagination = false,
  pageCount: count,
  isSticky = false,
  renderExpansion,
  hiddenColumns,
  actions = [],
  initialState,
  isPaginated,
  size = "md",
  colorScheme,
  onPaginate,
  isFetching,
  isLoading,
  variant,
  onSort,
  colgroup,
  ...props
}: TableProps<T>) => {
  const tableData = useMemo(
    () => (isLoading ? repeat({}, 10) : props.data ?? []),
    [isLoading, props.data]
  ) as T[]

  const tableColumns = useMemo(
    () => (isLoading ? props.columns.map(renderSkeletonCell) : props.columns),
    [isLoading, props.columns]
  )

  const {
    state: { pageIndex, pageSize, sortBy },
    getTableBodyProps,
    setHiddenColumns,
    selectedFlatRows,
    visibleColumns,
    getTableProps,
    headerGroups,
    setPageSize,
    prepareRow,
    gotoPage,
    pageCount,
    page,
  } = useTable<T>(
    {
      columns: tableColumns,
      data: tableData,
      initialState,
      manualPagination,
      manualSortBy: !!onSort,
      pageCount: count,
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      const hasActions = !isNilOrEmpty(actions)
      hooks.visibleColumns.push(
        flow(
          hasActions && hasBatchableActions(actions)
            ? prepend<any>(selectionColumn)
            : identity,
          hasActions ? append(createActionColumn(actions)) : identity
        )
      )
    }
  )

  useEffect(() => {
    onPaginate && onPaginate({ pageIndex, pageSize })
  }, [pageIndex, pageSize])

  useEffect(() => {
    onSort && sortBy[0] && onSort(sortBy[0])
  }, [sortBy])

  useEffect(() => {
    hiddenColumns && setHiddenColumns(hiddenColumns)
  }, [hiddenColumns])

  const head = headerGroups.map((headerGroup) => (
    <Tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((col) => (
        <Th {...col.getHeaderProps()} py={4}>
          <chakra.div display="flex" alignItems="center">
            <Stack
              {...col.getSortByToggleProps()}
              justifyContent="space-between"
              direction="row"
              w="100%"
            >
              <span>{col.render("Header")}</span>
              <SortIndicator {...getSortIndicatorProps(col)} />
            </Stack>
            <ColumnFilter {...getColumnFilterProps(col)} render={col.render} />
          </chakra.div>
        </Th>
      ))}
    </Tr>
  ))

  const rows = page.map((row, i) => {
    prepareRow(row)
    const { key, ...props } = row.getRowProps()

    return (
      <Fragment key={key}>
        <Tr {...props} _hover={{ bg: "gray.100" }}>
          {row.cells.map((cell) => (
            <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
          ))}
        </Tr>
        {row.isExpanded && (
          <Tr>
            <Td
              colSpan={visibleColumns.length}
              bgColor="gray.100"
              maxW="70vw"
              overflow="hidden"
              boxShadow="inner"
              p="6"
            >
              {renderExpansion && renderExpansion(row)}
            </Td>
          </Tr>
        )}
      </Fragment>
    )
  })

  const pagination = isPaginated && (
    <Stack
      boxShadow="0 -1px 3px -1.5px rgba(0, 0, 0, 0.1), 0 -1px 2px -1px rgba(0, 0, 0, 0.06)"
      justifyContent="space-between"
      position="sticky"
      bgColor="#fff"
      direction="row"
      zIndex={10}
      bottom="0"
      px="4"
      py={3}
    >
      {isLoading && (
        <chakra.div mt={2} ml={2}>
          <BeatLoader />
        </chakra.div>
      )}
      {!isLoading && (
        <Pagination onChange={gotoPage} page={pageIndex} total={pageCount} />
      )}
      <Select
        onChange={(e) => setPageSize(Number(e.target.value))}
        value={pageSize}
        maxW="150px"
        size="sm"
      >
        {[10, 20, 30, 40, 50].map((size) => (
          <option key={size} value={size}>
            Show {size}
          </option>
        ))}
      </Select>
    </Stack>
  )

  return (
    <Box
      {...omit(["data", "columns"], props)}
      opacity={isFetching ? 0.5 : 1}
      position="relative"
    >
      <ChakraTable
        colorScheme={colorScheme}
        {...getTableProps()}
        variant={variant}
        cellPadding={0}
        cellSpacing={0}
        size={size}
      >
        <colgroup>
          {colgroup?.map((props, i) => (
            <chakra.col key={`col-${i}`} {...props} />
          ))}
        </colgroup>
        <Thead {...getTableHeadProps({ isSticky })}>{head}</Thead>
        <Tbody {...getTableBodyProps()}>{rows}</Tbody>
      </ChakraTable>
      <HStack
        hidden={selectedFlatRows.length < 1}
        bgColor="#0361FF"
        position="sticky"
        color="white"
        zIndex={10}
        bottom="0"
        px="6"
        py={4}
      >
        <Text as="strong" flexGrow={1}>
          {selectedFlatRows.length} Items Selected
        </Text>
        <ButtonGroup ml="auto">
          {actions
            .filter((a) => a.isBatchable)
            .map(({ icon: Icon, ...action }) => (
              <Button
                _hover={{ bg: "white", color: "#0361FF" }}
                key={`action-${action.label}`}
                leftIcon={Icon && <Icon />}
                onClick={action.handler}
                variant="outline"
                size="sm"
              >
                {action.label}
              </Button>
            ))}
        </ButtonGroup>
      </HStack>
      {pagination}
      {!isLoading && isFetching && (
        <chakra.div
          transform="translate(-50%, -50%)"
          position="absolute"
          zIndex="10"
          left="50%"
          top="50%"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </chakra.div>
      )}
    </Box>
  )
}

Table.defaultProps = {
  variant: "simple",
}

export default Table

export { Column, TableProps }
