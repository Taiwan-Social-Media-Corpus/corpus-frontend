import FormController from '@components/common/ui/Form';
import { useFormContext, UseFormReturn } from 'react-hook-form';
import { FieldValues } from '@components/pages/User/SignUp/types';

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

export function validateNameStep(methods: UseFormReturn<FieldValues, any>) {
  const isFirstNameError = methods.watch('firstName') === '';
  const isLastNameError = methods.watch('lastName') === '';

  if (isFirstNameError && isLastNameError) {
    methods.setError('firstName', { message: '必填！' });
    methods.setError('lastName', { message: '必填！' });
    return false;
  }

  if (isFirstNameError || isLastNameError) {
    const errorField = isFirstNameError ? 'firstName' : 'lastName';
    methods.setError(errorField, { message: '必填！' });
    return false;
  }

  return true;
}

export default NameStep;
