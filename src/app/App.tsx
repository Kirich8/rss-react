import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import MainPage from '../pages/main/MainPage';
import UncontrolledFormPage from '../pages/uncontrolled-form/UncontrolledFormPage';
import ControlledFormPage from '../pages/controlled-form/ControlledFormPage';
import NotFoundPage from '../pages/not-found/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/uncontrolled-form" element={<UncontrolledFormPage />} />
        <Route path="/controlled-form" element={<ControlledFormPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
