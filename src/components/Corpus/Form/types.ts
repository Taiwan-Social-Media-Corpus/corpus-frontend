import { Boards, RequestBody } from 'types';

export type CorpusFormProps = { boards: Boards };

export type FormValues = Omit<RequestBody, 'page' | 'start' | 'end' | 'windowSize'> & {
  start: number;
  end: number;
  windowSize: number;
};
