import React from 'react';
import Image from 'next/image';

const ErrorWindow: React.FC = () => {
  return (
    <div className="error">
      <Image src="/oops.png" alt="not found" width={200} height={200} />
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
