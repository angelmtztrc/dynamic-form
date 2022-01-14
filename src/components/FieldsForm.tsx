import { FormEvent, SyntheticEvent, useState } from 'react';
import { nanoid } from 'nanoid';

// interfaces
import { Field } from '../interfaces/field';

const FieldsForm = ({ fields, setFields }: FieldsFormProps) => {
  const [values, setValues] = useState<FormValues>({
    label: '',
    component: 'text',
    type: 'text',
    values: ''
  });

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!values.label) return;

    setFields([
      ...fields,
      {
        ...values,
        id: nanoid(10),
        values: values.values.split(',')
      }
    ]);

    setValues({
      label: '',
      component: 'text',
      type: 'text',
      values: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-1/3">
      <div className="flex flex-col space-y-2">
        <label htmlFor="labelField" className="text-slate-50">
          Field Label
        </label>
        <input
          id="labelField"
          name="label"
          value={values.label}
          type="text"
          onChange={handleChange}
          className="appearance-none px-4 py-2 rounded"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="componentField" className="text-slate-50">
          Field Component
        </label>
        <select
          id="componentField"
          name="component"
          value={values.component}
          onChange={handleChange}
          className="appearance-none px-4 py-2 rounded bg-white"
        >
          <option value="text">Text</option>
          <option value="select">Select</option>
          <option value="radio">Radio</option>
        </select>
      </div>

      {values.component === 'text' ? (
        <div className="flex flex-col space-y-2">
          <label htmlFor="typeField" className="text-slate-50">
            Field Type
          </label>
          <select
            id="typeField"
            name="type"
            value={values.type}
            onChange={handleChange}
            className="appearance-none px-4 py-2 rounded bg-white"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>
        </div>
      ) : (
        <div className="flex flex-col space-y-2">
          <label htmlFor="valuesField" className="text-slate-50">
            Values (Comma-separated)
          </label>
          <input
            id="valuesField"
            name="values"
            type="text"
            value={values.values}
            onChange={handleChange}
            className="appearance-none px-4 py-2 rounded"
          />
        </div>
      )}

      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        Add Field
      </button>
    </form>
  );
};

type FieldsFormProps = {
  fields: Field[];
  setFields: (values: Field[]) => void;
};

interface FormValues extends Omit<Field, 'id' | 'values'> {
  values: string;
}

export default FieldsForm;
