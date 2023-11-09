import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import CardsCatalog from '../pages/main/MainPage';
import { useState } from 'react';
import Details from '../components/details/Details';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Routes>
      <Route path="/" element={<Layout setCurrentPage={setCurrentPage} />}>
        <Route
          path="/"
          element={
            <CardsCatalog
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        >
          <Route path="/" element={<Details />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
