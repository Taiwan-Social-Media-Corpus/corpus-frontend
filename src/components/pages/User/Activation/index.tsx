import { memo } from 'react';
import Route from '@config/routes';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { Anchor, Title } from '@mantine/core';
import AlertAction from '@contexts/Alert/actions';
import PinContainer from '@components/common/ui/Pin';
import { getRedirectURL } from '@utils/url/redirect';
import { openModal, closeAllModals } from '@mantine/modals';
import activateUser from '@services/user/activation/activate';
import { combineToString } from '@components/common/ui/Form/components/utils/pin';
import { handleResendCode, handleErrorCode } from './utils';

const EmailResetForm = dynamic(() => import('./EmailResetForm'));

function ActivationForm() {
  const router = useRouter();
  const { mutate } = useUser();

  return (
    <PinContainer
      helper={(alert, dispatch) => (
        <>
          <Anchor<'button'> weight={700} onClick={() => handleResendCode(dispatch, router)}>
            重新傳送通知
          </Anchor>{' '}
          或{' '}
          <Anchor<'button'>
            weight={700}
            onClick={() =>
              openModal({
                title: <Title order={2}>更改 Email 地址</Title>,
                zIndex: 9999,
                overlayOpacity: 0.55,
                children: <EmailResetForm handleClose={closeAllModals} />,
              })
            }
          >
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
