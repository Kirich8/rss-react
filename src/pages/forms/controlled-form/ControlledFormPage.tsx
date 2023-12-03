import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/yup/schema';
import { InputFields, inputFieldsList } from '../../../components/input-box/input-fields';
import { IFormProps } from '../../../utils/interfaces/IFormProps';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeDataLastForm, updateListsForms } from '../../../store/formsSlice';
import InputBox from '../../../components/input-box/InputBox';
import CFPSelectBox from '../../../components/cfp/cfp-select/CFPSelectBox';
import CFPCheckBox from '../../../components/cfp/cfp-check/CFPCheckBox';
import CFPImageBox from '../../../components/cfp/cfp-image/CFPImageBox';

type ControlledFormPageProps = {
  setNewClass: Dispatch<SetStateAction<string>>;
};

const ControlledFormPage = ({ setNewClass }: ControlledFormPageProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormProps>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const submitForm = (formData: IFormProps) => {
    const reader = new FileReader();

    reader.readAsDataURL(formData.image[0]);
    reader.onload = () => {
      dispatch(
        changeDataLastForm({
          name: formData.name,
          age: formData.age,
          email: formData.email,
          country: formData.country,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          gender: formData.gender,
          conditions: formData.conditions,
          image: reader.result,
        })
      );
      dispatch(updateListsForms());
    };

    setNewClass('new');
    navigate('/');
  };

  return (
    <>
      <div className="form">
        <h2 className="form__title">Controled Form</h2>
        <form className="form__content" onSubmit={handleSubmit(submitForm)}>
          {inputFieldsList.map((field, index) => (
            <InputBox key={index} name={InputFields[field]} register={register} errorMessage={errors[field]?.message} />
          ))}

          <CFPSelectBox register={register} errorMessage={errors.gender?.message} />
          <CFPCheckBox register={register} errorMessage={errors.conditions?.message} />
          <CFPImageBox register={register} errorMessage={errors.image?.message} />

          <button className={isValid ? 'form__button' : 'disabled__button'} type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ControlledFormPage;
