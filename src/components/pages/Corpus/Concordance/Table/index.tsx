import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  Row,
  getFacetedRowModel,
} from '@tanstack/react-table';
import dynamic from 'next/dynamic';
import { Hit } from 'types/corpus';
import { useVirtual } from '@tanstack/react-virtual';
import { useMemo, useState, useRef, memo } from 'react';
import { Table as MantineTable, ScrollArea } from '@mantine/core';
import { TableProps } from './types';
import buildColumns from './Columns';
import useStyles from './Table.styles';

const Pagination = dynamic(() => import('./Pagination').then((module) => module));

function Table(props: TableProps) {
  const { data, showPos, pagination, fetchNumber, setPagination } = props;
  const { cx, classes } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const columns = buildColumns(data.docInfos, showPos);
  const col = useMemo<typeof columns>(() => columns, [columns]);

  const table = useReactTable<Hit>({
    data: data.hits,
    columns: col,
    pageCount: Math.round(data.summary.numberOfHits / fetchNumber) || 1,
    state: { pagination },
    columnResizeMode: 'onChange',
    manualPagination: true,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 50,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

  const TH = memo(() => (
    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }}>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  ));

  const TB = memo(() => (
    <tbody>
      {paddingTop > 0 && (
        <tr>
          <td style={{ height: `${paddingTop}px` }} />
        </tr>
      )}
      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index] as Row<Hit>;
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        );
      })}
      {paddingBottom > 0 && (
        <tr>
          <td style={{ height: `${paddingBottom}px` }} />
        </tr>
      )}
    </tbody>
  ));

  return (
    <>
      <ScrollArea
        viewportRef={tableContainerRef}
        type="scroll"
        style={{ height: 550 }}
        onScrollPositionChange={({ x }) => setScrolled(x !== 0)}
      >
        <MantineTable
          highlightOnHover
          horizontalSpacing="md"
          verticalSpacing="xs"
          fontSize="lg"
          sx={{ tableLayout: 'fixed', minWidth: 700, cursor: 'pointer' }}
        >
          <TH />
          <TB />
        </MantineTable>
      </ScrollArea>
      <Pagination table={table} />
    </>
  );
}

export default memo(Table);
