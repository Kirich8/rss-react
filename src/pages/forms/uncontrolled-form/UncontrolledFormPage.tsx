import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import { schema } from '../../../utils/yup/schema';
import { ValidationError } from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { changeDataLastForm, updateListsForms } from '../../../store/formsSlice';
import { IFormProps } from '../../../utils/interfaces/IFormProps';
import { InputFields } from '../../../components/input-box/input-fields';
import InputBox from '../../../components/input-box/InputBox';
import UFPImageBox from '../../../components/ufp/ufp-image/UFPImageBox';
import UFPCheckBox from '../../../components/ufp/ufp-check/UFPCheckBox';
import UFPSelectBox from '../../../components/ufp/ufp-select/UFPSelectBox';

type UncontrolledFormPageProps = {
  setNewClass: Dispatch<SetStateAction<string>>;
};

const UncontrolledFormPage = ({ setNewClass }: UncontrolledFormPageProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const conditionsRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const [formValidationErrors, setFormValidationErrors] = useState<Record<string, string>>({});

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

  const checkFormValidation = (event: FormEvent) => {
    event.preventDefault();

    schema
      .validate(
        {
          name: nameRef.current?.value,
          age: ageRef.current?.value,
          email: emailRef.current?.value,
          country: countryRef.current?.value,
          password: passwordRef.current?.value,
          confirmPassword: confirmPasswordRef.current?.value,
          gender: genderRef.current?.value,
          conditions: conditionsRef.current?.checked,
          image: imageRef.current?.files,
        },
        { abortEarly: false }
      )
      .then((data) => {
        submitForm(data);
      })
      .catch((errors) => {
        if (errors instanceof ValidationError) {
          const validationErrors: Record<string, string> = {};

          errors.inner.forEach((error) => (validationErrors[`${error.path}`] = `${error.message}`));

          setFormValidationErrors(validationErrors);
        }
      });
  };

  const inputFieldsList = [
    {
      name: InputFields.name,
      inputRef: nameRef,
      errorMessage: formValidationErrors.name,
    },
    {
      name: InputFields.age,
      inputRef: ageRef,
      errorMessage: formValidationErrors.age,
    },
    {
      name: InputFields.email,
      inputRef: emailRef,
      errorMessage: formValidationErrors.email,
    },
    {
      name: InputFields.country,
      inputRef: countryRef,
      errorMessage: formValidationErrors.country,
    },
    {
      name: InputFields.password,
      inputRef: passwordRef,
      errorMessage: formValidationErrors.password,
    },
    {
      name: InputFields.confirmPassword,
      inputRef: confirmPasswordRef,
      errorMessage: formValidationErrors.confirmPassword,
    },
  ];

  return (
    <>
      <div className="form">
        <h2 className="form__title">Uncontroled Form</h2>
        <form className="form__content" onSubmit={(event) => checkFormValidation(event)}>
          {inputFieldsList.map((input, index) => (
            <InputBox key={index} name={input.name} inputRef={input.inputRef} errorMessage={input.errorMessage} />
          ))}

          <UFPSelectBox genderRef={genderRef} errorMessage={formValidationErrors?.gender} />
          <UFPCheckBox conditionsRef={conditionsRef} errorMessage={formValidationErrors?.conditions} />
          <UFPImageBox imageRef={imageRef} errorMessage={formValidationErrors?.image} />

          <button className="form__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UncontrolledFormPage;
