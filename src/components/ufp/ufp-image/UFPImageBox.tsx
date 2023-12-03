type UFPImageBoxProps = {
  imageRef: React.RefObject<HTMLInputElement>;
  errorMessage?: string;
};

const UFPImageBox = ({ imageRef, errorMessage }: UFPImageBoxProps) => {
  return (
    <div className="image-box">
      <label>Image: </label>
      <input type="file" ref={imageRef} />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default UFPImageBox;
