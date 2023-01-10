import useSWR from 'swr';
import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Boards } from 'types/corpus';

type ResponseType = Response<Boards> | null;

const fetchBoards = (url: string): Promise<ResponseType> => request({ url, method: 'GET' });

const useBoards = () => {
  const { data, error } = useSWR<Boards>(API.V1.corpus.boards);

  return { boards: data, isLoading: !error && !data, error };
};

export { useBoards, fetchBoards };
