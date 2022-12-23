import { SwitchProps } from 'types/mantine';
import useCustomFormik from '@hooks/Formik';
import { Switch as MantineSwitch } from '@mantine/core';

function Switch(props: SwitchProps) {
  const { label, name, ...rest } = props;
  const formik = useCustomFormik(name)[0];
  const checked = formik.values[name] as SwitchProps['checked'];

  return (
    <MantineSwitch
      label={label}
      name={name}
      checked={checked}
      onChange={(event) => formik.setFieldValue(name, event.currentTarget.checked)}
      onBlur={formik.handleBlur}
      {...rest}
    />
  );
}

export default Switch;
