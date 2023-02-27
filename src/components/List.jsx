import { useCallback, useState } from "react";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

const List = ({ items }) => {
  const [list, setList] = useState(items);

  const handleToggleSelect = useCallback((name) => {
    setList((list) =>
      list.map((item) =>
        item.name !== name ? item : { ...item, isSelected: !item.isSelected }
      )
    );
  }, []);

  const selectedItems = list.filter((item) => item.isSelected);

  return (
    <div className="Container">
      <span>Selected items ({selectedItems.length}):</span>
      <div className="Selected__item__container">
        {selectedItems.map((item) => (
          <SelectedItem item={item} key={item.name} />
        ))}
      </div>
      <hr />
      <ul className="List">
        {list.map((item) => (
          <Item handleClick={handleToggleSelect} item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default List;
