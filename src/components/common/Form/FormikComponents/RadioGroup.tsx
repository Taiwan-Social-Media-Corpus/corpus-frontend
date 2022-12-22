import { Radio } from '@mantine/core';
import useCustomFormik from '@hooks/Formik';
import { RadioGroupProps } from 'types/mantine';

function RadioGroup(props: RadioGroupProps) {
  const { label, name, options, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);
  const radioValue = formik.values[name] as RadioGroupProps['value'];

  return (
    <Radio.Group
      label={label}
      value={radioValue}
      error={hasError}
      onChange={(value) => {
        formik.setFieldValue(name, value);
      }}
      onBlur={() => formik.setFieldTouched(name, true)}
      {...rest}
    >
      {options.map((option, index) => (
        <Radio key={`${option.label}-${index}`} value={option.value} label={option.label} />
      ))}
    </Radio.Group>
  );
}

export default RadioGroup;
