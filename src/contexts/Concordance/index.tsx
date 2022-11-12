import { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ConcordancePageProps } from 'types';
import getConcordance from '@services/concordance';
import Action from './actions';
import useConcordanceReducer from './useConcordanceReducer';
import { ConcordanceContextType, ContextProviderProps } from './types';

const ConcordanceContext = createContext({} as ConcordanceContextType);

const useConcordance = () => useContext(ConcordanceContext);

const ConcordanceProvider = (props: ContextProviderProps & ConcordancePageProps) => {
  const { children, payload } = props;
  const router = useRouter();
  const [concordanceData, dispatch] = useConcordanceReducer();
  const { data, isError, isLoading, mutate } = getConcordance(payload);

  useEffect(() => {
    if (isLoading) {
      return dispatch({ type: Action.PENDING });
    }

    if (isError || !data || data.msg === 'internal server error') {
      dispatch({ type: Action.FETCH_ERROR, payload: 'internal server error' });
      router.push('/500', { pathname: router.pathname });
      return undefined;
    }

    if (data.status === 'failed') {
      switch (data.msg) {
        case 'no hits':
          return dispatch({ type: Action.FETCH_ERROR, payload: 'no hits' });
        default:
          return dispatch({ type: Action.FETCH_ERROR, payload: data.msg as string });
      }
    }

    return dispatch({ type: Action.FETCH_SUCCESS, payload: data.data });
  }, [data]);

  return (
    <ConcordanceContext.Provider value={{ concordance: concordanceData, dispatch, mutate }}>
      {children}
    </ConcordanceContext.Provider>
  );
};

export { useConcordance, ConcordanceProvider };
