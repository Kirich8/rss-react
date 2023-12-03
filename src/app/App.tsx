import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../store';
import Layout from '../layout/Layout';
import MainPage from '../pages/main/MainPage';
import UncontrolledFormPage from '../pages/forms/uncontrolled-form/UncontrolledFormPage';
import ControlledFormPage from '../pages/forms/controlled-form/ControlledFormPage';
import NotFoundPage from '../pages/not-found/NotFoundPage';

function App() {
  const formsList = useSelector((store: RootState) => store.forms.listForms);
  const [newClass, setNewClass] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setNewClass('');
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage formsList={formsList} newClass={newClass} setNewClass={setNewClass} />} />
        <Route path="/uncontrolled-form" element={<UncontrolledFormPage setNewClass={setNewClass} />} />
        <Route path="/controlled-form" element={<ControlledFormPage setNewClass={setNewClass} />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
