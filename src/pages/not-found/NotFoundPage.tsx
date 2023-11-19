import { Link } from 'react-router-dom';
import oopsImage from '../../assets/images/oops.png';
import './not-found-page.css';

const NotFoundPage = () => (
  <div className="not-found-page">
    <img src={oopsImage} alt="Oops" />
    <h1>You have found a secret place.</h1>
    <p>
      You may have mistyped the address, or the page has been moved to another
      URL.
    </p>
    <Link className="button" to="/">
      Main Page
    </Link>
  </div>
);

export default NotFoundPage;
