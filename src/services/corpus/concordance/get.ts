import useSWR from 'swr';
import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Concordance, ConcordanceRequestBody } from 'types/corpus';

export type ResponseType = Response<Concordance> | null;

const useConcordance = (payload: ConcordanceRequestBody) => {
  const { data, error, mutate } = useSWR<ResponseType>(API.V1.corpus.concordance.root, (url) =>
    request({ url, method: 'POST', payload })
  );

  return { concordance: data, isLoading: !error && !data, isError: error, mutate };
};

export default useConcordance;
