import { createContext, useContext } from 'react';
import { ConcordanceContextType } from './types';

const ConcordanceContext = createContext({} as ConcordanceContextType);

const useConcordance = () => useContext(ConcordanceContext);

export default useConcordance;
