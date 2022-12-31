import { z } from 'zod';
import Link from 'next/link';
import { memo } from 'react';
import { User } from 'types/user';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { getFullName } from '@utils/username';
import { Action } from '@contexts/User/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import FormController from '@components/common/ui/Form';
import createSession from '@services/user/session/create';
import { Anchor, Button, Group, Text } from '@mantine/core';
import useStyles from './LoginForm.styles';

type FieldValues = Pick<User, 'email' | 'password'>;

function LoginForm() {
  const router = useRouter();
  const { dispatch } = useUser();
  const { classes } = useStyles();

  const methods = useForm<FieldValues>({
    resolver: zodResolver(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    ),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    const { email, password } = data;
    const { setError } = methods;
    const isEmail = z.string().email().safeParse(email).success;

    if (!isEmail || password === '') {
      setError('email', { message: '你輸入的電子郵件地址並未與帳號連結！' });
      return null;
    }

    const [result, error] = await createSession({ email, password });

    if (result == null || error) {
      router.push('/500', { pathname: router.pathname });
      return null;
    }

    if (result.status === 'failed') {
      setError('email', { message: '你輸入的電子郵件地址並未與帳號連結！' });
      return null;
    }

    const { firstName, lastName, ...rest } = result.data;
    const fullName = getFullName(firstName, lastName);

    dispatch({ type: Action.FETCH_SUCCESS, payload: { firstName, lastName, fullName, ...rest } });
    return null;
  });

  const hasError = methods.formState.errors.email !== undefined;

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <FormController control="text-input" name="email" label="Email" />
        <FormController
          control="password-input"
          name="password"
          label={
            <Group position="apart">
              <Text>Password</Text>
              <Anchor
                component={Link}
                href={Route.recovery.root}
                size="sm"
                className={classes.anchor}
              >
                Forgot password?
              </Anchor>
            </Group>
          }
          mt={hasError ? 30 : 10}
        />

        <Button type="submit" loading={methods.formState.isSubmitting} fullWidth mt={25}>
          Sign in
        </Button>
      </form>
    </FormProvider>
  );
}

export default memo(LoginForm);
