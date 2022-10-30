import { memo } from 'react';
import { useRouter } from 'next/router';
import getBoards from '@services/boards';
import { Container } from '@mantine/core';
import Loader from '@components/UI/Loader';
import CorpusForm from '@components/Corpus/Form';

function Corpus() {
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
}

export default memo(Corpus);
