import { Dispatch, ReactNode } from 'react';
import AlertAction from './actions';

export type AlertContextInitialState = {
  status: string;
  msg?: string;
  icon?: ReactNode;
};

type Action<T> = {
  type: T;
  payload: string;
};

export type ActionType =
  | Omit<Action<AlertAction.RESET>, 'payload'>
  | Action<AlertAction.RESEND>
  | Action<AlertAction.EXCESS_EMAIL>
  | Action<AlertAction.EXPIRE>
  | Action<AlertAction.ERROR>
  | Action<AlertAction.EXCESS_ERROR>;

export type AlertContextType = {
  alert: AlertContextInitialState;
  dispatch: Dispatch<ActionType>;
};

export type ContextProviderProps = {
  children: ReactNode;
};
