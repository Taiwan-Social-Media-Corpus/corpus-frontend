import { useRouter } from 'next/router';
import { getFullName } from '@utils/username';
import useSession from '@services/user/session';
import { createContext, useContext, useEffect } from 'react';
import { UserContextType, ContextProviderProps } from './types';
import { Action } from './actions';
import useUserReducer from './reducer';

const UserContext = createContext({} as UserContextType);
const useUser = () => useContext(UserContext);

const UserProvider = ({ children }: ContextProviderProps) => {
  const router = useRouter();
  const [user, dispatch] = useUserReducer();
  const { data, error, isLoading, mutate } = useSession();

  useEffect(() => {
    if (isLoading) {
      return dispatch({ type: Action.PENDING });
    }

    if (error || !data) {
      dispatch({ type: Action.FETCH_ERROR });
      router.push('/500', { pathname: router.pathname });
      return undefined;
    }

    if (!data.data) {
      return dispatch({ type: Action.FETCH_FAILED });
    }

    const { uid, email, firstName, lastName, enabled } = data.data;

    return dispatch({
      type: Action.FETCH_SUCCESS,
      payload: {
        uid,
        email,
        firstName,
        lastName,
        fullName: getFullName(firstName, lastName),
        enabled,
      },
    });
  }, [data]);

  return <UserContext.Provider value={{ user, dispatch, mutate }}>{children}</UserContext.Provider>;
};

export { useUser, UserProvider };
