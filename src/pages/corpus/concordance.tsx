import Route from '@config/routes';
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from 'types';
import { Container } from '@mantine/core';
import CorpusLayout from '@components/UI/Layout/Corpus';
import ConcordancePage from '@components/Corpus/Concordance';

const Concordance: NextPageWithLayout = () => (
  <Container size={1200} my={40}>
    <ConcordancePage />
  </Container>
);

Concordance.getLayout = function getLayout(page: ReactElement) {
  return <CorpusLayout>{page}</CorpusLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const redirect = { redirect: { permanent: false, destination: Route.CORPUS } };
  const { page, pos, e } = query as { page?: string; pos?: string; e?: string };
  const invalidQuery = page === undefined || pos === undefined || e === undefined;

  if (invalidQuery) return redirect;

  return { props: {} };
};

export default Concordance;
