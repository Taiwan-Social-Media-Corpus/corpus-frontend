import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';

type ResponseType = Response | undefined;

const resendCode = async () => {
  try {
    const result = await request<undefined, ResponseType>({
      method: 'POST',
      url: API.V1.user.email.resend,
    });
    return [result, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
};

export default resendCode;
