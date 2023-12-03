type DataListProps = {
  list: string[];
};

const DataList = ({ list }: DataListProps) => {
  return (
    <datalist id="list-of-countries">
      {list.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </datalist>
  );
};

export default DataList;
