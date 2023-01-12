import { z } from 'zod';
import { memo } from 'react';
import useForm from '@hooks/Form';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { Group, Button } from '@mantine/core';
import reset from '@services/user/recovery/reset';

type FieldValues = {
  password: string;
  confirmPassword: string;
};

function ResetForm() {
  const router = useRouter();
  const [Form, methods] = useForm<FieldValues>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    schema: z
      .object({
        password: z.string().min(1, '必填！'),
        confirmPassword: z.string().min(1, '必填！'),
      })
      .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: '與密碼不相符',
        path: ['confirmPassword'],
      }),
    controllers: {
      password: {
        control: 'password-input',
        name: 'password',
        label: '新密碼',
        withAsterisk: true,
      },
      confirmPassword: {
        control: 'password-input',
        name: 'confirmPassword',
        label: '確認新密碼',
        withAsterisk: true,
      },
    },
    onSubmit: async (data) => {
      const { password } = data;
      const [result, error] = await reset({ password });

      if (result == null || error) {
        router.push(Route.serverError, { pathname: router.asPath });
        return null;
      }

      if (result.status === 'failed') {
        router.push(Route.recovery.root);
        return null;
      }

      router.replace(Route.login);
      return null;
    },
  });

  return (
    <>
      <Form />
      <Group position="right" mt={30}>
        <Button
          sx={{
            '&:hover': {
              background: '#ccd0d5',
            },
            backgroundColor: '#ccc',
            color: 'black',
          }}
          onClick={() => router.replace(Route.login)}
        >
          取消
        </Button>
        <Form.Button loading={methods.formState.isSubmitting}>確認</Form.Button>
      </Group>
    </>
  );
}

export default memo(ResetForm);
