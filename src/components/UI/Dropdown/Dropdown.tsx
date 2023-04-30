import { FC, useState } from "react";
import classes from "./Dropdown.module.scss";
import vector from "../../../assets/images/vector.svg";
import filterList from "../../../data/filterList";

interface DropdownProps {
  hadlerFilterValue: (value: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({ hadlerFilterValue }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    hadlerFilterValue(event.target.value);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const dropdownStyle = {
    maxHeight: isExpanded ? "400px" : "0px",
    opacity: isExpanded ? "1" : "0",
  };

  return (
    <div className={classes.dropdown} onMouseLeave={handleMouseLeave}>
      <button
        className={
          isExpanded
            ? [classes.dropdownButton, classes.dropdownButtonActive].join(" ")
            : classes.dropdownButton
        }
        onMouseEnter={handleMouseEnter}
      >
        <span>Фильтрация записей</span>
        <img
          className={
            isExpanded
              ? [classes.icon, classes.iconActive].join(" ")
              : classes.icon
          }
          src={vector}
          alt="vector"
        />
      </button>
      <ul style={dropdownStyle} className={classes.dropdownList}>
        {filterList.map((item) => (
          <li key={item.name}>
            <label>
              <input
                type="radio"
                name="item"
                value={item.name}
                onChange={handleItemClick}
              />
              <span>{item.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
