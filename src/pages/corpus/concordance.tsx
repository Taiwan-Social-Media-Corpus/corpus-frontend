import Route from '@config/routes';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { Container } from '@mantine/core';
import { NextPageWithLayout } from 'types';
import { ConcordancePageProps } from 'types/corpus';
import CorpusLayout from '@components/layout/Corpus';
import getConcordancePayload from '@utils/url/corpus';

const ConcordancePage = dynamic(() => import('@components/pages/Corpus/Concordance'));

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
  const redirect = { redirect: { permanent: false, destination: Route.corpus.root } };
  const { pos, e } = query as { pos?: string; e?: string };
  const invalidQuery = pos === undefined || e === undefined;

  if (invalidQuery) return redirect;

  const payload = getConcordancePayload(e);

  if (payload === false) return redirect;

  return { props: { payload } };
};

export default Concordance;
