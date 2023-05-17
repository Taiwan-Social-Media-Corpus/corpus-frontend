import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import layoutConfig from '@config/layout';
import { Media, CorpusStats } from 'types/corpus';
import IconController from '@components/common/ui/Icons';
import { rem, Container, Group, Button, Text, useMantineTheme, SimpleGrid } from '@mantine/core';
import useStyles from './Jumbotron.styles';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

type Props = { media: Media; corpusStats: CorpusStats };

function Jumbotron(props: Props) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  const { media, corpusStats } = props;

  const dcardPosts = media.dcard !== undefined ? media.dcard : 0;
  const pttPosts = media.ptt !== undefined ? media.ptt : 0;

  const totalPosts = dcardPosts + pttPosts;
  const wordTypes = useMemo(() => Object.keys(corpusStats.word).length, [corpusStats.word]);
  const wordTokens = useMemo(
    () => Object.values(corpusStats.word).reduce((prev, cur) => prev + cur),
    [corpusStats.word]
  );

  const features = [
    { title: '收錄文章 (Total posts)', stats: totalPosts },
    { title: '詞形 (Word types)', stats: wordTypes },
    { title: '詞數 (Word tokens)', stats: wordTokens },
  ].map((value, index) => (
    <div className={classes.feature} key={`${value.title}-${index}`}>
      <div className={classes.featureBody}>
        <CountUp start={0} end={value.stats} duration={3}>
          {({ countUpRef }) => (
            <Text mt={4} size={28}>
              <span ref={countUpRef} />
            </Text>
          )}
        </CountUp>
        <Text weight={500} className={classes.featureTitle}>
          {value.title}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.jumbotron}>
      <Container size={1100} className={classes.inner}>
        <Text component="span" inherit className={classes.title}>
          Taiwan Social Media Corpus
        </Text>
        <Text className={classes.description}>
          Build a large-scaled, diverse and linguistically-enriched social media corpus of Mandarin
          in Taiwan
        </Text>
        <SimpleGrid
          cols={3}
          sx={{ maxWidth: rem(800) }}
          spacing={30}
          mt={40}
          breakpoints={[{ maxWidth: 800, cols: 1 }]}
        >
          {features}
        </SimpleGrid>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="/corpus"
            size="xl"
            radius="md"
            className={cx(classes.control, classes.controlPrimary)}
            variant="gradient"
          >
            Get started
          </Button>

          <Button
            component="a"
            href={layoutConfig.github.organization}
            size="xl"
            variant="outline"
            radius="md"
            className={cx(classes.control, classes.githubControl)}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            leftIcon={<IconController control="github" size={22} />}
            styles={{ leftIcon: { marginRight: rem(12) } }}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default Jumbotron;
