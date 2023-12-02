import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link className="link" to={'/'}>
        Main
      </Link>
      <Link className="link" to={'/uncontrolled-form'}>
        Uncontrolled form
      </Link>
      <Link className="link" to={'/controlled-form'}>
        Controlled form
      </Link>
    </header>
  );
};

export default Header;
