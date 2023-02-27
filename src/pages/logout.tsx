import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@contexts/User';
import { NextPageWithControl } from 'types';
import { Action } from '@contexts/User/actions';
import deleteSession from '@services/user/session/delete';

const Logout: NextPageWithControl = () => {
  const router = useRouter();
  const { dispatch } = useUser();

  useEffect(() => {
    const logoutFunc = async () => {
      await deleteSession();
      dispatch({ type: Action.LOGOUT });
    };
    logoutFunc();
  }, [router, dispatch]);

  return null;
};

Logout.control = {
  auth: true,
};

export default Logout;
