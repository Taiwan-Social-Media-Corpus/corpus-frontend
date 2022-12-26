import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Concordance, ConcordanceRequestBody } from 'types/corpus';
import { UseQueryOptions } from '@tanstack/react-query';

type ResponseType = Response<Concordance>;

export function buildOptions(payload: ConcordanceRequestBody, prefetch: boolean = false) {
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
