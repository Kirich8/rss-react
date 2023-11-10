import React from 'react';
import './error-window.css';
import oopsImage from '../../assets/images/oops.png';

const ErrorWindow: React.FC = () => {
  return (
    <div className="error">
      <img src={oopsImage} alt="Oops" />
      <p className="error__message">
        Oops... an error has occurred! Please reload the page!
      </p>
      <button className="button" onClick={() => location.reload()}>
        Reload Page
      </button>
    </div>
  );
};

export default ErrorWindow;
