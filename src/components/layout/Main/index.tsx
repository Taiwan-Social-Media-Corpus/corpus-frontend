import { useMemo, ReactNode } from 'react';
import { Container, Title, Stack, Avatar, Text } from '@mantine/core';
import useStyles from './MainLayout.styles';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  withAvatar: boolean;
};

function MainLayout(props: Props) {
  const { children, title, description, withAvatar } = props;
  const { classes } = useStyles();

  const item = useMemo(
    () =>
      withAvatar ? (
        <Stack spacing={30} mb={25}>
          <Avatar
            src="../lopen-logo.jpeg"
            size={60}
            radius="xl"
            style={{ border: '1px solid #ccc' }}
            mr="auto"
            ml="auto"
          />
          <Title className={classes.title}>{title}</Title>
        </Stack>
      ) : (
        <>
          <Title className={classes.title}>{title}</Title>
          <Container size={560} p={0}>
            <Text size="sm" className={classes.description}>
              {description}
            </Text>
          </Container>
        </>
      ),
    [withAvatar]
  );

  return (
    <div className={classes.wrapper}>
      <Container size={700}>{item}</Container>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
