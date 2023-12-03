import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const controlledFormData = useSelector((store: RootState) => store.forms.listForms);
  const [newClass, setNewClass] = useState('new');

  useEffect(() => {
    setTimeout(() => {
      setNewClass('');
    }, 3000);
  }, [controlledFormData.length]);

  return (
    <>
      {controlledFormData.length
        ? controlledFormData.map((form, index) => (
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
