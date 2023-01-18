import useSWR from 'swr';
import API from '@config/api';
import request from '@utils/request';
import { ResponseType } from './types';

const useSession = () => {
  const { data, error, mutate } = useSWR<ResponseType>(API.V1.user.session, (url) =>
    request({ url, method: 'GET' })
  );

  return { data: data?.data, isLoading: !error && !data, error, mutate };
};

export default useSession;
