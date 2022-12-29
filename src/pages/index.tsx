import dynamic from 'next/dynamic';
import Route from '@config/routes';
import { Box } from '@mantine/core';
import { useRouter } from 'next/router';
import Waves from '@components/pages/Home/Waves';
import Jumbotron from '@components/pages/Home/Jumbotron';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useMedia, usePrefetchMedia } from '@services/corpus/media';
import { useCorpusStats, usePrefetchCorpusStats } from '@services/corpus/stats/corpus';

const Community = dynamic(() =>
  import('@components/pages/Home/Community').then((module) => module)
);
const Media = dynamic(() => import('@components/pages/Home/Media').then((module) => module));
const Footer = dynamic(() => import('@components/common/ui/Footer').then((module) => module));

function Home() {
  const router = useRouter();
  const { media, isMediaError } = useMedia();
  const { corpusStats, isCorpusStatsError } = useCorpusStats();
  const isError = isMediaError || isCorpusStatsError || !media || !corpusStats;

  if (isError) {
    router.push(Route.serverError, { pathname: router.pathname });
    return null;
  }

  return (
    <>
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <Jumbotron media={media.data} corpusStats={corpusStats.data} />
        <Waves height={40} width={150} />
        <Media media={media.data} />
        <Waves height={42} width={150} alt />
        <Community />
      </Box>
      <Footer />
    </>
  );
}

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await Promise.all([usePrefetchMedia(queryClient), usePrefetchCorpusStats(queryClient)]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
