import { useFormContext } from 'react-hook-form';
import FormController from '@components/common/ui/Form';
import { IconUser, IconMail, IconLock } from '@tabler/icons-react';

function NameStep() {
  const { formState } = useFormContext();
  const hasLastNameError = formState.errors.lastName !== undefined;

  return (
    <>
      <FormController
        control="text-input"
        name="lastName"
        id="mobile-lastName"
        label="姓氏"
        withAsterisk
        data-autofocus
      />
      <FormController
        control="text-input"
        id="mobile-firstName"
        name="firstName"
        label="名字"
        withAsterisk
        mt={hasLastNameError ? 25 : 10}
      />
    </>
  );
}

function EmailStep() {
  return (
    <FormController
      control="text-input"
      name="email"
      label="Email"
      id="mobile-email"
      mt="md"
      withAsterisk
    />
  );
}

function PasswordStep() {
  const { formState } = useFormContext();
  const hasPasswordError = formState.errors.password !== undefined;

  return (
    <>
      <FormController
        control="password-input"
        name="password"
        id="mobile-password"
        label="密碼"
        mt="md"
        withAsterisk
      />
      <FormController
        control="password-input"
        name="confirmPassword"
        id="mobile-confirmPassword"
        label="確認密碼"
        withAsterisk
        mt={hasPasswordError ? 25 : 10}
      />
    </>
  );
}

const steppers = [
  {
    label: '姓名',
    icon: <IconUser size={18} />,
    step: <NameStep />,
  },

  {
    label: '信箱',
    icon: <IconMail size={18} />,
    step: <EmailStep />,
  },
  {
    label: '密碼',
    icon: <IconLock size={18} />,
    step: <PasswordStep />,
  },
];

export default steppers;
