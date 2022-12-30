import { SwitchProps } from 'types/form';
import { useController } from 'react-hook-form';
import { Switch as MantineSwitch } from '@mantine/core';

function Switch(props: SwitchProps) {
  const { label, name, ...rest } = props;
  const {
    field,
    formState: { defaultValues },
  } = useController({ name });
  const { onChange, value: checked, ...restField } = field;

  return (
    <MantineSwitch
      id={name}
      label={label}
      checked={checked}
      onChange={(value) => onChange(value ?? defaultValues?.[name])}
      {...rest}
      {...restField}
    />
  );
}

export default Switch;
