import { FormikProps } from 'formik';

const resetBoardsField =
  <T>(dependentField: keyof T, formik: FormikProps<T>) =>
  (value: string) => {
    formik.setFieldValue(dependentField as string, value);
    formik.setFieldValue('boards', '');
    formik.setFieldTouched('boards', false);
  };

export default resetBoardsField;
