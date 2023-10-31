import './error-window.css';
import image from '../../assets/images/oops.png';

const ErrorWindow = () => {
  return (
    <div className="error">
      <img src={image} />
      <p className="error__message">
        Oops... an error has occurred! Please reload the page!
      </p>
      <button className="button" onClick={() => location.reload()}>
        Realod Page
      </button>
    </div>
  );
};

export default ErrorWindow;
