import layoutConfig from '@config/layout';
import IconController from '@components/common/ui/Icons';
import { SimpleGrid, Group, Text, Card, Space } from '@mantine/core';
import PageSection from '../Base';
import useStyles from './Community.styles';

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
          href={layoutConfig.facebook.link}
          className={cx(classes.card, classes.facebook)}
        >
          <Group noWrap>
            <IconController control="facebook" size={24} />
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
          href={layoutConfig.github.discussions.frontend}
          className={cx(classes.card, classes.github)}
        >
          <Group noWrap>
            <IconController control="github" size={24} />
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
