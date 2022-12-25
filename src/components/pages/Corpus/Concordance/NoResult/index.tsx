import { memo } from 'react';
import Link from 'next/link';
import Route from '@config/routes';
import IconController from '@components/common/ui/Icons';
import { Center, Container, Title, Text, Button, Group } from '@mantine/core';
import useStyles from './NoResult.styles';

function NoResult() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <Center mb={40}>
        <IconController control="no-result" className={classes.image} />
      </Center>
      <Title className={classes.title} order={2}>
        No results found
      </Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        We couldn&apos;t find what you are looking for
      </Text>
      <Group position="center">
        <Button variant="outline" component={Link} href={Route.corpus.root}>
          Back to form
        </Button>
      </Group>
    </Container>
  );
}

export default memo(NoResult);
