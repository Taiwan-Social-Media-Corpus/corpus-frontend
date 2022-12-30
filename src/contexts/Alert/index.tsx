import { createContext, useContext } from 'react';
import useAlertReducer from './reducer';
import { AlertContextType, ContextProviderProps } from './types';

const AlertContext = createContext({} as AlertContextType);

const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }: ContextProviderProps) => {
  const [alert, dispatch] = useAlertReducer();

  return <AlertContext.Provider value={{ alert, dispatch }}>{children}</AlertContext.Provider>;
};

export { useAlert, AlertProvider };
