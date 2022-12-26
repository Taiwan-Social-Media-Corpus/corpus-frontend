import { Hit } from 'types/corpus';
import { memo, useMemo } from 'react';
import { Table } from '@tanstack/react-table';
import { useMediaQuery } from '@mantine/hooks';
import { Center, Pagination as MantinePagination } from '@mantine/core';

type Props = { table: Table<Hit> };

function usePaginationSize() {
  const miniScreen = useMediaQuery('(max-width: 400px)');
  const smallScreen = useMediaQuery('(max-width: 485px)');
  return miniScreen ? 'xs' : smallScreen ? 'sm' : 'md';
}

function Pagination(props: Props) {
  const { table } = props;
  const size = usePaginationSize();
  const pageCount = useMemo(() => table.getPageCount(), [table]);

  return (
    <Center mt={30}>
      <MantinePagination
        total={pageCount}
        initialPage={table.getState().pagination.pageIndex}
        withEdges
        size={size}
        onChange={(value) => table.setPageIndex(value)}
      />
    </Center>
  );
}

export default memo(Pagination);
