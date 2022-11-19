import { memo, ReactNode } from 'react';
import { Container, Title, Text, useMantineTheme } from '@mantine/core';
import useStyles from './Corpus.styles';

function CorpusLayout({ children }: { children: ReactNode }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Container size={700}>
        <Title className={classes.title}>Taiwan Social Media Corpus</Title>
        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            A corpus of PTT and Dcard.
          </Text>
        </Container>
      </Container>
      <main
        style={{
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default memo(CorpusLayout);
