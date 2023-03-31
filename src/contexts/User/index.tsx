import { useRouter } from 'next/router';
import { getFullName } from '@utils/username';
import useSession from '@services/user/session';
import { createContext, useContext, useEffect } from 'react';
import { Action } from './actions';
import useUserReducer from './reducer';
import { UserContextType, ContextProviderProps } from './types';

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

    if (error) {
      dispatch({ type: Action.FETCH_ERROR, payload: error });
      router.push('/500', { pathname: router.pathname, query: router.query });
      return undefined;
    }

    if (!data) {
      return dispatch({ type: Action.FETCH_SUCCESS });
    }

    const { uid, email, firstName, lastName, activated } = data;

    return dispatch({
      type: Action.FETCH_SUCCESS,
      payload: {
        uid,
        email,
        firstName,
        lastName,
        fullName: getFullName(firstName, lastName),
        activated,
      },
    });
  }, [isLoading]);

  return <UserContext.Provider value={{ user, dispatch, mutate }}>{children}</UserContext.Provider>;
};

export { useUser, UserProvider };
