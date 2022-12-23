import useCustomFormik from '@hooks/Formik';
import { CheckboxGroupProps } from 'types/mantine';
import { Checkbox as MantineCheckbox } from '@mantine/core';

function CheckboxGroup(props: CheckboxGroupProps) {
  const { label, name, options, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);
  const checkboxValue = formik.values[name] as CheckboxGroupProps['value'];

  return (
    <MantineCheckbox.Group
      label={label}
      value={checkboxValue}
      onChange={(value) => formik.setFieldValue(name, value)}
      onBlur={() => formik.setFieldTouched(name, true)}
      error={hasError}
      {...rest}
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
