import Route from '@config/routes';
import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import AlertAction from '@contexts/Alert/actions';
import { Anchor, Modal, Title } from '@mantine/core';
import PinContainer from '@components/common/ui/Pin';
import { getRedirectURL } from '@utils/url/redirect';
import activateUser from '@services/user/activation/activate';
import { combineToString } from '@components/common/ui/Form/components/utils/pin';
import EmailResetForm from './EmailResetForm';
import { handleResendCode, handleErrorCode } from './utils';

function ActivationForm() {
  const router = useRouter();
  const { mutate } = useUser();
  const [opened, setOpened] = useState(false);

  return (
    <PinContainer
      helper={(alert, dispatch) => (
        <>
          <Modal
            title={<Title order={2}>更改 Email 地址</Title>}
            onClose={() => setOpened(false)}
            opened={opened}
            zIndex={999999}
          >
            <EmailResetForm handleClose={() => setOpened(false)} />
          </Modal>
          <Anchor<'button'> weight={700} onClick={() => handleResendCode(dispatch, router)}>
            重新傳送通知
          </Anchor>{' '}
          或{' '}
          <Anchor<'button'> weight={700} onClick={() => setOpened(true)}>
            更改 Email 地址
          </Anchor>
        </>
      )}
      onSubmit={async (context, alert, dispatchAlert) => {
        const code = combineToString(context.getValues('code'));
        const [result, error] = await activateUser({ code });

        if (result == null || error) {
          router.push('/500', { pathname: router.basePath, query: router.query });
          return null;
        }

        if (result.status === 'failed') {
          context.resetField('code');
          return handleErrorCode(result, dispatchAlert);
        }

        mutate();
        dispatchAlert({ type: AlertAction.RESET });

        const redirectURL = getRedirectURL(`${Route.recovery}?redirect`, router.asPath);

        if (redirectURL) router.push(redirectURL);

        return null;
      }}
    />
  );
}
export default memo(ActivationForm);
