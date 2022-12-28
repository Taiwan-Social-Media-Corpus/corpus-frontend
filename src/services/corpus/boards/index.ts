import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Boards } from 'types/corpus';
import { QueryClient, useQuery } from '@tanstack/react-query';

type ResponseType = Response<Boards> | null;

const QUERY_KEY = 'boards';

const fetchBoards = (apiType: 'root' | 'external') => async () => {
  const url = API.V1.corpus.boards[apiType];
  return request({ url, method: 'GET' });
};

const useBoards = () => {
  const { data, isLoading, isError } = useQuery<ResponseType, any>({
    queryKey: [QUERY_KEY],
    queryFn: fetchBoards('root'),
  });

  return { boards: data, isLoading, isError };
};

const usePrefetchBoards = async (client: QueryClient) =>
  client.prefetchQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchBoards('external'),
  });

export { useBoards, usePrefetchBoards };
