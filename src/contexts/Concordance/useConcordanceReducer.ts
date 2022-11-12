import { useReducer } from 'react';
import Action from './actions';
import { InitialState, ActionType } from './types';

const initialState: InitialState = {
  pending: true,
  error: '',
  data: null,
};

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case Action.FETCH_SUCCESS:
      return { ...state, pending: false, data: action.payload };
    case Action.FETCH_ERROR:
      return { ...state, pending: false, error: action.payload };
    case Action.PENDING:
      return { ...state, pending: true };
    default:
      return state;
  }
};

const useConcordanceReducer = () => useReducer(reducer, initialState);

export default useConcordanceReducer;
