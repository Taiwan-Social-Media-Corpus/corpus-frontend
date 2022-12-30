import { useController } from 'react-hook-form';
import { NumberInputProps } from 'types/form';
import { NumberInput as MantineNumberInput } from '@mantine/core';
import ErrorMessage from './utils/error';

function NumberInput(props: NumberInputProps) {
  const { label, name, ...rest } = props;
  const {
    field,
    fieldState: { error: fieldError },
    formState: { defaultValues },
  } = useController({ name });

  const error = fieldError ? (
    <ErrorMessage>{fieldError.message?.toString()}</ErrorMessage>
  ) : undefined;

  const { onChange, ...restField } = field;

  return (
    <MantineNumberInput
      label={label}
      onChange={(value) => onChange(value ?? defaultValues?.[name])}
      error={error}
      {...rest}
      {...restField}
    />
  );
}

export default NumberInput;
