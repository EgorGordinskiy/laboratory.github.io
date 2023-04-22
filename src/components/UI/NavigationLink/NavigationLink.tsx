import { FC } from "react";
import { Link } from "react-router-dom";
import { NavigationElement } from "../../../types/types";
import classes from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  item: NavigationElement;
}

export const NavigationLink: FC<NavigationLinkProps> = ({ item }) => (
  <Link className={classes.navigationLink} to={item.path}>
    <img src={item.icon} alt="icon" /> <span>{item.name}</span>
  </Link>
);
