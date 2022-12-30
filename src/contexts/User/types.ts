import { Optional } from 'types';
import { User } from 'types/user';
import { KeyedMutator } from 'swr';
import { Action } from './actions';

type ResData = Pick<User, 'uid' | 'email' | 'firstName' | 'lastName' | 'enabled'>;

export type UserData = Optional<ResData, 'email' | 'firstName' | 'lastName'> & {
  fullName?: string;
};

export type InitialState = {
  pending: boolean;
  error: string;
  data: UserData;
};

type FetchErrorAction = {
  type: Action.FETCH_ERROR;
};

type FetchFailedAction = {
  type: Action.FETCH_FAILED;
};

type LogoutAction = {
  type: Action.LOGOUT;
};

type FetchSuccessAction = {
  type: Action.FETCH_SUCCESS;
  payload: UserData;
};

type PendingAction = {
  type: Action.PENDING;
};

export type ActionType =
  | FetchSuccessAction
  | LogoutAction
  | FetchFailedAction
  | FetchErrorAction
  | PendingAction;

export type UserContextType = {
  user: InitialState;
  mutate: KeyedMutator<any>;
  dispatch: React.Dispatch<ActionType>;
};

export type ContextProviderProps = {
  children: React.ReactNode;
};
