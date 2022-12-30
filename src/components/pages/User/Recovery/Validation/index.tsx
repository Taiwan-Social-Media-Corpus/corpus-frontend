import { memo } from 'react';
import Route from '@config/routes';
import { Anchor } from '@mantine/core';
import { useRouter } from 'next/router';
import AlertAction from '@contexts/Alert/actions';
import PinContainer from '@components/common/ui/Pin';
import validate from '@services/user/recovery/validate';
import { combineToString } from '@components/common/ui/Form/components/utils/pin';
import { handleError, handleResendCode } from './utils';

function ValidationForm() {
  const router = useRouter();

  return (
    <PinContainer
      helper={(alert, dispatch) => (
        <>
          <Anchor<'button'> weight={700} onClick={() => handleResendCode(dispatch, router)}>
            重新傳送通知
          </Anchor>{' '}
          或{' '}
          <Anchor<'button'> weight={700} onClick={() => router.push(Route.login)}>
            取消
          </Anchor>
        </>
      )}
      onSubmit={async (context, alert, dispatchAlert) => {
        const code = combineToString(context.getValues('code'));
        const { email } = router.query as { email: string };

        const [result, error] = await validate({ email, code });

        if (result == null || error) {
          return router.push('/500', { pathname: router.asPath });
        }

        if (result.status === 'failed') {
          context.resetField('code');
          return handleError(result, dispatchAlert, router);
        }

        dispatchAlert({ type: AlertAction.RESET });

        return router.replace({
          pathname: Route.recovery.reset,
        });
      }}
    />
  );
}

export default memo(ValidationForm);
