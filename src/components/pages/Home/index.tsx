import { memo } from 'react';
import dynamic from 'next/dynamic';
import Route from '@config/routes';
import { Box } from '@mantine/core';
import { useRouter } from 'next/router';
import Loader from '@components/common/ui/Loader';
import { useMedia } from '@services/corpus/media';
import { useCorpusStats } from '@services/corpus/stats/corpus';

const Waves = dynamic(() => import('./Waves'));
const Media = dynamic(() => import('./Media'));
const Jumbotron = dynamic(() => import('./Jumbotron'));
const Community = dynamic(() => import('./Community'));

function HomePage() {
  const router = useRouter();
  const { media, isMediaLoading, mediaError } = useMedia();
  const { corpusStats, isCorpusStatsLoading, corpusStatsError } = useCorpusStats();

  if (isMediaLoading || isCorpusStatsLoading) return <Loader />;

  if (mediaError || corpusStatsError || media === undefined || corpusStats === undefined) {
    router.push(Route.serverError, { pathname: router.pathname });
    return null;
  }

  return (
    <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
      <Jumbotron media={media} corpusStats={corpusStats} />
      <Waves height={40} width={150} />
      <Media media={media} />
      <Waves height={42} width={150} alt />
      <Community />
    </Box>
  );
}

export default memo(HomePage);
