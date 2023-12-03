import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { InputFields } from './input-fields';
import { UseFormRegisterReturn } from 'react-hook-form';
import UFPInput from '../ufp/ufp-input/UFPInput';
import CFPInput from '../cfp/cfp-input/CFPInput';
import DataList from './DataList';

type UFPInputBoxProps = {
  name: InputFields;
  inputRef?: React.RefObject<HTMLInputElement>;
  register?: (name: InputFields) => UseFormRegisterReturn<InputFields>;
  errorMessage?: string;
};

const InputBox = ({ name, inputRef, register, errorMessage }: UFPInputBoxProps) => {
  const countriesList = useSelector((store: RootState) => store.countries.countriesList);

  return (
    <>
      <div className="input-box">
        {inputRef && <UFPInput name={name} inputRef={inputRef} />}

        {register && <CFPInput name={name} register={register} />}

        <label htmlFor={name}>{name}: </label>

        <p className="error-message">{errorMessage}</p>
      </div>

      {name === InputFields.country && <DataList list={countriesList} />}
    </>
  );
};

export default InputBox;
