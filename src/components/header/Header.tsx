import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={'/'}>
        Main
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={'/uncontrolled-form'}>
        Uncontrolled form
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={'/controlled-form'}>
        Controlled form
      </NavLink>
    </header>
  );
};

export default Header;
