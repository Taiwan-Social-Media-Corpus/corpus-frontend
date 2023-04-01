import { z } from 'zod';
import useForm from '@hooks/Form';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { memo, SetStateAction } from 'react';
import { Group, Button, Stack, Text } from '@mantine/core';
import { openModal, closeAllModals } from '@mantine/modals';
import identify from '@services/user/root/update/email/identify';
import Validation from './Validation';

type Props = {
  originalEmail: string;
  setModify: (value: SetStateAction<boolean>) => void;
};

function Edit(props: Props) {
  const { originalEmail, setModify } = props;
  const router = useRouter();

  const [Form, methods] = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: '',
      password: '',
    },
    controllers: {
      email: { control: 'text-input', name: 'email', label: '新電子郵件地址', withAsterisk: true },
      password: {
        control: 'password-input',
        name: 'password',
        label: '為了安全起見，輸入密碼才能繼續',
        withAsterisk: true,
      },
    },
    onSubmit: async (data) => {
      const { email, password } = data;
      const { setError, reset } = methods;
      const [result, error] = await identify({ email, password });

      if (result == null || error) {
        return router.push(Route.serverError, { pathname: router.pathname, query: router.query });
      }

      if (result.status === 'failed') {
        switch (result.msg) {
          case 'invalid password':
            return setError('password', { message: '請輸入有效的密碼，然後再試一次。' });
          case 'email unavailable':
            return setError('email', { message: '電子郵件無法使用或已經有人使用。' });
          case 'exceeded email rate':
            return setError('email', { message: '超過信件寄送上限，請於 24 小時後再試。' });
          default:
            return null;
        }
      }
      reset();

      openModal({
        title: (
          <>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan('xs')]: {
                  fontSize: 15,
                },
              })}
              ml={17}
            >
              請輸入驗證碼
            </Text>
          </>
        ),
        zIndex: 9999,
        overlayProps: {
          opacity: 0.55,
          blur: 3,
        },
        children: <Validation handleCloseModal={closeAllModals} />,
        onClose: () => {
          setModify(false);
        },
      });
      return null;
    },
    schema: z.object({
      password: z.string().min(1, '必填！'),
      email: z
        .string()
        .min(1, '必填！')
        .email('請確認 email 格式')
        .refine((data) => data !== originalEmail, '您未更改您的電子郵件'),
    }),
  });

  return (
    <Stack>
      <Form />
      <Group mt={20} position="right">
        <Button
          sx={{
            '&:hover': {
              background: '#ccd0d5',
            },
            backgroundColor: '#ccc',
            color: 'black',
          }}
          onClick={() => setModify(false)}
        >
          取消
        </Button>
        <Form.Button loading={methods.formState.isSubmitting}>確認</Form.Button>
      </Group>
    </Stack>
  );
}

export default memo(Edit);
