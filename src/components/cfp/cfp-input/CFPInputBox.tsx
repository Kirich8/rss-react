import { UseFormRegisterReturn } from 'react-hook-form';
import { InputFields } from './input-fields';
import { countriesList } from '../../../utils/constants/countries-list';
import DataList from './DataList';

type CFPInputBoxProps = {
  name: InputFields;
  register: (name: InputFields) => UseFormRegisterReturn<InputFields>;
  errorMessage?: string;
};

const CFPInputBox = ({ name, register, errorMessage }: CFPInputBoxProps) => {
  return (
    <>
      <div className="input-box">
        <input
          type={name === InputFields.password || name === InputFields.confirmPassword ? 'password' : 'text'}
          {...register(name)}
          autoComplete="off"
          placeholder={name}
          list={name === InputFields.country ? 'list-of-countries' : ''}
        />
        <label>{name}:</label>
        <p className="error-message">{errorMessage}</p>
      </div>

      {name === InputFields.country && <DataList list={countriesList} />}
    </>
  );
};

export default CFPInputBox;
