import { UseFormRegisterReturn } from 'react-hook-form';
import { InputFields } from '../../input-box/input-fields';
import { useState } from 'react';
import PasswordStrenght from '../../password-strenght/PasswordStrenght';

type CFPInputProps = {
  name: InputFields;
  register: (name: InputFields) => UseFormRegisterReturn<InputFields>;
};

const CFPInput = ({ name, register }: CFPInputProps) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        id={name}
        value={value}
        type={name === InputFields.password || name === InputFields.confirmPassword ? 'password' : 'text'}
        {...register(name)}
        autoComplete="off"
        placeholder={name}
        list={name === InputFields.country ? 'list-of-countries' : ''}
        onInput={(event) => setValue(event.currentTarget.value)}
      />
      {name === InputFields.password && <PasswordStrenght password={value} />}
    </>
  );
};

export default CFPInput;
