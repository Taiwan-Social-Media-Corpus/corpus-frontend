import Route from '@config/routes';
import type { NextRouter } from 'next/router';
import AlertAction from '@contexts/Alert/actions';
import { AlertContextType } from '@contexts/Alert/types';
import resendCode from '@services/user/activation/resend';

async function handleResendCode(dispatch: AlertContextType['dispatch'], router: NextRouter) {
  const [result, error] = await resendCode();

  if (result == null || error) {
    return router.push(Route.serverError, { pathname: router.pathname });
  }

  if (result.msg === 'exceeded email rate') {
    return dispatch({
      type: AlertAction.EXCESS_EMAIL,
      payload: '超過信件寄送上限，請於 24 小時後再試。',
    });
  }

  if (result.msg === 'resent') {
    return dispatch({
      type: AlertAction.RESEND,
      payload: '已重新傳送驗證碼信至您的信箱。',
    });
  }

  return null;
}

export default handleResendCode;
