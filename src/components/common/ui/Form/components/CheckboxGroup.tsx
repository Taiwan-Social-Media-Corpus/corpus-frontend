import { useController } from 'react-hook-form';
import { CheckboxGroupProps } from 'types/mantine';
import { Checkbox as MantineCheckbox } from '@mantine/core';
import { ErrorMessage } from './utils';

function CheckboxGroup(props: CheckboxGroupProps) {
  const { label, name, options, ...rest } = props;
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
    <MantineCheckbox.Group
      id={name}
      label={label}
      onChange={(value) => onChange(value ?? defaultValues?.[name])}
      error={error}
      {...rest}
      {...restField}
    >
      {options.map((option, index) => (
        <MantineCheckbox
          key={`${option.label}-${index}`}
          label={option.label}
          value={option.value}
        />
      ))}
    </MantineCheckbox.Group>
  );
}

export default CheckboxGroup;
