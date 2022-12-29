import { Summary } from 'types/corpus';
import { Dispatch, SetStateAction } from 'react';

export type HelperButtonProps = {
  showPos: boolean;
  setShowPos: Dispatch<SetStateAction<boolean>>;
  numberofHits: Summary['numberOfHits'];
};
