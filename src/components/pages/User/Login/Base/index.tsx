import { memo, ReactNode } from 'react';
import { Container, Title, Stack, Avatar } from '@mantine/core';
import useStyles from './LoginBase.styles';

type Props = { children: ReactNode };

function LoginBase(props: Props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700}>
        <Stack spacing={30} mb={25}>
          <Avatar
            src="../lopen-logo.jpeg"
            size={60}
            radius="xl"
            style={{ border: '1px solid #ccc' }}
            mr="auto"
            ml="auto"
          />
          <Title className={classes.title}>Sign in to LOPEN</Title>
        </Stack>
      </Container>
      <main>{children}</main>
    </div>
  );
}

export default memo(LoginBase);
