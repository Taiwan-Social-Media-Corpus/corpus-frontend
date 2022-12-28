import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { CorpusStats } from 'types/corpus';
import { QueryClient, useQuery } from '@tanstack/react-query';

type ResponseType = Response<CorpusStats> | null;

const QUERY_KEY = 'corpusStats';

const fetchCorpusStats = (apiType: 'root' | 'external') => async () => {
  const url = `${API.V1.corpus.stats.corpus[apiType]}?type=word`;
  return request({ url, method: 'GET' });
};

const useCorpusStats = () => {
  const { data, isLoading, isError } = useQuery<ResponseType, any>({
    queryKey: [QUERY_KEY],
    queryFn: fetchCorpusStats('root'),
  });

  return { corpusStats: data, isCorpusStatsLoading: isLoading, isCorpusStatsError: isError };
};

const usePrefetchCorpusStats = async (client: QueryClient) =>
  client.prefetchQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchCorpusStats('external'),
  });

export { useCorpusStats, usePrefetchCorpusStats };
