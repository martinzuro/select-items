import { memo } from "react";

const Item = memo(({ item, handleClick }) => {
  return (
    <li
      className={`List__item List__item--${item.color} ${
        item.isSelected ? "List__item-selected" : ""
      }`}
      onClick={(e) => handleClick(item.name)}
    >
      {item.name}
    </li>
  );
});

export default Item;
