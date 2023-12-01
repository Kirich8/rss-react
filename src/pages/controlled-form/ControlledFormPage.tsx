import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/yup/schema';
import { countriesList } from '../../utils/constants/countries-list';

interface IFormProps {
  name: string;
  age: number;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
  gender: string;
  conditions: boolean;
  image: FileList;
}

const ControlledFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormProps>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const submitFormHandler: SubmitHandler<IFormProps> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="cfp">
        <h2 className="cfp__title">Controled Form</h2>
        <form className="cfp__form" onSubmit={handleSubmit(submitFormHandler)}>
          <div className="input-box">
            <input type="text" {...register('name')} autoComplete="off" placeholder="name" />
            <label>Name: </label>
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          <div className="input-box">
            <input type="text" {...register('age')} autoComplete="off" placeholder="age" />
            <label>Age: </label>
            {errors.age && <p className="error-message">{errors.age.message}</p>}
          </div>

          <div className="input-box">
            <input type="text" {...register('email')} autoComplete="off" placeholder="email" />
            <label>Email: </label>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="input-box">
            <input
              type="text"
              {...register('country')}
              autoComplete="off"
              placeholder="country"
              list="list-of-countries"
            />
            <label>Country: </label>
            {errors.country && <p className="error-message">{errors.country.message}</p>}
          </div>

          <div className="input-box">
            <input type="password" {...register('password')} autoComplete="off" placeholder="password" />
            <label>Password: </label>
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <div className="input-box">
            <input type="password" {...register('confirmPassword')} autoComplete="off" placeholder="confirmPassword" />
            <label>Confirm password: </label>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
          </div>

          <div className="select-box">
            <label>Gender: </label>
            <select {...register('gender')}>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender.message}</p>}
          </div>

          <div className="check-box">
            <label>Accept T&C: </label>
            <input type="checkbox" {...register('conditions')} />
            {errors.conditions && <p className="error-message">{errors.conditions.message}</p>}
          </div>

          <div className="image-box">
            <label>Image: </label>
            <input type="file" {...register('image')} />
            {errors.image && <p className="error-message">{errors.image.message}</p>}
          </div>

          <datalist id="list-of-countries">
            {countriesList.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </datalist>

          <button className={isValid ? 'cfp__button' : 'disabled__button'} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ControlledFormPage;
