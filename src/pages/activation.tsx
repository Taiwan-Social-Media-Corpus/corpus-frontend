import { NextPageWithControl } from 'types';
import { Container, Paper } from '@mantine/core';
import MainLayout from '@components/layout/Main';
import ActivationForm from '@components/pages/User/Activation';

const Activation: NextPageWithControl = () => (
  <MainLayout
    title="請輸入驗證碼"
    description="請查看你的電子郵件信箱中是否有包含驗證碼的信件"
    withAvatar={false}
  >
    <Container size={480}>
      <Paper withBorder shadow="lg" p={30} radius="md" mt="xl">
        <ActivationForm />
      </Paper>
    </Container>
  </MainLayout>
);

Activation.control = {
  auth: true,
};

export default Activation;
