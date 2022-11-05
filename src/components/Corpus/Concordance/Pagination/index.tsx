import { memo } from 'react';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { Pagination as MantinePagination } from '@mantine/core';
import { Props } from './types';

function Pagination(props: Props) {
  const router = useRouter();
  const { e, showPos, page, fetchNumber, numberOfHits, mutate } = props;
  const miniScreen = useMediaQuery('(max-width: 400px)');
  const smallScreen = useMediaQuery('(max-width: 485px)');

  const setPaginationSize = () => {
    if (miniScreen) return 'xs';
    return smallScreen ? 'sm' : 'md';
  };

  return (
    <MantinePagination
      total={Math.round(numberOfHits / fetchNumber) || 1}
      initialPage={Number(page)}
      withEdges
      size={setPaginationSize()}
      onChange={async (value) => {
        const pushUrl = `${Route.CONCORDANCE}?page=${value}&pos=${showPos}&e=${e}`;
        if (router.asPath === pushUrl) return;
        await router.push(pushUrl);
        mutate();
      }}
    />
  );
}

export default memo(Pagination);
