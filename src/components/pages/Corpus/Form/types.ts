import { ConcordanceRequestBody } from 'types/corpus';

export type FieldValues = Pick<
  ConcordanceRequestBody,
  'media' | 'word' | 'cqlEnable' | 'postType' | 'boards' | 'fetchNumber'
> & { start: number; end: number; windowSize: number };
