import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import CardList from '../pages/main/MainPage';
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
            <CardList
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
