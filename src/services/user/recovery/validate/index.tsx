import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type PayloadType = Pick<User, 'email'> & { code: string };
type ResData = { errorCount: number };
export type ResponseType = Response<ResData> | null;

const validate = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'POST',
      url: API.V1.user.recovery.code,
      payload,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default validate;
