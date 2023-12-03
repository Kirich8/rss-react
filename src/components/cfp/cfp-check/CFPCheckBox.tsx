import { UseFormRegisterReturn } from 'react-hook-form';

enum CheckBox {
  conditions = 'conditions',
}

type CFPCheckBoxProps = {
  register: (name: CheckBox) => UseFormRegisterReturn<CheckBox>;
  errorMessage?: string;
};

const CFPCheckBox = ({ register, errorMessage }: CFPCheckBoxProps) => {
  return (
    <div className="check-box">
      <label>Accept T&C: </label>
      <input type="checkbox" {...register(CheckBox.conditions)} />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default CFPCheckBox;
