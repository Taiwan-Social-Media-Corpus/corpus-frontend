import { z } from 'zod';
import { memo } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { Group, Button } from '@mantine/core';
import { closeAllModals } from '@mantine/modals';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider, FormState } from 'react-hook-form';
import FormController from '@components/common/ui/Form';
import submit from '../../submit';
import { FieldValues } from '../../types';
import { signUpSchema, defaultValues } from '../../schema';

type Props = { isModal: boolean };

function DesktopSignUpForm(props: Props) {
  const { isModal } = props;
  const router = useRouter();
  const { dispatch } = useUser();
  const methods = useForm<FieldValues>({
    resolver: zodResolver(
      z
        .object(signUpSchema)
        .refine(({ password, confirmPassword }) => password === confirmPassword, {
          message: '與密碼不相符',
          path: ['confirmPassword'],
        })
    ),
    defaultValues,
    mode: 'onTouched',
  });

  const onSubmit = methods.handleSubmit((data) => {
    if (isModal) {
      closeAllModals();
    }
    submit(data, router, dispatch);
  });

  const { errors } = methods.formState;
  const hasError = (key: keyof FormState<FieldValues>['errors']) => errors[key] !== undefined;
  const hasNameError = hasError('firstName') || hasError('lastName');
  const hasEmailError = hasError('email');
  const hasPasswordError = hasError('password');

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Group grow mb={hasNameError ? 'lg' : 'md'}>
          <FormController
            control="text-input"
            name="lastName"
            label="姓氏"
            withAsterisk
            data-autofocus
          />
          <FormController control="text-input" name="firstName" label="名字" withAsterisk />
        </Group>

        <FormController
          control="text-input"
          name="email"
          label="Email"
          mt="md"
          withAsterisk
          mb={hasEmailError ? 'lg' : 'md'}
        />
        <FormController
          control="password-input"
          name="password"
          label="Password"
          mt="md"
          mb={hasPasswordError ? 30 : 'md'}
          withAsterisk
        />
        <FormController
          control="password-input"
          name="confirmPassword"
          label="確認密碼"
          mt="md"
          withAsterisk
        />
        <FormController
          control="checkbox-group"
          name="termsWatched"
          label=""
          mt="xl"
          options={[{ label: '我已同意', value: '1' }]}
        />

        <Button type="submit" loading={methods.formState.isSubmitting} fullWidth mt={25}>
          Sign up
        </Button>
      </form>
    </FormProvider>
  );
}

export default memo(DesktopSignUpForm);
