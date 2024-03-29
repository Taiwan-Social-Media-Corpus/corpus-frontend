import Route from '@config/routes';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import { Container } from '@mantine/core';
import { NextPageWithControl } from 'types';
import { decodeURL } from '@utils/url/corpus';
import MainLayout from '@components/layout/Main';
import { ConcordancePageProps } from 'types/corpus';

const ConcordancePage = dynamic(() => import('@components/pages/Corpus/Concordance'));

const Concordance: NextPageWithControl<ConcordancePageProps> = (props) => (
  <Container size={1200} my={40}>
    <ConcordancePage payload={props.payload} />
  </Container>
);

Concordance.control = {
  Layout: (props) => (
    <MainLayout
      title="Taiwan Social Media Corpus"
      description="A corpus of PTT and Dcard."
      withAvatar={false}
    >
      {props.children}
    </MainLayout>
  ),
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const redirect = { redirect: { permanent: false, destination: Route.corpus.root } };
  const { pos, e, page } = query as { pos?: string; e?: string; page?: string };
  const invalidQuery = pos === undefined || e === undefined || page === undefined;

  if (invalidQuery) return redirect;

  const payload = decodeURL(e, page);

  if (payload === false) return redirect;

  return { props: { payload } };
};

export default Concordance;
