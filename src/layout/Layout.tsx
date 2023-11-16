import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">2023</div>
    </div>
  );
};

export default Layout;
