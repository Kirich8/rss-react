import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/yup/schema';
import { InputFields, inputFieldsList } from '../../components/cfp/cfp-input/input-fields';
import { IFormProps } from '../../utils/interfaces/IFormProps';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeControlledFormData } from '../../store/formsSlice';
import CFPInputBox from '../../components/cfp/cfp-input/CFPInputBox';
import CFPSelectBox from '../../components/cfp/cfp-select/CFPSelectBox';
import CFPCheckBox from '../../components/cfp/cfp-check/CFPCheckBox';
// import CFPImageBox from '../../components/cfp/cfp-image/CFPImageBox';

const ControlledFormPage = () => {
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

  const submitFormHandler: SubmitHandler<IFormProps> = (data) => {
    dispatch(changeControlledFormData(data));
    navigate('/', { state: { from: 'controlled-form' } });
  };

  return (
    <>
      <div className="cfp">
        <h2 className="cfp__title">Controled Form</h2>
        <form className="cfp__form" onSubmit={handleSubmit(submitFormHandler)}>
          {inputFieldsList.map((field, index) => (
            <CFPInputBox
              key={index}
              name={InputFields[field]}
              register={register}
              errorMessage={errors[field]?.message}
            />
          ))}

          <CFPSelectBox register={register} errorMessage={errors.gender?.message} />
          <CFPCheckBox register={register} errorMessage={errors.conditions?.message} />
          {/* <CFPImageBox register={register} errorMessage={errors.image?.message} /> */}

          <button className={isValid ? 'cfp__button' : 'disabled__button'} type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ControlledFormPage;
