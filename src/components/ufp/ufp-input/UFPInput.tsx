import { useState } from 'react';
import { InputFields } from '../../input-box/input-fields';
import PasswordStrenght from '../../password-strenght/PasswordStrenght';

type UFPInputProps = {
  name: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

const UFPInput = ({ name, inputRef }: UFPInputProps) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        id={name}
        value={value}
        type={name === InputFields.password || name === InputFields.confirmPassword ? 'password' : 'text'}
        ref={inputRef}
        autoComplete="off"
        placeholder={name}
        list={name === InputFields.country ? 'list-of-countries' : ''}
        onInput={(event) => setValue(event.currentTarget.value)}
      />
      {name === InputFields.password && <PasswordStrenght password={value} />}
    </>
  );
};

export default UFPInput;
