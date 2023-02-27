import API from '@config/api';
import { SWRConfig } from 'swr';
import Route from '@config/routes';
import type { GetServerSideProps } from 'next';
import MainLayout from '@components/layout/Main';
import { fetchBoards } from '@services/corpus/boards';
import CorpusHome from '@components/pages/Corpus/Home';
import { NextPageWithControl, FallbackProps } from 'types';

const Corpus: NextPageWithControl<FallbackProps> = (props) => (
  <SWRConfig value={{ fallback: props.fallback }}>
    <CorpusHome />
  </SWRConfig>
);

Corpus.control = {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const redirect = { redirect: { permanent: false, destination: Route.serverError } };
  const url = API.V1.corpus.boards;
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
