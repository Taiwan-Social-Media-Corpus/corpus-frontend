import FormController from '@components/common/ui/Form';
import { FieldValues } from '@components/pages/User/SignUp/types';
import { useFormContext, UseFormSetError, UseFormWatch } from 'react-hook-form';

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

export function validateNameStep(
  watch: UseFormWatch<FieldValues>,
  setError: UseFormSetError<FieldValues>
) {
  const isFirstNameError = watch('firstName') === '';
  const isLastNameError = watch('lastName') === '';

  if (isFirstNameError && isLastNameError) {
    setError('firstName', { message: '必填！' });
    setError('lastName', { message: '必填！' });
    return false;
  }

  if (isFirstNameError || isLastNameError) {
    const errorField = isFirstNameError ? 'firstName' : 'lastName';
    setError(errorField, { message: '必填！' });
    return false;
  }

  return true;
}

export default NameStep;
