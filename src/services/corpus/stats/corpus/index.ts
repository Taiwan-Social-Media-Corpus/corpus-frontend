import useSWR from 'swr';
import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { CorpusStats } from 'types/corpus';

type ResponseType = Response<CorpusStats> | null;

const fetchCorpusStats = (url: string): Promise<ResponseType> => request({ url, method: 'GET' });

const useCorpusStats = () => {
  const url = API.V1.corpus.stats.corpus;
  const { data, error } = useSWR<CorpusStats>(url);

  return { corpusStats: data, isCorpusStatsLoading: !error && !data, corpusStatsError: error };
};

export { useCorpusStats, fetchCorpusStats };
