import './error-window.css';
import image from '../../assets/images/oops.png';
import React from 'react';

class ErrorWindow extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="error">
        <img src={image} />
        <p className="error__message">
          Oops... an error has occurred! Please reload the page!
        </p>
        <button className="error__btn" onClick={() => location.reload()}>
          Realod Page
        </button>
      </div>
    );
  }
}

export default ErrorWindow;
