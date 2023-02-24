import { FC } from "react";
import { ToolbarElement } from "../../types/types";
import { ToolbarItem } from "../ToolbarItem";
import classes from "./Toolbar.module.scss";

interface ToolbarProps {
  toolbarList: ToolbarElement[];
}

export const Toolbar: FC<ToolbarProps> = ({ toolbarList }) => (
  <ul className={classes.toolbar}>
    {toolbarList.map((item) => (
      <ToolbarItem item={item} />
    ))}
  </ul>
);
