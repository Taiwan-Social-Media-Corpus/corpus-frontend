import Route from '@config/routes';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { Container } from '@mantine/core';
import getConcordancePayload from '@utils/url/query';
import CorpusLayout from '@components/UI/Layout/Corpus';
import { NextPageWithLayout, ConcordancePageProps } from 'types';

const ConcordancePage = dynamic(() => import('@components/Corpus/Concordance'));

const Concordance: NextPageWithLayout<ConcordancePageProps> = (props) => {
  const { payload } = props;

  return (
    <Container size={1200} my={40}>
      <ConcordancePage payload={payload} />
    </Container>
  );
};

Concordance.getLayout = function getLayout(page: ReactElement) {
  return <CorpusLayout>{page}</CorpusLayout>;
};

export const getServerSideProps: GetServerSideProps<ConcordancePageProps> = async (context) => {
  const { query } = context;
  const redirect = { redirect: { permanent: false, destination: Route.CORPUS } };
  const { page, pos, e } = query as { page?: string; pos?: string; e?: string };
  const invalidQuery = page === undefined || pos === undefined || e === undefined;

  if (invalidQuery) return redirect;

  const payload = getConcordancePayload(page, e);

  if (payload === false) return redirect;

  return { props: { payload } };
};

export default Concordance;
