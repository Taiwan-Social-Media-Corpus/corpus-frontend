import { ReactNode } from 'react';
import { Container, Title, Text } from '@mantine/core';
import useStyles from './Layout.styles';

function CorpusLayout({ children }: { children: ReactNode }) {
  const { classes } = useStyles();

  return (
    <>
      <Container size={700} my={45}>
        <Title className={classes.title}>Taiwan Social Media Corpus</Title>
        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            A corpus of PTT and Dcard.
          </Text>
        </Container>
      </Container>
      <main>{children}</main>
    </>
  );
}

export default CorpusLayout;
