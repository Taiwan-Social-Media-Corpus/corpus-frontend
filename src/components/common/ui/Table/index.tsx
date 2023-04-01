import {
  rem,
  ScrollArea,
  ScrollAreaProps,
  Table as MantineTable,
  TableProps as MantineTableProps,
} from '@mantine/core';
import {
  Row,
  RowData,
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFacetedRowModel,
} from '@tanstack/react-table';
import { useVirtual } from '@tanstack/react-virtual';
import { memo, useMemo, useRef, useState } from 'react';
import useStyles from './Table.styles';

type Props<T extends RowData> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  height?: string | number;
  scrollAreaProps?: ScrollAreaProps;
} & MantineTableProps;

function Table<T extends RowData>(props: Props<T>) {
  const { data, columns, height, scrollAreaProps, ...mantineTableProps } = props;
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const col = useMemo(() => columns, [columns]);

  const table = useReactTable<T>({
    data,
    columns: col,
    columnResizeMode: 'onChange',
    manualPagination: true,
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
          <td style={{ height: `${rem(paddingTop)}` }} />
        </tr>
      )}
      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index] as Row<T>;
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
          <td style={{ height: `${rem(paddingBottom)}` }} />
        </tr>
      )}
    </tbody>
  ));

  return (
    <>
      <ScrollArea
        viewportRef={tableContainerRef}
        type="scroll"
        style={{ height: rem(height ?? 550) }}
        onScrollPositionChange={({ x }) => setScrolled(x !== 0)}
        {...scrollAreaProps}
      >
        <MantineTable
          horizontalSpacing="sm"
          verticalSpacing="xs"
          sx={{ tableLayout: 'fixed' }}
          {...mantineTableProps}
        >
          <TH />
          <TB />
        </MantineTable>
      </ScrollArea>
    </>
  );
}

export default Table;
