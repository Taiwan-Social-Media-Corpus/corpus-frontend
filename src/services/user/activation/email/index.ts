import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type PayloadType = Pick<User, 'email'>;

type ResponseType = Response | null;

const resetEmail = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'POST',
      url: API.V1.user.activation.email,
      payload,
    });
    return [result, null];
  } catch (error: any) {
    return [null, error];
  }
};

export default resetEmail;
