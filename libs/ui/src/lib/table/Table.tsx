import {
  Table as _Table,
  TableProps as _TableProps,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Tfoot,
  Stack,
  chakra,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverAnchor,
  PopoverTrigger,
  IconButton,
  Skeleton,
  ButtonGroup,
  Button,
  Select,
  Checkbox,
} from '@chakra-ui/react';
import { pick, range, repeat, whereEq } from 'ramda';
import {
  forwardRef,
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  BiCaretDown,
  BiCaretUp,
  BiChevronLeft,
  BiChevronRight,
  BiFilterAlt,
} from 'react-icons/bi';
import {
  useTable,
  Column,
  TableOptions,
  Hooks,
  useAsyncDebounce,
  useFilters,
  useExpanded,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useGlobalFilter,
  useSortBy,
  UseSortByOptions,
  UseSortByColumnProps,
  UseFiltersColumnProps,
} from 'react-table';

type TableOwnProps<T extends object> = {
  isExpandable?: boolean;
  isSticky?: boolean;
  isLoading?: boolean;
  isSortable?: boolean;
  isFilterable?: boolean;
  isPaginated?: boolean;
  isSelectable?: boolean;
  footer?: (state: any) => ReactNode;
  renderExpansion?: (data: any) => ReactNode;
};

type TableProps<T extends object> = _TableProps &
  TableOptions<T> &
  UseSortByOptions<T> &
  TableOwnProps<T> &
  Record<string, any>;

type SortIndicatorProps<D extends object> = Pick<
  UseSortByColumnProps<D>,
  'canSort' | 'isSorted' | 'isSortedDesc'
>;

const getSortIndicatorProps = pick(['canSort', 'isSorted', 'isSortedDesc']);
const getColumnFilterProps = pick([
  'canFilter',
  'setFilter',
  'filterValue',
  'preFilteredRows',
  'filteredRows',
]);

const isDescending = whereEq({
  isSorted: true,
  isSortedDesc: true,
});

const isAscending = whereEq({
  isSorted: true,
  isSortedDesc: false,
});

const SortIndicator = <D extends object>(props: SortIndicatorProps<D>) => {
  if (!props.canSort) return null;
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
  );
};

type ColumnFilter<D extends object> = UseFiltersColumnProps<D> & {
  render: (type: string) => ReactNode;
};

const ColumnFilter = <D extends object>(props: ColumnFilter<D>) => {
  if (!props.canFilter) return null;
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          variant="ghost"
          colorScheme="blackAlpha"
          ml="1"
          size="xs"
          aria-label="Filter column"
          icon={<BiFilterAlt />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody p={4}>{props.render('Filter')}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const renderSkeletonCell = <T extends object>(column: Column<T>) => ({
  ...column,
  Cell: <Skeleton height="20px" />,
});

const RowSelectCheckbox = forwardRef<any, any>(
  ({ indeterminate, checked, ...rest }, ref) => (
    <Checkbox
      size="lg"
      ref={ref}
      isChecked={checked}
      isIndeterminate={indeterminate}
      {...rest}
    />
  )
);

const Table = <T extends object>({
  size,
  colorScheme,
  variant,
  isLoading,
  isSticky,
  renderExpansion,
  ...props
}: TableProps<T>) => {
  const tableData = useMemo(
    () => (isLoading ? repeat({}, 30) : props.data ?? []),
    [isLoading, props.data]
  ) as T[];

  const tableColumns = useMemo(
    () => (isLoading ? props.columns.map(renderSkeletonCell) : props.columns),
    [isLoading, props.columns]
  );

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    page,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    setPageSize,
    gotoPage,
    pageCount,
    visibleColumns,
    headerGroups,
    state: { pageIndex, pageSize },
  } = useTable<T>(
    {
      columns: tableColumns,
      data: tableData,
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: (col: any) => (
            <RowSelectCheckbox {...col.getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }: any) => (
            <RowSelectCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <>
      <_Table
        colorScheme={colorScheme}
        {...getTableProps()}
        cellPadding={0}
        cellSpacing={0}
        variant={variant}
        size={size}
        mb="4"
      >
        <Thead
          position="sticky"
          top="0"
          bgColor="#fff"
          zIndex={999}
          boxShadow="0 4px 6px -3px rgba(0,0,0,.1), 0 2px 4px -4px rgba(0,0,0,.25)"
        >
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <Th {...col.getHeaderProps()}>
                  <chakra.div display="flex" alignItems="center">
                    <Stack
                      w="100%"
                      direction="row"
                      {...col.getSortByToggleProps()}
                      justifyContent="space-between"
                    >
                      <span>{col.render('Header')}</span>
                      <SortIndicator {...getSortIndicatorProps(col)} />
                    </Stack>
                    <ColumnFilter
                      {...getColumnFilterProps(col)}
                      render={col.render}
                    />
                  </chakra.div>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Fragment {...row.getRowProps()}>
                <Tr>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  ))}
                </Tr>
                {row.isExpanded && (
                  <Tr>
                    <Td colSpan={visibleColumns.length} bgColor="gray.100">
                      {renderExpansion && renderExpansion(row)}
                    </Td>
                  </Tr>
                )}
              </Fragment>
            );
          })}
        </Tbody>
      </_Table>
      <Stack direction="row" justifyContent="space-between" px="4">
        <ButtonGroup variant="ghost" size="sm" spacing="1">
          <IconButton
            aria-label="previous"
            icon={<BiChevronLeft />}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          />
          {range(1, pageCount + 1).map((n, i) => (
            <Button
              key={i}
              isActive={i === pageIndex}
              onClick={() => gotoPage(i)}
            >
              {n}
            </Button>
          ))}
          <IconButton
            aria-label="next"
            onClick={() => nextPage()}
            disabled={!canNextPage}
            icon={<BiChevronRight />}
          />
        </ButtonGroup>
        <Select
          value={pageSize}
          size="sm"
          maxW="150px"
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </Select>
      </Stack>
    </>
  );
};

Table.defaultProps = {
  variant: 'simple',
};

export default Table;

export { Column, TableProps };
