import { useContext } from 'react';

import { FieldsContext, IFieldsContext } from '../providers/FieldsProvider';

const useFields = () => {
  return useContext(FieldsContext) as IFieldsContext;
};

export default useFields;
