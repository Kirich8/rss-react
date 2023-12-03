import { UseFormRegisterReturn } from 'react-hook-form';

enum Select {
  gender = 'gender',
}

type CFPSelectBoxProps = {
  register: (name: Select) => UseFormRegisterReturn<Select>;
  errorMessage?: string;
};

const CFPSelectBox = ({ register, errorMessage }: CFPSelectBoxProps) => {
  return (
    <div className="select-box">
      <label>Gender: </label>
      <select {...register(Select.gender)}>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default CFPSelectBox;
