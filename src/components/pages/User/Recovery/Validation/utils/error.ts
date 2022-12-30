import Route from '@config/routes';
import { NextRouter } from 'next/router';
import AlertAction from '@contexts/Alert/actions';
import { AlertContextType } from '@contexts/Alert/types';
import { ResponseType } from '@services/user/recovery/validate';

const handleError = (
  result: Exclude<ResponseType, null>,
  dispatch: AlertContextType['dispatch'],
  router: NextRouter
) => {
  switch (result.msg) {
    case 'expire': {
      dispatch({
        type: AlertAction.EXPIRE,
        payload: '驗證碼已過期。',
      });
      const timeout = setTimeout(() => {
        router.replace(Route.recovery.root);
      }, 1500);
      clearTimeout(timeout);
      return null;
    }
    case 'error': {
      dispatch({
        type: AlertAction.ERROR,
        payload: '驗證碼錯誤，請重新輸入。',
      });
      return null;
    }
    case 'too many errors': {
      dispatch({
        type: AlertAction.EXCESS_ERROR,
        payload: '錯誤次數過多。',
      });
      const timeout = setTimeout(() => {
        router.replace(Route.recovery.root);
      }, 1500);
      clearTimeout(timeout);
      return null;
    }
    case 'exceeded sending rate': {
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
    case 'unauthorized': {
      router.replace(Route.recovery.root);
      return null;
    }
    default:
      return null;
  }
};

export default handleError;
