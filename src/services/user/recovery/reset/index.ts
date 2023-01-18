import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type PayloadType = Pick<User, 'password'>;
type ResponseType = Response | null;

const reset = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'POST',
      url: API.V1.user.recovery.password,
      payload,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default reset;
