import useSWR from 'swr';
import API from '@config/api';
import request from '@utils/request';
import { ResponseType } from './types';

const useSession = () => {
  const { data, error, mutate } = useSWR<ResponseType>(API.V1.user.session, async (url) => {
    const response = await request({ url, method: 'GET', toJson: false });
    if (response.status === 204) return {};
    const result = await response.json();
    return result;
  });

  return { data: data?.data, isLoading: !error && !data, error, mutate };
};

export default useSession;
