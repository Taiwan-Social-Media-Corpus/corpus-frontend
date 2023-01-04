import FormController from '@components/common/ui/Form';
import { UseFormSetError, UseFormWatch } from 'react-hook-form';
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

export function validateEmailStep(
  watch: UseFormWatch<FieldValues>,
  setError: UseFormSetError<FieldValues>
) {
  const isEmailError = watch('email') === '';

  if (isEmailError) {
    setError('email', { message: '必填！' });
    return false;
  }

  return true;
}

export default EmailStep;
