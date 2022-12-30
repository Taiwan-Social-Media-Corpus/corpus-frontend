import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type PayloadType = Pick<User, 'email'>;

type ResponseType = Response | null;

const identify = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request({ method: 'POST', url: API.V1.user.recovery.root, payload });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default identify;
