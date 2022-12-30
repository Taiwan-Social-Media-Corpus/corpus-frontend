import { memo } from 'react';
import { ControllerProps } from 'types/form';
import {
  Select,
  Switch,
  TextInput,
  RadioGroup,
  MultiSelect,
  NumberInput,
  CheckboxGroup,
  PasswordInput,
} from './components';

function FormController(props: ControllerProps) {
  const { control } = props;

  switch (control) {
    case 'select':
      return <Select {...props} />;
    case 'switch':
      return <Switch {...props} />;
    case 'text-input':
      return <TextInput {...props} />;
    case 'radio-group':
      return <RadioGroup {...props} />;
    case 'multi-select':
      return <MultiSelect {...props} />;
    case 'number-input':
      return <NumberInput {...props} />;
    case 'checkbox-group':
      return <CheckboxGroup {...props} />;
    case 'password-input':
      return <PasswordInput {...props} />;
    default:
      return null;
  }
}

export default memo(FormController);
