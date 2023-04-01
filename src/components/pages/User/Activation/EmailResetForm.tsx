import { z } from 'zod';
import useForm from '@hooks/Form';
import { User } from 'types/user';
import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { closeAllModals } from '@mantine/modals';
import { IconCircleCheck } from '@tabler/icons-react';
import resetEmail from '@services/user/activation/email';
import { Button, Text, Group, Stack, useMantineTheme } from '@mantine/core';

type FieldValues = Pick<User, 'email'>;

function EmailResetForm() {
  const router = useRouter();
  const theme = useMantineTheme();
  const color = theme.colors.blue[9];
  const [success, setSuccess] = useState(false);

  const [Form, methods] = useForm<FieldValues>({
    defaultValues: { email: '' },
    onSubmit: async (data): Promise<any> => {
      const { email } = data;
      const [result, error] = await resetEmail({ email });

      if (result == null || error) {
        return router.push('/500', { pathname: router.pathname });
      }

      if (result.status === 'failed') {
        switch (result.msg) {
          case 'identical':
            return methods.setError('email', { message: '請輸入新的 email' });
          case 'email unavailable':
            return methods.setError('email', { message: '電子郵件無法使用或已經有人使用。' });
          default:
            return methods.setError('email', { message: '超出寄信限制' });
        }
      }

      setSuccess(true);

      const timeout = setTimeout(() => closeAllModals(), 1000);
      clearTimeout(timeout);

      return null;
    },
    schema: z.object({
      email: z.string().min(1, '必填').email('請確認 email 格式'),
    }),
    controllers: {
      email: {
        label: '電子信箱',
        name: 'email',
        control: 'text-input',
        withAsterisk: true,
      },
    },
  });

  return success ? (
    <Stack align="center" spacing={10}>
      <IconCircleCheck size={80} stroke={1.5} color={theme.colors.teal[7]} />
      <Text color={color} weight="bold" size="xl">
        您已成功更改電子信箱
      </Text>
      <Text color={color} weight="bold" size="xl">
        請至信箱收信:
      </Text>
      <Text color={color} weight="bold" size="xl">
        {methods.getValues('email')}
      </Text>
    </Stack>
  ) : (
    <Form>
      <Group mt={30} sx={{ justifyContent: 'flex-end' }}>
        <Button
          sx={{
            '&:hover': {
              background: '#ccd0d5',
            },
            backgroundColor: '#ccc',
            color: 'black',
          }}
          onClick={() => closeAllModals()}
        >
          取消
        </Button>
        <Form.Button loading={methods.formState.isSubmitting}>確認</Form.Button>
      </Group>
    </Form>
  );
}

export default memo(EmailResetForm);
