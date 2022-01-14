import { createContext, ReactNode, useState } from 'react';

// interfaces
import { Field } from '../interfaces/field';

export interface IFieldsContext {
  fields: Field[];
  setFields: (values: Field[]) => void;
}

export const FieldsContext = createContext<IFieldsContext | null>(null);

const FieldsProvider = ({ children }: FieldsProviderProps) => {
  const [fields, setFields] = useState<Field[]>([]);
  return (
    <FieldsContext.Provider value={{ fields: fields, setFields: setFields }}>
      {children}
    </FieldsContext.Provider>
  );
};

type FieldsProviderProps = {
  children: ReactNode;
};

export default FieldsProvider;
