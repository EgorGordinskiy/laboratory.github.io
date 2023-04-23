import { FC } from "react";
import { NavigationElement } from "../../types/types";
import { NavigationLink } from "../UI/NavigationLink";
import classes from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  items: NavigationElement[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({
  items,
  active,
  setActive,
}) => (
  <div
    className={
      active
        ? [classes.burgerMenu, classes.active].join(" ")
        : classes.burgerMenu
    }
    onClick={() => setActive(false)}
  >
    <div className={classes.blur}></div>
    <div className={classes.content} onClick={(e) => e.stopPropagation()}>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <NavigationLink key={item.name} item={item} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
