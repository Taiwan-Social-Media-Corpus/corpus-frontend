import Route from '@config/routes';
import { sanitizeIP } from '@utils';
import { NextPageWithControl } from 'types';
import type { GetServerSideProps } from 'next';
import verifyRecoveryJWT from '@utils/jwt/recover';
import ResetForm from '@components/pages/User/Recovery/Reset';
import RecoveryBase from '@components/pages/User/Recovery/Base';

const Reset: NextPageWithControl = () => <ResetForm />;

Reset.control = {
  Layout: (props) => (
    <RecoveryBase
      title="選擇新密碼"
      subTitle="請設定長度至少 8 個字元的新密碼，強度才夠"
      containerSize={460}
    >
      {props.children}
    </RecoveryBase>
  ),
};

export default Reset;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirect = { redirect: { permanent: false, destination: Route.recovery.root } };
  const { req } = context;
  const jwtToken = req.cookies.__rec_t;
  const ip = (req.headers['x-real-ip'] as string) || sanitizeIP(req.socket.remoteAddress as string);
  const token = verifyRecoveryJWT(ip, jwtToken, 'reset');

  if (token === false) {
    return redirect;
  }

  return { props: {} };
};
