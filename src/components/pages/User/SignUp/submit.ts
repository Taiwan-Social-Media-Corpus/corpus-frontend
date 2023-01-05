import { Dispatch } from 'react';
import { PartialBy } from 'types';
import Route from '@config/routes';
import { NextRouter } from 'next/router';
import { Action } from '@contexts/User/actions';
import { ActionType } from '@contexts/User/types';
import createUser from '@services/user/root/create';
import { FieldValues } from './types';

async function handleOnSubmit(
  data: PartialBy<FieldValues, 'termsWatched'>,
  router: NextRouter,
  dispatch: Dispatch<ActionType>
) {
  const { confirmPassword, termsWatched, ...payload } = data;
  const [result, error] = await createUser(payload);

  if (result == null || error) {
    router.push(Route.serverError, { pathname: router.pathname });
    return null;
  }

  if (result.status === 'failed' && result.msg === 'recovery') {
    router.push(Route.recovery.validation);
    return null;
  }

  dispatch({ type: Action.FETCH_SUCCESS, payload: result.data });
  return null;
}

export default handleOnSubmit;
