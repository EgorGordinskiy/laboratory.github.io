import { FC } from "react";
import { NavigationElement } from "../../../types/types";
import classes from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  item: NavigationElement;
}

export const NavigationLink: FC<NavigationLinkProps> = ({ item }) => (
  <a className={classes.navigationLink} href={item.path}>
    <img src={item.icon} alt="icon" /> <span>{item.name}</span>
  </a>
);
