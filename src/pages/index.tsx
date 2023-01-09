import API from '@config/api';
import { SWRConfig } from 'swr';
import dynamic from 'next/dynamic';
import { fetchMedia } from '@services/corpus/media';
import type { NextPage, GetServerSideProps } from 'next';
import { fetchCorpusStats } from '@services/corpus/stats/corpus';

const HomePage = dynamic(() => import('@components/pages/Home'));
const Footer = dynamic(() => import('@components/common/ui/Footer'));

type Props = { fallback: { [x: string]: any } };

const Home: NextPage<Props> = (props) => (
  <SWRConfig value={{ fallback: props.fallback }}>
    <HomePage />
    <Footer />
  </SWRConfig>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const mediaUrl = API.V1.corpus.media.external;
  const corpusStatsUrl = `${API.V1.corpus.stats.corpus.external}?type=word`;

  const [mediaResult, corpusStatsResult] = await Promise.all([
    fetchMedia(mediaUrl),
    fetchCorpusStats(corpusStatsUrl),
  ]);

  return {
    props: {
      fallback: {
        [mediaUrl]: mediaResult?.data,
        [corpusStatsUrl]: corpusStatsResult?.data,
      },
    },
  };
};
