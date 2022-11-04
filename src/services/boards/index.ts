import useSWR from 'swr';
import API from '@config/api';
import request from '@utils/request';
import { Response, Boards } from 'types';

type ResponseType = Response<Boards> | null;

const getBoards = () => {
  const { data, error } = useSWR<ResponseType>(API.boards, (url) =>
    request({ url, method: 'GET' })
  );

  return { boards: data, isLoading: !error && !data, isError: error };
};

export default getBoards;
