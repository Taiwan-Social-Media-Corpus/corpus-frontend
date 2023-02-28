import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';

type PayloadType = { oldPassword: string; newPassword: string };
type ResponseType = Response | undefined;

const resetPassword = async (payload: PayloadType) => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'PUT',
      url: API.V1.user.password,
      payload,
    });
    return [result, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
};

export default resetPassword;
