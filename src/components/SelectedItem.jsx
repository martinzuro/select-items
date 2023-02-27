import { memo } from "react";

const SelectedItem = memo(({ item, handleClick }) => {
  return (
    <span
      className={`Selected__item Selected__item--${item.color}`}
      onClick={(e) => handleClick(item.name)}
    >
      {item.name}
    </span>
  );
});

export default SelectedItem;
