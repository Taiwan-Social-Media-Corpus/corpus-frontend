import Route from '@config/routes';
import { NextRouter } from 'next/router';
import AlertAction from '@contexts/Alert/actions';
import { AlertContextType } from '@contexts/Alert/types';
import resendCode from '@services/user/recovery/resend';

const handleResendCode = async (dispatch: AlertContextType['dispatch'], router: NextRouter) => {
  const [result, error] = await resendCode();

  if (result == null || error) {
    router.push('/500', { pathname: router.pathname });
    return null;
  }

  if (result.status === 'failed') {
    if (result.msg === 'exceeded email rate') {
      dispatch({
        type: AlertAction.EXCESS_EMAIL,
        payload: '超過信件寄送上限，請於 24 小時後再試。',
      });
      const timeout = setTimeout(() => {
        router.replace(Route.recovery.root);
      }, 1500);
      clearTimeout(timeout);
      return null;
    }
  }

  if (result.msg === 'resent') {
    dispatch({
      type: AlertAction.RESEND,
      payload: '已重新傳送驗證碼信至您的信箱。',
    });
    return null;
  }
  return null;
};

export default handleResendCode;
