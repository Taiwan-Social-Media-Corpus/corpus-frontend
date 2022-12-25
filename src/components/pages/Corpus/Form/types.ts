import { Boards, ConcordanceRequestBody } from 'types/corpus';

export type CorpusFormProps = { boards: Boards };

export type FormValues = Omit<ConcordanceRequestBody, 'page' | 'start' | 'end' | 'windowSize'> & {
  start: number;
  end: number;
  windowSize: number;
};
