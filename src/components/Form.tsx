import { useState } from 'react';

// interfaces
import { Field } from '../interfaces/field';

// components
import FieldsForm from './FieldsForm';
import Fields from './Fields';

const Form = ({}: FormProps) => {
  const [fields, setFields] = useState<Field[]>([]);

  return (
    <div className="mt-10 flex justify-center gap-8">
      <FieldsForm fields={fields} setFields={setFields} />
      <Fields fields={fields} />
    </div>
  );
};

type FormProps = {};

export default Form;
