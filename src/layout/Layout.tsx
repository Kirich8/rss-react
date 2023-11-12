import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Layout = ({ setCurrentPage }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header setCurrentPage={setCurrentPage} />
      <div className="main" data-test="test husky">
        <Outlet />
      </div>
      <div className="footer">2023</div>
    </div>
  );
};

export default Layout;
