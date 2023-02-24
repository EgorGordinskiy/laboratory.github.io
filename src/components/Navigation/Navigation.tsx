import { FC } from "react";
import { NavigationElement } from "../../types/types";
import { NavigationItem } from "../NavigationItem";
import classes from "./Navigation.module.scss";

interface NavigationProps {
  navigationList: NavigationElement[];
}

export const Navigation: FC<NavigationProps> = ({ navigationList }) => (
  <nav className={classes.navigation}>
    <ul>
      {navigationList.map((item) => (
        <NavigationItem item={item} />
      ))}
    </ul>
  </nav>
);
