// interfaces
import { Field as IField } from '../interfaces/field';

// components
import Field from './Field';

const Fields = ({ fields }: FieldsProps) => {
  return (
    <form className="flex flex-col space-y-4 w-1/3">
      {fields.length <= 0 ? (
        <p className="text-center text-lg text-slate-50 font-bold">
          Not fields yet
        </p>
      ) : (
        fields.map(values => <Field key={values.id} data={values} />)
      )}
    </form>
  );
};

type FieldsProps = {
  fields: IField[];
};

export default Fields;
