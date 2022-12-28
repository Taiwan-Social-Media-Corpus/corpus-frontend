import API from '@config/api';
import { Response } from 'types';
import { Media } from 'types/corpus';
import request from '@utils/request';
import { QueryClient, useQuery } from '@tanstack/react-query';

type ResponseType = Response<Media> | null;

const QUERY_KEY = 'media';

const fetchMedia = (apiType: 'root' | 'external') => async () => {
  const url = API.V1.corpus.media[apiType];
  return request({ url, method: 'GET' });
};

const useMedia = () => {
  const { data, isLoading, isError } = useQuery<ResponseType, any>({
    queryKey: [QUERY_KEY],
    queryFn: fetchMedia('root'),
  });

  return { media: data, isMediaLoading: isLoading, isMediaError: isError };
};

const usePrefetchMedia = async (client: QueryClient) =>
  client.prefetchQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchMedia('external'),
  });

export { useMedia, usePrefetchMedia };
