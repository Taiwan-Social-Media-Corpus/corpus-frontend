import { NextPageWithControl } from 'types';
import MainLayout from '@components/layout/Main';
import { Container, Paper } from '@mantine/core';
import LoginForm from '@components/pages/User/Login/Form';
import LoginCallout from '@components/pages/User/Login/Callout';

const Login: NextPageWithControl = () => (
  <Container size={420}>
    <Paper withBorder shadow="md" p={30} mt={10} radius="md">
      <LoginForm />
    </Paper>
    <Paper withBorder shadow="md" p="16px 16px" mt="var(--base-size-16, 16px)" radius="md">
      <LoginCallout />
    </Paper>
  </Container>
);

Login.control = {
  Layout: (props) => (
    <MainLayout title="Sign in to LOPEN" withAvatar>
      {props.children}
    </MainLayout>
  ),
};

export default Login;
