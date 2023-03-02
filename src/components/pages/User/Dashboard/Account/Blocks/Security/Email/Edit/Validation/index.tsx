import { memo } from 'react';
import Route from '@config/routes';
import { Anchor } from '@mantine/core';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import AlertAction from '@contexts/Alert/actions';
import PinContainer from '@components/common/ui/Pin';
import validate from '@services/user/root/update/email/validate';
import { combineToString } from '@components/common/ui/Form/components/utils/pin';
import { handleResendCode, handleErrorCode } from './utils';

type Props = { handleCloseModal: () => void };

function Validation(props: Props) {
  const { handleCloseModal } = props;
  const { mutate } = useUser();
  const router = useRouter();

  return (
    <PinContainer
      helper={(alert, dispatch) => (
        <Anchor<'button'> weight={700} onClick={() => handleResendCode(dispatch, router)}>
          重新傳送通知
        </Anchor>
      )}
      onSubmit={async (context, alert, dispatchAlert) => {
        const payload = combineToString(context.getValues('code'));
        const [result, error] = await validate({ code: payload });

        if (result == null || error) {
          return router.push('/500', { pathname: router.asPath });
        }

        if (result.status === 'failed') {
          context.resetField('code');
          return handleErrorCode(result, dispatchAlert);
        }

        mutate();
        dispatchAlert({ type: AlertAction.RESET });
        handleCloseModal();
        return router.push({ pathname: Route.dashboard.account, query: { tab: 'security' } });
      }}
    />
  );
}

export default memo(Validation);
