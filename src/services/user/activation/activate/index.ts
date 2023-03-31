import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type PayloadType = { code: string };

type ResData = Pick<User, 'uid' | 'activated'> & {
  errorCount: number;
  resendCount: number;
};

export type ResponseType = Response<ResData> | null;

const activateUser = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'POST',
      url: API.V1.user.activation.root,
      payload,
    });
    return [result, null];
  } catch (error: any) {
    return [null, error];
  }
};

export default activateUser;
