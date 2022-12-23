import { Boards } from 'types/corpus';
import { Container } from '@mantine/core';
import { GetServerSideProps } from 'next';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import getBoards from '@services/corpus/boards';
import CorpusLayout from '@components/layout/Corpus';
import CorpusForm from '@components/pages/Corpus/Form';

type Props = { boards: Boards };

const Corpus: NextPageWithLayout<Props> = (props) => {
  const { boards } = props;

  return (
    <Container size={700} my={40}>
      <CorpusForm boards={boards} />
    </Container>
  );
};

Corpus.getLayout = function getLayout(page: ReactElement) {
  return <CorpusLayout>{page}</CorpusLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const redirect = { redirect: { permanent: false, destination: '/500' } };
  const [result, error] = await getBoards();

  if (error || result == null || result.status === 'failed') {
    return redirect;
  }

  return { props: { boards: result.data } };
};

export default Corpus;
