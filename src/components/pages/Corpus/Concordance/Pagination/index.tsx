import { memo } from 'react';
import { KeyedMutator } from 'swr';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { ConcordanceParams } from 'types/corpus';
import { ResponseType } from '@services/corpus/concordance/get';
import { Center, Pagination as MantinePagination } from '@mantine/core';

type Props = {
  numberOfHits: number;
  fetchNumber: number;
  mutate: KeyedMutator<ResponseType>;
};

function usePaginationSize() {
  const miniScreen = useMediaQuery('(max-width: 400px)');
  const smallScreen = useMediaQuery('(max-width: 485px)');
  return miniScreen ? 'xs' : smallScreen ? 'sm' : 'md';
}

function Pagination(props: Props) {
  const router = useRouter();
  const { page, e, pos } = router.query as ConcordanceParams;
  const { numberOfHits, fetchNumber, mutate } = props;
  const size = usePaginationSize();

  return (
    <Center mt={30}>
      <MantinePagination
        total={Math.round(numberOfHits / fetchNumber) || 1}
        defaultValue={Number(page)}
        withEdges
        size={size}
        onChange={async (value) => {
          const pushUrl = `${Route.corpus.concordance}?page=${value}&pos=${pos}&e=${e}`;
          if (router.asPath === pushUrl) return;
          await router.push(pushUrl);
          mutate();
        }}
      />
    </Center>
  );
}

export default memo(Pagination);
