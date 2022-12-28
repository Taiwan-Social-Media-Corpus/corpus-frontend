import { Hit } from 'types/corpus';
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

  return (
    <Center mt={30}>
      <MantinePagination
        total={table.getPageCount()}
        initialPage={table.getState().pagination.pageIndex}
        withEdges
        size={size}
        onChange={(value) => {
          if (table.getPageCount() === 1) return;
          table.setPageIndex(value);
        }}
      />
    </Center>
  );
}

export default Pagination;
