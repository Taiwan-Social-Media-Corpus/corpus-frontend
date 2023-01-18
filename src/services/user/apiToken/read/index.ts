import useSWR from 'swr';
import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { APIToken } from 'types/user';

type ResponseType = Response<APIToken[]> | null;

const fetchAPITokens = (url: string, cookies: string): Promise<ResponseType> =>
  request({ url, method: 'GET', headers: { Cookie: cookies! } });

const useAPITokens = () => {
  const { data, error, mutate } = useSWR<APIToken[]>(API.V1.user.apiToken.external);

  return { apiTokens: data, isLoading: !error && !data, error, mutate };
};

export { fetchAPITokens, useAPITokens };
