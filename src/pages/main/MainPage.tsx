import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <Link className="link" to={'/uncontrolled-form'}>
        Uncontrolled form
      </Link>
      <Link className="link" to={'/controlled-form'}>
        Controlled form
      </Link>
    </>
  );
};

export default MainPage;
