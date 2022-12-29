import { memo, ReactNode } from 'react';
import { Container, Title, Text, useMantineTheme } from '@mantine/core';
import useStyles from './Corpus.styles';

type Props = { children: ReactNode; description: string };

function CorpusLayout(props: Props) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { children, description } = props;

  return (
    <div className={classes.wrapper}>
      <Container size={700}>
        <Title className={classes.title}>Taiwan Social Media Corpus</Title>
        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            {description}
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
