import { FC } from "react";
import { NavigationElement } from "../../types/types";
import classes from "./NavigationItem.module.scss";

interface NavigationItemProps {
  item: NavigationElement;
}

export const NavigationItem: FC<NavigationItemProps> = ({ item }) => (
  <li>
    <a className={classes.navigationItem}>
      <img src={item.icon} alt="иконка" />
    </a>
  </li>
);
