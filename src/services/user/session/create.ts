import API from '@config/api';
import request from '@utils/request';
import { Payload, ResponseType } from './types';

const createSession = async (payload: Payload): Promise<[ResponseType, any]> => {
  try {
    const result = await request<Payload, ResponseType>({
      method: 'POST',
      url: API.V1.user.session,
      payload,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default createSession;
