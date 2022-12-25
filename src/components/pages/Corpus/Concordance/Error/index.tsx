import { memo } from 'react';
import Link from 'next/link';
import Route from '@config/routes';
import { Container, SimpleGrid, Text, Title, Button, Paper } from '@mantine/core';
import useStyles from './Error.styles';

type Props = { message: string | undefined };

function ErrorCQL(props: Props) {
  const { message } = props;
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Paper shadow="md" sx={{ padding: '2rem' }} withBorder className={classes.mobileImage}>
          <Text size="lg">{message}</Text>
        </Paper>
        <div>
          <Title className={classes.title}>Error CQL Pattern</Title>
          <Text color="dimmed" size="lg">
            The CQL you type does not match the syntax. Please go to{' '}
            <Text
              component={Link}
              href={Route.guide}
              color="blue"
              sx={{
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Guide
            </Text>{' '}
            page to learn more about Corpus Query Language.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            component={Link}
            href={Route.corpus.root}
          >
            Search again
          </Button>
        </div>
        <Paper shadow="md" sx={{ padding: '2rem' }} withBorder className={classes.desktopImage}>
          <Text size="lg">{message}</Text>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}

export default memo(ErrorCQL);
