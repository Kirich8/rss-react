import './loader.css';
import image from '../../assets/images/baby-groot.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img src={image} alt="Loading" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
