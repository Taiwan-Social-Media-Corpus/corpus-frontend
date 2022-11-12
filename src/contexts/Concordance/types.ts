import { BlacklabResponse } from 'types';
import Action from './actions';

export type InitialState = {
  pending: boolean;
  error: string;
  data: BlacklabResponse | null;
};

type FetchErrorAction = {
  type: Action.FETCH_ERROR;
  payload: string;
};

type FetchSuccessAction = {
  type: Action.FETCH_SUCCESS;
  payload: BlacklabResponse;
};

type PendingAction = {
  type: Action.PENDING;
};

export type ActionType = FetchSuccessAction | FetchErrorAction | PendingAction;
