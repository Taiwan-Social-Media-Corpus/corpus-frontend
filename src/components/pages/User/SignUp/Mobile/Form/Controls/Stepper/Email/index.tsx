import { UseFormReturn } from 'react-hook-form';
import FormController from '@components/common/ui/Form';
import { FieldValues } from '@components/pages/User/SignUp/types';

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

export function validateEmailStep(methods: UseFormReturn<FieldValues, any>) {
  const isEmailError = methods.watch('email') === '';

  if (isEmailError) {
    methods.setError('email', { message: '必填！' });
    return false;
  }

  return true;
}

export default EmailStep;
