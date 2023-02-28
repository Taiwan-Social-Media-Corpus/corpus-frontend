import API from '@config/api';
import { Response } from 'types';
import { User } from 'types/user';
import request from '@utils/request';

type PayloadType = Pick<User, 'email' | 'password'>;
type ResData = { privateToken: string };
type ResponseType = Response<ResData> | undefined;

const identify = async (payload: PayloadType) => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'POST',
      url: API.V1.user.email.root,
      payload,
    });
    return [result, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
};

export default identify;
