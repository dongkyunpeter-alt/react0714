import Title from "./Title";
import Picture from "./Picture";

const List = (props) => {
  return (
    <div className="List">
      <div className="item">
        <Title />
        <Picture />
      </div>
    </div>
  );
};

export default List;
