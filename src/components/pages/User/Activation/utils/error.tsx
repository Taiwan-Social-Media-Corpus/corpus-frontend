import AlertAction from '@contexts/Alert/actions';
import { AlertContextType } from '@contexts/Alert/types';
import { ResponseType } from '@services/user/activation/activate';

function handleErrorCode(
  result: Exclude<ResponseType, null>,
  dispatch: AlertContextType['dispatch']
) {
  switch (result.msg) {
    case 'expire':
      return dispatch({
        type: AlertAction.EXPIRE,
        payload: '驗證碼無效或是已到期，請重新收信。',
      });
    case 'error':
      return dispatch({
        type: AlertAction.ERROR,
        payload: '驗證碼錯誤，請重新輸入。',
      });
    case 'maximum retry attempts':
      return dispatch({
        type: AlertAction.EXCESS_ERROR,
        payload: '錯誤次數過多，請稍後再試。',
      });
    case 'exceeded email rate':
      return dispatch({
        type: AlertAction.EXCESS_EMAIL,
        payload: '超過信件寄送上限，請於 24 小時後再試。',
      });
    default:
      return null;
  }
}

export default handleErrorCode;
