import { useAlert } from '@contexts/Alert';
import { PinHelperProps } from 'types/form';

const PinHelper = (props: PinHelperProps) => {
  const { alert, dispatch } = useAlert();
  const { helper } = props;

  if (typeof helper === 'function') {
    return helper(alert, dispatch);
  }
  return helper;
};

export default PinHelper;
