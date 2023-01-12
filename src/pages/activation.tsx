import Layout from '@components/layout';
import { NextPageWithAuth } from 'types';
import { Container, Paper } from '@mantine/core';
import ActivationForm from '@components/pages/User/Activation';

const Activation: NextPageWithAuth = () => (
  <Layout
    title="請輸入驗證碼"
    description="請查看你的電子郵件信箱中是否有包含驗證碼的信件"
    withAvatar={false}
  >
    <Container size={480}>
      <Paper withBorder shadow="lg" p={30} radius="md" mt="xl">
        <ActivationForm />
      </Paper>
    </Container>
  </Layout>
);

Activation.auth = true;

export default Activation;
