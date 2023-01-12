import Route from '@config/routes';
import { sanitizeIP } from '@utils';
import verifyRecoveryJWT from '@utils/jwt/recover';
import type { GetServerSideProps, NextPage } from 'next';
import RecoveryBase from '@components/pages/User/Recovery/Base';
import ValidationForm from '@components/pages/User/Recovery/Validation';

const Validation: NextPage = () => (
  <RecoveryBase
    title="請輸入驗證碼"
    subTitle="請查看你的電子郵件信箱中是否有包含驗證碼的信件。"
    containerSize={460}
  >
    <ValidationForm />
  </RecoveryBase>
);

export default Validation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = { redirect: { permanent: false, destination: Route.recovery.root } };
  const { req } = context;
  const jwtToken = req.cookies.__rec_t;
  const ip = (req.headers['x-real-ip'] as string) || sanitizeIP(req.socket.remoteAddress as string);
  const token = verifyRecoveryJWT(ip, jwtToken, 'code');

  if (token === false) {
    return redirect;
  }

  return { props: {} };
};
