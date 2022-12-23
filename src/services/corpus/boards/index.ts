import API from '@config/api';
import { Response } from 'types';
import request from '@utils/request';
import { Boards } from 'types/corpus';

type ResponseType = Response<Boards> | null;

const getBoards = async (): Promise<[ResponseType, any]> => {
  try {
    const result = await request({ url: API.V1.corpus.boards, method: 'GET' });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

export default getBoards;
