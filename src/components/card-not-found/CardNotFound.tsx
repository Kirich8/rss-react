import Image from 'next/image';

const CardNotFound = () => {
  return (
    <div className="not-found">
      <div className="cloud">
        <span>nothing found</span>
      </div>
      <Image src="/nf.png" alt="not found" width={250} height={250} />
    </div>
  );
};

export default CardNotFound;
