import { NextPage } from 'next';
import MainLayout from '@components/layout/Main';
import { Container, Paper } from '@mantine/core';
import LoginForm from '@components/pages/User/Login/Form';
import LoginCallout from '@components/pages/User/Login/Callout';

const Login: NextPage = () => (
  <MainLayout title="Sign in to LOPEN" withAvatar>
    <Container size={420}>
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <LoginForm />
      </Paper>
      <Paper withBorder shadow="md" p="16px 16px" mt="var(--base-size-16, 16px)" radius="md">
        <LoginCallout />
      </Paper>
    </Container>
  </MainLayout>
);

export default Login;
