import { NextPage } from 'next';
import Layout from '@components/layout';
import { Container, Paper } from '@mantine/core';
import MobileSignUpForm from '@components/pages/User/SignUp/Form/Mobile';
import DesktopSignUpForm from '@components/pages/User/SignUp/Form/Desktop';

const SignUp: NextPage = () => (
  <Layout title="Sign up to LOPEN" withAvatar>
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
  </Layout>
);

export default SignUp;
