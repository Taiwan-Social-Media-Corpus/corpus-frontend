import { NextPage } from 'next';
import { Container, Paper } from '@mantine/core';
import LoginForm from '@components/pages/User/Login/Form';
import LoginCallout from '@components/pages/User/Login/Callout';
import AuthenticationLayout from '@components/layout/Authentication';

const Login: NextPage = () => (
  <AuthenticationLayout title="Sign in to LOPEN">
    <Container size={420}>
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <LoginForm />
      </Paper>
      <Paper withBorder shadow="md" p="16px 16px" mt="var(--base-size-16, 16px)" radius="md">
        <LoginCallout />
      </Paper>
    </Container>
  </AuthenticationLayout>
);

export default Login;
