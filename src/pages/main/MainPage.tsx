import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const MainPage = () => {
  const controlledFormData = useSelector((store: RootState) => store.forms.listForms);

  return (
    <>
      {controlledFormData.length
        ? controlledFormData.map((form, index) => (
            <div className={`last-form ${index === 0 ? 'new' : ''}`} key={index}>
              <p>Name: {form.name}</p>
              <p>Age: {form.age}</p>
              <p>Email: {form.email}</p>
              <p>Country: {form.country}</p>
              <p>Password: {form.password}</p>
              <p>Gender: {form.gender}</p>
              <p>Conditions: {`${form.conditions}`}</p>
              <img src={form.image} width={100} alt="User avatar" />
            </div>
          ))
        : 'No forms found'}
    </>
  );
};

export default MainPage;
