import meta from 'meta';
import { FacebookIcon, GithubIcon } from '@components/common/Icons';
import { SimpleGrid, Group, Text, Card, Space } from '@mantine/core';
import useStyles from './Community.styles';
import PageSection from '../utils/PageSecion';

function Community() {
  const { classes, cx } = useStyles();

  return (
    <PageSection
      title="Join the community"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Space h="md" />
      <SimpleGrid cols={3} spacing="xl" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Card
          p="lg"
          component="a"
          radius="md"
          href="https://github.com/mantinedev/mantine/discussions"
          className={cx(classes.card, classes.facebook)}
        >
          <Group noWrap>
            <FacebookIcon size={24} />
            <Text size="md" weight={600}>
              Follow on Facebook
            </Text>
          </Group>
          <Card.Section inheritPadding className={classes.description}>
            <Text size="xs" mt="sm">
              Get notified about new minor and major releases
            </Text>
          </Card.Section>
        </Card>

        <Card
          p="lg"
          component="a"
          radius="md"
          href={meta.github.discussions.backend}
          className={cx(classes.card, classes.github)}
        >
          <Group noWrap>
            <GithubIcon size={24} />
            <Text size="md" weight={600}>
              Start a discussion
            </Text>
          </Group>
          <Card.Section inheritPadding className={classes.description}>
            <Text size="xs" mt="sm">
              Request new features, ask questions and provide feedback with GitHub discussions
            </Text>
          </Card.Section>
        </Card>
      </SimpleGrid>
      <Space h={120} />
    </PageSection>
  );
}

export default Community;
