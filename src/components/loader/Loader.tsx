import './loader.css';
import image from '../../assets/images/baby-groot.gif';
import React from 'react';

class Loader extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="loader">
        <img src={image} alt="Loading" />
        <p>Loading...</p>
      </div>
    );
  }
}

export default Loader;
