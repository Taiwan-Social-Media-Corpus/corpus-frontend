import dynamic from 'next/dynamic';
import { ControllerProps } from 'types';

function FormikController(props: ControllerProps) {
  const { control } = props;

  switch (control) {
    case 'text-input': {
      const TextInput = dynamic(() => import('./FormikComponents/TextInput'));
      return <TextInput {...props} />;
    }
    default:
      return null;
  }
}

export default FormikController;
