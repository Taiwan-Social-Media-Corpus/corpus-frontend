import { NextPage } from 'next';
import { Container, Paper } from '@mantine/core';
import LoginBase from '@components/pages/User/Login/Base';
import LoginForm from '@components/pages/User/Login/Form';
import LoginCallout from '@components/pages/User/Login/Callout';

const Login: NextPage = () => (
  <LoginBase>
    <Container size={420}>
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <LoginForm />
      </Paper>
      <Paper withBorder shadow="md" p="16px 16px" mt="var(--base-size-16, 16px)" radius="md">
        <LoginCallout />
      </Paper>
    </Container>
  </LoginBase>
);

export default Login;
