import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import getBoards from '@services/boards';
import { Container } from '@mantine/core';
import Loader from '@components/UI/Loader';
import CorpusForm from '@components/Corpus/Form';
import CorpusLayout from '@components/UI/Layout/Corpus';

const Corpus: NextPageWithLayout = () => {
  const router = useRouter();
  const { boards, isError, isLoading } = getBoards();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !boards) {
    router.push('/500', { pathname: router.pathname });
    return null;
  }

  return (
    <Container size={700} my={40}>
      <CorpusForm boards={boards.data} />
    </Container>
  );
};

Corpus.getLayout = function getLayout(page: ReactElement) {
  return <CorpusLayout>{page}</CorpusLayout>;
};

export default Corpus;
