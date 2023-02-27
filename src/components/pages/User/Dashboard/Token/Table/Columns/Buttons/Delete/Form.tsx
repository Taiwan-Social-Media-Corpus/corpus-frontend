import { z } from 'zod';
import useForm from '@hooks/Form';
import { User } from 'types/user';
import Route from '@config/routes';
import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { IconCircleCheck } from '@tabler/icons-react';
import { useAPITokens } from '@services/user/apiToken/read';
import deleteAPIToken from '@services/user/apiToken/delete';
import { Group, Button, Stack, useMantineTheme, Text } from '@mantine/core';
import { HelperButtonProps } from '../types';

type Props = HelperButtonProps & { handleClose: () => void };
type FieldValues = Pick<User, 'password'>;

function DeleteForm(props: Props) {
  const { apiToken, handleClose } = props;
  const router = useRouter();
  const { mutate } = useAPITokens();
  const [success, setSuccess] = useState(false);
  const theme = useMantineTheme();
  const color = theme.colors.blue[9];

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
      const { password } = data;
      const [result, error] = await deleteAPIToken({ apiToken, password });

      if (result === null || error) {
        return router.push(Route.serverError, { pathname: router.pathname });
      }

      if (result.status === 'failed') {
        return methods.setError('password', { message: '請輸入有效的密碼，然後再試一次。' });
      }

      mutate();
      setSuccess(true);
      setTimeout(() => {
        router.replace(router.asPath);
        handleClose();
      }, 1000);
      return null;
    },
  });

  return success ? (
    <Stack align="center" spacing={10}>
      <IconCircleCheck size={80} stroke={1.5} color={theme.colors.teal[7]} />
      <Text color={color} weight="bold" size="xl">
        已刪除
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
          onClick={handleClose}
        >
          取消
        </Button>
        <Form.Button loading={methods.formState.isSubmitting}>確認</Form.Button>
      </Group>
    </Form>
  );
}

export default memo(DeleteForm);
