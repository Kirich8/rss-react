import './loader.css';
import image from '../../assets/images/baby-groot.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img src={image} alt="Loading" data-testid="loader-image" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
