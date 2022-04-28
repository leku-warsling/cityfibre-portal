// @ts-nocheck

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
  Box,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
  StyleProps,
} from '@chakra-ui/react';
import append from 'ramda/es/append';
import omit from 'ramda/es/omit';
import pick from 'ramda/es/pick';
import pipe from 'ramda/es/pipe';
import prepend from 'ramda/es/prepend';
import range from 'ramda/es/range';
import repeat from 'ramda/es/repeat';
import whereEq from 'ramda/es/whereEq';
import { FC, forwardRef, Fragment, ReactNode, useEffect, useMemo } from 'react';
import { IconType } from 'react-icons';
import {
  BiCaretDown,
  BiCaretUp,
  BiChevronLeft,
  BiChevronRight,
  BiFilterAlt,
} from 'react-icons/bi';
import { FiMoreVertical } from 'react-icons/fi';
import {
  useTable,
  Column,
  TableOptions,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect,
  useSortBy,
  UseSortByOptions,
  UseSortByColumnProps,
  UseFiltersColumnProps,
} from 'react-table';
import { confirm, ConfirmProps } from '@ui';
import BeatLoader from 'react-spinners/BeatLoader';
import { identity, prop } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

type Action = {
  icon?: IconType;
  label: ReactNode;
  confirmConfig?: Omit<ConfirmProps, 'onConfirm'>;
  handler: (data: any) => void;
  isBatchable?: boolean;
};

export type Col = StyleProps & { span?: number };

type TableOwnProps<T extends object> = {
  onPaginate?: (value: { pageIndex: number; pageSize: number }) => void;
  onSort?: (value: { id: string; desc?: boolean }) => void;
  actions?: Action[];
  isExpandable?: boolean;
  isSticky?: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  isSortable?: boolean;
  isFilterable?: boolean;
  isPaginated?: boolean;
  isSelectable?: boolean;
  colgroup?: Col[];
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

const hasBatchableActions = (a: Action[]) =>
  a.filter((x) => x.isBatchable).length > 0;

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

const stickyHeaderProps = {
  position: 'sticky',
  top: 0,
  bgColor: '#fff',
  zIndex: 10,
  boxShadow:
    '0 1px 3px -1.5px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
} as const;

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
      colorScheme="brand"
      isChecked={checked}
      isIndeterminate={indeterminate}
      {...rest}
    />
  )
);

const selectionColumn = {
  id: 'selection',
  Header: (col: any) => (
    <RowSelectCheckbox {...col.getToggleAllRowsSelectedProps()} />
  ),
  Cell: ({ row }: any) => (
    <RowSelectCheckbox {...row.getToggleRowSelectedProps()} />
  ),
};

type MenuActionProps = Omit<Action, 'handler'> & {
  onClick: () => void;
};

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
        });

  return (
    <MenuItem icon={Icon && <Icon fontSize="18px" />} onClick={_onClick}>
      {label}
    </MenuItem>
  );
};

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
  );

  return {
    id: 'actions',
    Header: 'Actions',
    Cell: OverflowMenu,
  };
};

const Table = <T extends object>({
  size = 'sm',
  colorScheme,
  actions = [],
  variant,
  isLoading,
  isSticky,
  onPaginate,
  onSort,
  initialState,
  isFetching,
  manualPagination = false,
  pageCount: count,
  renderExpansion,
  colgroup,
  ...props
}: TableProps<T>) => {
  const tableData = useMemo(
    () => (isLoading ? repeat({}, 10) : props.data ?? []),
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
    selectedFlatRows,
    headerGroups,
    state: { pageIndex, pageSize, sortBy, columnOrder },
    ...rest
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
      const hasActions = !isNilOrEmpty(actions);
      hooks.visibleColumns.push(
        pipe(
          hasActions && hasBatchableActions(actions)
            ? prepend<any>(selectionColumn)
            : identity,
          hasActions ? append(createActionColumn(actions)) : identity
        )
      );
    }
  );

  console.log('rest:', rest);

  useEffect(() => {
    onPaginate && onPaginate({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  useEffect(() => {
    onSort && sortBy[0] && onSort(sortBy[0]);
  }, [sortBy]);

  const head = headerGroups.map((headerGroup) => (
    <Tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map((col) => (
        <Th {...col.getHeaderProps()} py={3}>
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
            <ColumnFilter {...getColumnFilterProps(col)} render={col.render} />
          </chakra.div>
        </Th>
      ))}
    </Tr>
  ));

  const rows = page.map((row, i) => {
    prepareRow(row);
    const { key, ...props } = row.getRowProps();

    return (
      <Fragment key={key}>
        <Tr {...props} _hover={{ bg: 'gray.100' }}>
          {row.cells.map((cell) => (
            <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
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
    );
  });

  return (
    <Box
      {...omit(['data', 'columns'], props)}
      opacity={isFetching ? 0.5 : 1}
      position="relative"
    >
      <_Table
        colorScheme={colorScheme}
        {...getTableProps()}
        cellPadding={0}
        cellSpacing={0}
        variant={variant}
        size={size}
      >
        <colgroup>
          {colgroup?.map((props, i) => (
            <chakra.col key={`col-${i}`} {...props} />
          ))}
        </colgroup>
        <Thead {...stickyHeaderProps}>{head}</Thead>
        <Tbody {...getTableBodyProps()}>{rows}</Tbody>
      </_Table>
      <HStack
        hidden={selectedFlatRows.length < 1}
        px="6"
        position="sticky"
        bottom="0"
        bgColor="#0361FF"
        color="white"
        py={4}
        zIndex={10}
      >
        <Text as="strong" flexGrow={1}>
          {selectedFlatRows.length} Items Selected
        </Text>
        <ButtonGroup ml="auto">
          {actions
            .filter((a) => a.isBatchable)
            .map(({ icon: Icon, ...action }) => (
              <Button
                key={`action-${action.label}`}
                variant="outline"
                size="sm"
                leftIcon={Icon && <Icon />}
                onClick={action.handler}
                _hover={{ bg: 'white', color: '#0361FF' }}
              >
                {action.label}
              </Button>
            ))}
        </ButtonGroup>
      </HStack>
      <Stack
        direction="row"
        justifyContent="space-between"
        boxShadow="0 -1px 3px -1.5px rgba(0, 0, 0, 0.1), 0 -1px 2px -1px rgba(0, 0, 0, 0.06)"
        px="4"
        position="sticky"
        bottom="0"
        bgColor="#fff"
        py={3}
        zIndex={10}
      >
        {isLoading ? (
          <chakra.div mt={2} ml={2}>
            <BeatLoader />
          </chakra.div>
        ) : (
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
        )}
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
      {!isLoading && isFetching && (
        <chakra.div
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
          zIndex="10"
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
  );
};

Table.defaultProps = {
  variant: 'simple',
};

export default Table;

export { Column, TableProps };
