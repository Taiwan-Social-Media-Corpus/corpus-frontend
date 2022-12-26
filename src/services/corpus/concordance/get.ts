import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Concordance, ConcordanceRequestBody } from 'types/corpus';
import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

type ResponseType = Response<Concordance>;

function buildOptions(payload: ConcordanceRequestBody, prefetch: boolean = false) {
  const page = prefetch ? payload.page + 1 : payload.page;

  const options: UseQueryOptions<ResponseType> = {
    queryKey: ['concordance', page],
    queryFn: () =>
      request({
        url: API.V1.corpus.concordance.root,
        method: 'POST',
        payload: { ...payload, page },
      }),
  };

  if (!prefetch) {
    options.keepPreviousData = true;
    options.staleTime = 5000;
  }

  return options;
}

const useConcordance = (payload: ConcordanceRequestBody) => {
  const options = buildOptions(payload);
  return useQuery<ResponseType, any>(options);
};

const usePrefetchConcordance = (client: QueryClient, payload: ConcordanceRequestBody) => {
  const options = buildOptions(payload, true);
  return client.prefetchQuery(options);
};

export { useConcordance, usePrefetchConcordance };
