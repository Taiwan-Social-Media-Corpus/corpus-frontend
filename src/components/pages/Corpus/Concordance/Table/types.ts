import { Concordance } from 'types/corpus';
import { Dispatch, SetStateAction } from 'react';
import { PaginationState } from '@tanstack/react-table';

export type TableProps = {
  data: Concordance;
  showPos: boolean;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
  fetchNumber: number;
};
