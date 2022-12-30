import { memo } from 'react';
import { Container, Title, Text, Paper } from '@mantine/core';
import useStyles from './RecoveryBase.styles';

type Props = {
  title: string;
  subTitle: string;
  containerSize: number;
  children: React.ReactNode;
};

function RecoveryBase(props: Props) {
  const { classes } = useStyles();
  const { title, subTitle, containerSize, children } = props;

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container} size={containerSize}>
        <Title className={classes.title}>{title}</Title>
        <Text size="md" mt="sm" color="dimmed" className={classes.subTitle}>
          {subTitle}
        </Text>
        <Paper withBorder shadow="lg" p={30} radius="md" mt="xl">
          {children}
        </Paper>
      </Container>
    </div>
  );
}

export default memo(RecoveryBase);
