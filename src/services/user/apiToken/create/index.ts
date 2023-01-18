import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { APIToken } from 'types/user';

type ResData = Pick<APIToken, 'apiToken'>;
type ResponseType = Response<ResData> | null;

const createAPIToken = async (): Promise<[ResponseType, any]> => {
  try {
    const result = await request<undefined, ResponseType>({
      url: API.V1.user.apiToken.root,
      method: 'POST',
      toJson: true,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default createAPIToken;
