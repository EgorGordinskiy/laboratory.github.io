import { FC } from "react";
import { NavigationElement } from "../../../types/types";
import classes from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  item: NavigationElement;
}

export const NavigationLink: FC<NavigationLinkProps> = ({ item }) => (
  <div className={classes.navigationLink}>
    <img src={item.icon} alt="icon" />
    <a href={item.path}>{item.name}</a>
  </div>
);
