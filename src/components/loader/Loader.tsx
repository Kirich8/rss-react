import Image from 'next/image';

const Loader = () => {
  return (
    <div className="loader">
      <Image src="/baby-groot.gif" alt="loading" width={160} height={250} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
