import { z } from 'zod';
import { useState } from 'react';
import useForm from '@hooks/Form';
import { User } from 'types/user';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { UserData } from '@contexts/User/types';
import { closeAllModals } from '@mantine/modals';
import { IconCircleCheck } from '@tabler/icons-react';
import update from '@services/user/root/update/profile';
import { Group, Button, Stack, useMantineTheme, Text } from '@mantine/core';

type Props = { payload: Pick<UserData, 'firstName' | 'lastName'> };
type FieldValues = Pick<User, 'password'>;

function Validation(props: Props) {
  const { payload } = props;
  const { mutate } = useUser();
  const [success, setSuccess] = useState(false);
  const theme = useMantineTheme();
  const color = theme.colors.blue[9];
  const router = useRouter();

  const [Form, methods] = useForm<FieldValues>({
    defaultValues: { password: '' },
    schema: z.object({
      password: z.string().min(1, '必填！'),
    }),
    controllers: {
      password: {
        control: 'password-input',
        name: 'password',
        label: 'Password',
        withAsterisk: true,
      },
    },
    onSubmit: async (data) => {
      const [result, error] = await update({ ...payload, ...data });

      if (result == null || error) {
        return router.push(Route.serverError, { pathname: router.asPath });
      }

      if (result.status === 'failed') {
        switch (result.msg) {
          case 'invalid password':
            return methods.setError('password', { message: '請輸入有效的密碼，然後再試一次。' });
          default:
            return router.push(Route.serverError, { pathname: router.asPath });
        }
      }

      mutate();
      setSuccess(true);
      setTimeout(() => {
        router.push(Route.dashboard.account, { query: router.query });
        closeAllModals();
      }, 1000);
      return null;
    },
  });

  return success ? (
    <Stack align="center" spacing={10}>
      <IconCircleCheck size={80} stroke={1.5} color={theme.colors.teal[7]} />
      <Text color={color} weight="bold" size="xl">
        修改成功
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

export default Validation;
