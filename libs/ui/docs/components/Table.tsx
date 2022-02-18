import {
  Table as _Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Column<T> = {
  key: string;
  title: string;
  render?: (value: any, record: T, index: number) => ReactNode;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  variant?: 'simple' | 'striped';
};

const Table = <T extends Record<string, any>>({
  columns,
  data,
  variant = 'simple',
}: TableProps<T>) => {
  return (
    <_Table variant={variant} my={6}>
      <Thead>
        <Tr>
          {columns.map(({ key, title }) => (
            <Th key={`column-${title}`}>{title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, rowIdx) => (
          <Tr key={`row-${rowIdx}`}>
            {columns.map(({ key, render }, cellIdx) => {
              const cell = row[key];
              return (
                <Td key={`cell-${cellIdx}`}>
                  {render ? render(cell, row, rowIdx) : cell}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </_Table>
  );
};

export default Table;
