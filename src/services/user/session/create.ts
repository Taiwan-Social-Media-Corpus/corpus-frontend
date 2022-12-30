import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type Payload = Pick<User, 'email' | 'password'>;
type ResData = Pick<User, 'uid' | 'email' | 'firstName' | 'lastName' | 'enabled'>;
type ResponseType = Response<ResData> | null;

const createSession = async (payload: Payload): Promise<[ResponseType, any]> => {
  try {
    const result = await request({ method: 'POST', url: API.V1.user.session, payload });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default createSession;
