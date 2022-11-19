import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import getBoards from '@services/boards';
import { Container } from '@mantine/core';
import CorpusLayout from '@components/layout/Corpus';

const Loader = dynamic(() => import('@components/common/Loader'));
const CorpusForm = dynamic(() => import('@components/pages/Corpus/Form'));

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
