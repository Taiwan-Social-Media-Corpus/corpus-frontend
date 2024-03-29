import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';

type ResponseType = Response | null;

const resendCode = async (): Promise<[ResponseType, any]> => {
  try {
    const result = await request<undefined, ResponseType>({
      method: 'POST',
      url: API.V1.user.activation.resend,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default resendCode;
