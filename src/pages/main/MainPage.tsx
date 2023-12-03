import { Dispatch, SetStateAction, useEffect } from 'react';
import { IFormState } from '../../utils/interfaces/IFormState';

type MainPageProps = {
  formsList: IFormState[];
  newClass: string;
  setNewClass: Dispatch<SetStateAction<string>>;
};

const MainPage = ({ formsList, newClass, setNewClass }: MainPageProps) => {
  useEffect(() => {
    setTimeout(() => {
      setNewClass('');
    }, 3000);
  }, []);

  return (
    <>
      {formsList.length
        ? formsList.map((form, index) => (
            <div className={`forms__item ${index === 0 ? newClass : ''}`} key={index}>
              <div className="item__column">
                <img src={form.image} alt="User avatar" />
              </div>
              <div className="item__column">
                <p>Name: {form.name}</p>
                <p>Age: {form.age}</p>
                <p>Email: {form.email}</p>
                <p>Country: {form.country}</p>
                <p>Password: {form.password}</p>
                <p>Confirm password: {form.confirmPassword}</p>
                <p>Gender: {form.gender}</p>
                <p>Conditions: {`${form.conditions}`}</p>
              </div>
            </div>
          ))
        : 'No forms found'}
    </>
  );
};

export default MainPage;
