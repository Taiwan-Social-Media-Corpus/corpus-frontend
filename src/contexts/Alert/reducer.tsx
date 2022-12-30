import { useReducer } from 'react';
import { IconCircleCheck } from '@tabler/icons';
import AlertAction from './actions';
import { ActionType, AlertContextInitialState } from './types';

const initialState: AlertContextInitialState = {
  status: '',
  msg: '',
  icon: undefined,
};

const reducer = (state: AlertContextInitialState, action: ActionType) => {
  switch (action.type) {
    case AlertAction.RESEND:
      return {
        ...state,
        status: 'notif',
        msg: action.payload,
        icon: <IconCircleCheck size={16} />,
      };
    case AlertAction.EXCESS_EMAIL:
      return { ...state, status: 'alert', msg: action.payload };
    case AlertAction.EXPIRE:
      return { ...state, status: 'warning', msg: action.payload };
    case AlertAction.ERROR:
      return { ...state, status: 'warning', msg: action.payload };
    case AlertAction.EXCESS_ERROR:
      return { ...state, status: 'alert', msg: action.payload };
    case AlertAction.RESET:
      return initialState;
    default:
      return state;
  }
};

const useAlertReducer = () => useReducer(reducer, initialState);

export default useAlertReducer;
