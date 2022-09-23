// @ts-nocheck
import {
  Box,
  chakra,
  Flex,
  Skeleton,
  Spinner,
  StyleProps,
  Table as ChakraTable,
  TableProps as _TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { flow } from "fp-ts/lib/function"
import { isNotNilOrEmpty } from "ramda-adjunct"
import repeat from "ramda/es/repeat"
import { Fragment, ReactNode, useEffect, useMemo } from "react"
import {
  Column,
  TableOptions,
  useExpanded,
  useRowSelect,
  useSortBy,
  UseSortByOptions,
  useTable,
} from "react-table"
import { Pagination } from "../navigation/pagination"
import {
  BatchAcions,
  ColumnSortIndicator,
  getSortIndicatorProps,
  TableAction,
  withOverflowMenu,
  withRowSelection,
} from "./components"

export type Col = StyleProps & { span?: number }

type TablePagination = {
  onSizeChange?: (value: number) => void
  onChange: (value: number) => void
  pageSize?: number
  current: number
  total: number
}

export type TableOwnProps<T extends object> = {
  onSort?: (value: { id: string; desc?: boolean }) => void
  renderExpansion?: (data: any) => ReactNode
  footer?: (state: any) => ReactNode
  pagination?: TablePagination
  hiddenColumns?: string[]
  actions?: TableAction[]
  isExpandable?: boolean
  isFetching?: boolean
  // isSortable?: boolean
  isLoading?: boolean
  isSticky?: boolean
  colgroup?: Col[]
}

export type TableProps<T extends object> = _TableProps &
  Omit<TableOptions<T>, "pageCount"> &
  UseSortByOptions<T> &
  TableOwnProps<T> &
  Record<string, any>

const STICKY_HEADER_STYLE_PROPS = {
  position: "sticky",
  bgColor: "#fff",
  zIndex: 10,
  top: 0,
  boxShadow:
    "0 1px 3px -1.5px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
} as const

const PAGINATION_STYLE_PROPS = {
  boxShadow:
    "0 -1px 3px -1.5px rgba(0, 0, 0, 0.1), 0 -1px 2px -1px rgba(0, 0, 0, 0.06)",
  justifyContent: "space-between",
  position: "sticky",
  bgColor: "#fff",
  align: "center",
  zIndex: 10,
  bottom: 0,
  px: 4,
  py: 3,
} as const

const renderSkeletonCell = <T extends object>(column: Column<T>) => ({
  ...column,
  Cell: <Skeleton height="20px" />,
})

export const Table = <T extends object>({
  isSticky = false,
  renderExpansion,
  hiddenColumns,
  actions = [],
  initialState,
  pagination,
  size = "md",
  colorScheme,
  isFetching,
  isLoading,
  variant,
  onSort,
  colgroup,
  columns,
  data = [],
  ...props
}: TableProps<T>) => {
  const blanks = repeat({}, 10) as T[]
  const _data = useMemo(() => (isLoading ? blanks : data), [isLoading, data])

  const _columns = useMemo(
    () => (isLoading ? columns.map(renderSkeletonCell) : columns),
    [isLoading, columns]
  )

  const addComputedColumns = flow(
    withRowSelection(actions),
    withOverflowMenu(actions)
  )

  const {
    state: { sortBy },
    getTableBodyProps,
    setHiddenColumns,
    selectedFlatRows,
    visibleColumns,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable<T>(
    {
      columns: _columns,
      data: _data,
      initialState,
      manualSortBy: !!onSort,
    },
    useSortBy,
    useExpanded,
    useRowSelect,
    (hooks) => hooks.visibleColumns.push(addComputedColumns)
  )

  useEffect(() => {
    onSort && sortBy[0] && onSort(sortBy[0])
  }, [sortBy])

  useEffect(() => {
    hiddenColumns && setHiddenColumns(hiddenColumns)
  }, [hiddenColumns])

  const header = (
    <Thead {...(isSticky ? STICKY_HEADER_STYLE_PROPS : {})}>
      {headerGroups.map((headerGroup) => {
        const columns = headerGroup.headers.map((c) => (
          <Th {...c.getHeaderProps()} py={4}>
            <Flex
              {...c.getSortByToggleProps()}
              justifyContent="space-between"
              align="center"
            >
              <span>{c.render("Header")}</span>
              <ColumnSortIndicator {...getSortIndicatorProps(c)} />
            </Flex>
          </Th>
        ))

        return <Tr {...headerGroup.getHeaderGroupProps()}>{columns}</Tr>
      })}
    </Thead>
  )

  const body = (
    <Tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        const { key, ...props } = row.getRowProps()
        const cells = row.cells.map((c) => (
          <Td {...c.getCellProps()}>{c.render("Cell")}</Td>
        ))
        const expansion = row.isExpanded && (
          <Tr>
            <Td
              colSpan={visibleColumns.length}
              bgColor="gray.100"
              overflow="hidden"
              boxShadow="inner"
              maxW="70vw"
              p={6}
            >
              {renderExpansion && renderExpansion(row)}
            </Td>
          </Tr>
        )

        return (
          <Fragment key={key}>
            <Tr {...props} _hover={{ bg: "gray.100" }}>
              {cells}
            </Tr>
            {expansion}
          </Fragment>
        )
      })}
    </Tbody>
  )

  return (
    <Box opacity={isFetching ? 0.5 : 1} position="relative" {...props}>
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
        {header}
        {body}
      </ChakraTable>
      <BatchAcions
        actions={actions.filter((a) => a.isBatchable)}
        selection={selectedFlatRows}
      />
      {isNotNilOrEmpty(pagination) && (
        <Pagination
          onSizeChange={pagination?.onSizeChange}
          pageSize={pagination?.pageSize}
          onChange={pagination?.onChange}
          current={pagination?.current}
          {...PAGINATION_STYLE_PROPS}
          total={pagination?.total}
          isLoading={isLoading}
          showSizeChanger
        />
      )}
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
