import { useEffect, useState } from 'react';

const ErrorButton = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      throw Error("This is a test error! It's okay!");
    }
  }, [hasError]);

  return (
    <button className="button" onClick={() => setHasError(true)}>
      Error
    </button>
  );
};

export default ErrorButton;
