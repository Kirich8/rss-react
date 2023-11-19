import './card-not-found.css';
import image from '../../assets/images/nf.png';

const CardNotFound = () => {
  return (
    <div className="not-found">
      <div className="cloud"></div>
      <span>nothing found</span>
      <img src={image} alt="Not found" />
    </div>
  );
};

export default CardNotFound;
