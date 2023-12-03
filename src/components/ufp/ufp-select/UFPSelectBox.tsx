type UFPSelectBoxProps = {
  genderRef: React.RefObject<HTMLSelectElement>;
  errorMessage?: string;
};

const UFPSelectBox = ({ genderRef, errorMessage }: UFPSelectBoxProps) => {
  return (
    <div className="select-box">
      <label>Gender: </label>
      <select ref={genderRef}>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
      </select>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default UFPSelectBox;
