import './card-not-found.css';
import image from '../../assets/images/nf.png';
import React from 'react';

class CardNotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="not-found">
        <p></p>
        <img src={image} alt="Not found" />
      </div>
    );
  }
}

export default CardNotFound;
