import useCustomFormik from '@hooks/Formik';
import { SegmentedControlProps } from 'types/mantine';
import { createStyles, SegmentedControl as MantineSegmentedControl } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },

  active: {
    backgroundImage: 'linear-gradient(52deg, rgb(28, 126, 214) 3%, rgb(34, 184, 207) 97%)',
  },

  control: {
    border: '0 !important',
  },

  labelActive: {
    color: `${theme.white} !important`,
  },
}));

function SegmentedControl(props: SegmentedControlProps) {
  const { classes } = useStyles();
  const { label, options, name, ...rest } = props;
  const formik = useCustomFormik(name)[0];
  const fieldValue = formik.values[name] as SegmentedControlProps['value'];

  return (
    <MantineSegmentedControl
      radius="xl"
      classNames={classes}
      name={name}
      value={fieldValue}
      onChange={(value) => formik.setFieldValue(name, value)}
      onBlur={() => formik.setFieldTouched(name, true)}
      {...rest}
      data={options}
    />
  );
}

export default SegmentedControl;
