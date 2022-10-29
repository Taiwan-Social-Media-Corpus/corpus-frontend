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
    case 'text-input': {
      const TextInput = dynamic(() => import('./FormikComponents/TextInput'));
      return <TextInput {...props} />;
    }
    default:
      return null;
  }
}

export default memo(FormikController);
