import { NextPageWithControl } from 'types';
import { useMediaQuery } from '@mantine/hooks';
import MainLayout from '@components/layout/Main';
import { Container, Paper } from '@mantine/core';
import MobileSignUpForm from '@components/pages/User/SignUp/Form/Mobile';
import DesktopSignUpForm from '@components/pages/User/SignUp/Form/Desktop';

const SignUp: NextPageWithControl = () => {
  const smallScreen = useMediaQuery('(max-width: 420px)');

  if (smallScreen) {
    return (
      <Container
        sx={{
          '@media (min-width: 420px)': {
            display: 'none',
          },
        }}
        p={15}
      >
        <MobileSignUpForm />
      </Container>
    );
  }

  return (
    <Container
      size={520}
      sx={{
        '@media (max-width: 420px)': {
          display: 'none',
        },
      }}
    >
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <DesktopSignUpForm isModal={false} />
      </Paper>
    </Container>
  );
};

SignUp.control = {
  Layout: (props) => (
    <MainLayout title="Sign up to LOPEN" withAvatar>
      {props.children}
    </MainLayout>
  ),
};

export default SignUp;
