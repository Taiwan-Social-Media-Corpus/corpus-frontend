import { z } from 'zod';
import useForm from '@hooks/Form';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { Group, Button, Box } from '@mantine/core';
import resetPassword from '@services/user/root/update/password';

type FieldValues = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

function Password() {
  const router = useRouter();
  const { mutate } = useUser();

  const [Form, methods] = useForm<FieldValues>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    schema: z
      .object({
        oldPassword: z.string().min(1, '必填！'),
        newPassword: z.string().min(8, '請設定 8 個字元以上的密碼'),
        confirmPassword: z.string().min(1, '必填！'),
      })
      .refine(({ newPassword, confirmPassword }) => newPassword === confirmPassword, {
        message: '與密碼不相符',
        path: ['confirmPassword'],
      }),
    controllers: {
      oldPassword: {
        control: 'password-input',
        name: 'oldPassword',
        label: '目前的密碼',
      },
      newPassword: {
        control: 'password-input',
        name: 'newPassword',
        label: '新密碼',
      },
      confirmPassword: {
        control: 'password-input',
        name: 'confirmPassword',
        label: '確認新密碼',
      },
    },
    onSubmit: async (data) => {
      const { oldPassword, newPassword } = data;
      const [result, error] = await resetPassword({ oldPassword, newPassword });

      if (result == null || error) {
        return router.push('/500', { pathname: router.asPath });
      }

      if (result.status === 'failed') {
        switch (result.msg) {
          case 'unchanged':
            return methods.setError('oldPassword', {
              message: '您最近用過這個密碼，請改用其他密碼。',
            });
          default:
            return methods.setError('oldPassword', { message: '請輸入有效的密碼，然後再試一次。' });
        }
      }

      mutate();
      router.push(router.asPath);
      return null;
    },
  });

  return (
    <Box
      sx={(theme) => ({
        width: '70%',
        [theme.fn.smallerThan('xs')]: {
          width: '100%',
          flexDirection: 'column',
        },
      })}
    >
      <Form />
      <Group position="right" mt={40}>
        <Button
          sx={{
            '&:hover': {
              background: '#ccd0d5',
            },
            backgroundColor: '#ccc',
            color: 'black',
          }}
          onClick={() => router.replace(router.asPath)}
        >
          取消
        </Button>
        <Form.Button loading={methods.formState.isSubmitting}>確認</Form.Button>
      </Group>
    </Box>
  );
}

export default Password;
