import { memo } from 'react';
import dynamic from 'next/dynamic';
import { ControllerProps } from 'types';

function FormikController(props: ControllerProps) {
  const { control } = props;

  switch (control) {
    case 'select': {
      const Select = dynamic(() => import('./FormikComponents/Select'));
      return <Select {...props} />;
    }
    case 'switch': {
      const Switch = dynamic(() => import('./FormikComponents/Switch'));
      return <Switch {...props} />;
    }
    case 'text-input': {
      const TextInput = dynamic(() => import('./FormikComponents/TextInput'));
      return <TextInput {...props} />;
    }
    case 'radio-group': {
      const RadioGroup = dynamic(() => import('./FormikComponents/RadioGroup'));
      return <RadioGroup {...props} />;
    }
    case 'multi-select': {
      const MultiSelect = dynamic(() => import('./FormikComponents/MultiSelect'));
      return <MultiSelect {...props} />;
    }
    case 'number-input': {
      const NumberInput = dynamic(() => import('./FormikComponents/NumberInput'));
      return <NumberInput {...props} />;
    }
    case 'checkbox-group': {
      const CheckboxGroup = dynamic(() => import('./FormikComponents/CheckboxGroup'));
      return <CheckboxGroup {...props} />;
    }
    case 'segmented-control': {
      const SegmentedControl = dynamic(() => import('./FormikComponents/SegmentedControl'));
      return <SegmentedControl {...props} />;
    }
    default:
      return null;
  }
}

export default memo(FormikController);
