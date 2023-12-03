type UFPCheckBoxProps = {
  conditionsRef: React.RefObject<HTMLInputElement>;
  errorMessage?: string;
};

const UFPCheckBox = ({ conditionsRef, errorMessage }: UFPCheckBoxProps) => {
  return (
    <div className="check-box">
      <label>Accept T&C: </label>
      <input type="checkbox" ref={conditionsRef} />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default UFPCheckBox;
