import { UseFormRegisterReturn } from 'react-hook-form';
import { InputFields } from './input-fields';
import { countriesList } from '../../../utils/constants/countries-list';
import { useState } from 'react';
import { addPasswordStrenght } from '../../../utils/helpers/add-password-strenght';
import DataList from './DataList';

type CFPInputBoxProps = {
  name: InputFields;
  register: (name: InputFields) => UseFormRegisterReturn<InputFields>;
  errorMessage?: string;
};

const CFPInputBox = ({ name, register, errorMessage }: CFPInputBoxProps) => {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="input-box">
        <input
          value={value}
          type={name === InputFields.password || name === InputFields.confirmPassword ? 'password' : 'text'}
          {...register(name)}
          autoComplete="off"
          placeholder={name}
          list={name === InputFields.country ? 'list-of-countries' : ''}
          onInput={(event) => setValue(event.currentTarget.value)}
        />
        <label>{name}:</label>

        <p className="error-message">{errorMessage}</p>

        {name === InputFields.password && addPasswordStrenght(value)}
      </div>

      {name === InputFields.country && <DataList list={countriesList} />}
    </>
  );
};

export default CFPInputBox;
