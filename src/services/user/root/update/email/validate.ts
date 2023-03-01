import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';

type PayloadType = { code: string };
export type ResponseType = Response | undefined;

const validate = async (payload: PayloadType) => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'PUT',
      url: API.V1.user.email.validate,
      payload,
    });
    return [result, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
};

export default validate;
