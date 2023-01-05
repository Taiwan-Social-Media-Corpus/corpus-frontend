import { NextPage } from 'next';
import { Container, Paper } from '@mantine/core';
import AuthenticationLayout from '@components/layout/Authentication';
import MobileSignUpForm from '@components/pages/User/SignUp/Form/Mobile';
import DesktopSignUpForm from '@components/pages/User/SignUp/Form/Desktop';

const SignUp: NextPage = () => (
  <AuthenticationLayout title="Sign up to LOPEN">
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

    <Container
      size={520}
      sx={{
        '@media (max-width: 420px)': {
          display: 'none',
        },
      }}
    >
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <DesktopSignUpForm />
      </Paper>
    </Container>
  </AuthenticationLayout>
);

export default SignUp;
