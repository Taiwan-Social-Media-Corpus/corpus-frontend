import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { User, APIToken } from 'types/user';

type PayloadType = Pick<User, 'password'> & Pick<APIToken, 'apiToken'>;
type ResponseType = Response | null;

const deleteAPIToken = async (payload: PayloadType): Promise<[ResponseType, any]> => {
  try {
    const result = await request<PayloadType, ResponseType>({
      url: API.V1.user.apiToken.root,
      payload,
      method: 'DELETE',
      toJson: true,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default deleteAPIToken;
