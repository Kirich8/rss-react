import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import MainPage from '../pages/main/MainPage';
import Details from '../components/details/Details';
import NotFoundPage from '../pages/not-found/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Details />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
