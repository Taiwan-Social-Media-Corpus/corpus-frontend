import API from '@config/api';
import { SWRConfig } from 'swr';
import Route from '@config/routes';
import { Boards } from 'types/corpus';
import Layout from '@components/layout';
import type { ReactElement } from 'react';
import { NextPageWithLayout } from 'types';
import type { GetServerSideProps } from 'next';
import CorpusHome from '@components/pages/Corpus/Home';
import { fetchBoards } from '@services/corpus/boards';

type Props = { fallback: { [x: string]: Boards } };

const Corpus: NextPageWithLayout<Props> = (props) => (
  <SWRConfig value={{ fallback: props.fallback }}>
    <CorpusHome />
  </SWRConfig>
);

Corpus.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      title="Taiwan Social Media Corpus"
      description="A corpus of PTT and Dcard."
      withAvatar={false}
    >
      {page}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const redirect = { redirect: { permanent: false, destination: Route.recovery.root } };
  const url = API.V1.corpus.boards.external;
  const boards = await fetchBoards(url);

  if (boards === null || boards.status === 'failed') {
    return redirect;
  }

  return {
    props: {
      fallback: {
        [url]: boards.data,
      },
    },
  };
};

export default Corpus;
