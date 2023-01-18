import { useReducer } from 'react';
import { Action } from './actions';
import { InitialState, ActionType } from './types';

const initialState: InitialState = {
  pending: true,
  error: '',
  data: { uid: '', enabled: false },
};

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case Action.FETCH_ERROR:
      return { ...state, pending: false, error: action.payload };
    case Action.FETCH_SUCCESS:
      return { ...state, pending: false, data: action.payload ?? initialState.data };
    case Action.FETCH_FAILED:
      return { ...state, pending: false };
    case Action.PENDING:
      return { ...state, pending: true };
    case Action.LOGOUT:
      return { ...initialState, pending: false };
    default:
      return state;
  }
};

const useUserReducer = () => useReducer(reducer, initialState);

export default useUserReducer;
