import API from '@config/api';
import { User } from 'types/user';
import request from '@utils/request';
import { Response, Optional } from 'types';

type PayloadType = Omit<User, 'uid' | 'enabled'>;
type ResponseType = Response<Optional<User, 'email'>> | null;

const createUser = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'POST',
      url: API.V1.user.root,
      payload,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default createUser;
