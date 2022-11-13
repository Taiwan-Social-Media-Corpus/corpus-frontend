import useSWR from 'swr';
import { API } from '@config/api';
import request from '@utils/request';
import { Response, RequestBody, BlacklabResponse } from 'types';

type ResponseType = Response<BlacklabResponse> | null;

const getConcordance = (payload: RequestBody) => {
  const { data, error, mutate } = useSWR<ResponseType>(API.corpus, (url) =>
    request({ url, method: 'POST', payload })
  );

  return { concordance: data, isLoading: !error && !data, isError: error, mutate };
};

export default getConcordance;
