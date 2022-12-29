import Route from '@config/routes';
import { useRouter } from 'next/router';
import { Container } from '@mantine/core';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import CorpusLayout from '@components/layout/Corpus';
import CorpusForm from '@components/pages/Corpus/Form';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useBoards, usePrefetchBoards } from '@services/corpus/boards';

const Corpus: NextPageWithLayout = () => {
  const router = useRouter();
  const { boards, isError } = useBoards();

  if (isError || !boards || boards.status === 'failed') {
    router.push(Route.serverError, { pathname: router.pathname });
    return null;
  }

  return (
    <Container size={700} my={40}>
      <CorpusForm boards={boards.data} />
    </Container>
  );
};

Corpus.getLayout = function getLayout(page: ReactElement) {
  return <CorpusLayout description="A corpus of PTT and Dcard.">{page}</CorpusLayout>;
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await usePrefetchBoards(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Corpus;
