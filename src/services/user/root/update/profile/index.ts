import API from '@config/api';
import { User } from 'types/user';
import request from '@utils/request';
import { Response, Optional } from 'types';

type PayloadType = Optional<
  Pick<User, 'firstName' | 'lastName' | 'password'>,
  'firstName' | 'lastName'
>;
type ResponseType = Response | undefined;

const update = async (payload: PayloadType) => {
  try {
    const result = await request<PayloadType, ResponseType>({
      method: 'PUT',
      url: API.V1.user.root,
      payload,
    });
    return [result, null] as const;
  } catch (error) {
    return [null, error] as const;
  }
};

export default update;
