import { FC } from "react";
import classes from "./ToolbarItem.module.scss";
import { ToolbarElement } from "../../types/types";

interface ToolbarItemProps {
  item: ToolbarElement;
}

export const ToolbarItem: FC<ToolbarItemProps> = ({ item }) => (
  <li className={classes.toolbarItem}>{item.name}</li>
);
