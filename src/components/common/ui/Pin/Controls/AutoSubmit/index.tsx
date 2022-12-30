import { useEffect } from 'react';
import { PinCode } from 'types/form';
import { useWatch } from 'react-hook-form';
import { useAlert } from '@contexts/Alert';
import AlertAction from '@contexts/Alert/actions';
import { hasEmptyString } from '@components/common/ui/Form/components/utils/pin';
import { AlertContextType } from '@contexts/Alert/types';
import Alert from '../Alert';

type Props = {
  onSubmit: (
    alert: AlertContextType['alert'],
    dispatchAlert: AlertContextType['dispatch']
  ) => any | Promise<any>;
};

function AutoSubmit(props: Props) {
  const { onSubmit } = props;
  const { alert, dispatch } = useAlert();
  const code = useWatch<PinCode>({ name: 'code' });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!hasEmptyString(code)) {
      timeout = setTimeout(() => onSubmit(alert, dispatch), 300);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [code]);

  return alert.status ? (
    <Alert
      content=""
      onClose={() => dispatch({ type: AlertAction.RESET })}
      type={alert.status}
      title={alert.msg}
      mt={25}
      icon={alert.icon}
    />
  ) : null;
}

export default AutoSubmit;
