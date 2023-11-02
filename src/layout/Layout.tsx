import Header from '../components/header/Header';
import { Outlet, useSearchParams } from 'react-router-dom';

type LayoutProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Layout = ({ setCurrentPage }: LayoutProps) => {
  const oldSearchValue = localStorage.getItem('input_value');
  const [searchParams] = useSearchParams();

  if (oldSearchValue) {
    searchParams.set('search', oldSearchValue);
  }

  return (
    <div className="wrapper">
      <Header setCurrentPage={setCurrentPage} />
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">2023</div>
    </div>
  );
};

export default Layout;
