import { TrashIcon } from '@heroicons/react/solid';

// interfaces
import { Field as IField } from '../interfaces/field';

// hooks
import useFields from '../hooks/useFields';

const Field = ({
  data: { id, label, type, component, values }
}: FieldProps) => {
  const { fields, setFields } = useFields();

  const handleRemove = () => {
    const updatedFields = fields.filter(value => value.id !== id);
    setFields([...updatedFields]);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-slate-50">
        {label}
      </label>

      <div className="flex items-center space-x-4">
        {component === 'text' && (
          <input
            id={id}
            type={type}
            className="appearance-none px-4 py-2 rounded"
          />
        )}
        {component === 'select' && (
          <select
            id={id}
            className="appearance-none px-4 py-2 rounded bg-white capitalize"
          >
            {values &&
              values.map(value => (
                <option key={value} value={value} className="capitalize">
                  {value}
                </option>
              ))}
          </select>
        )}
        {component === 'radio' && (
          <div className="flex space-x-2">
            {values &&
              values.map(value => (
                <div key={value} className="space-x-1">
                  <input type="radio" id={value} />
                  <label htmlFor={value} className="text-slate-50">
                    {value}
                  </label>
                </div>
              ))}
          </div>
        )}
        <div>
          <button type="button" onClick={handleRemove}>
            <TrashIcon className="text-slate-50 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

type FieldProps = {
  data: IField;
};

export default Field;
