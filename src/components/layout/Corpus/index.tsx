import { memo, ReactNode } from 'react';
import { Container, Title, Text } from '@mantine/core';
import useStyles from './Corpus.styles';

type Props = { children: ReactNode; description: string | ReactNode };

function CorpusLayout(props: Props) {
  const { classes } = useStyles();
  const { children, description } = props;

  const subTitle =
    typeof description === 'string' ? (
      <Text size="sm" className={classes.description}>
        {description}
      </Text>
    ) : (
      description
    );

  return (
    <div className={classes.wrapper}>
      <Container size={700}>
        <Title className={classes.title}>Taiwan Social Media Corpus</Title>
        <Container size={560} p={0}>
          {subTitle}
        </Container>
      </Container>
      <main>{children}</main>
    </div>
  );
}

export default memo(CorpusLayout);
