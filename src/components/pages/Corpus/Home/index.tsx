import { memo } from 'react';
import { Container } from '@mantine/core';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import Loader from '@components/common/ui/Loader';
import { useBoards } from '@services/corpus/boards';
import CorpusForm from './Form';

function CorpusHome() {
  const router = useRouter();
  const { boards, isLoading, error } = useBoards();

  if (isLoading) {
    return <Loader />;
  }

  if (boards === undefined || error) {
    router.push(Route.serverError, { pathname: router.pathname });
    return null;
  }

  return (
    <Container size={700} my={40}>
      <CorpusForm boards={boards} />
    </Container>
  );
}

export default memo(CorpusHome);
