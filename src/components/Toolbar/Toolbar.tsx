import { FC } from "react";
import { ToolbarElement } from "../../types/types";
import { SendButton } from "../UI/SendButton";
import classes from "./Toolbar.module.scss";

interface ToolbarProps {
  toolbarList: ToolbarElement[];
}

export const Toolbar: FC<ToolbarProps> = ({ toolbarList }) => (
  <div className={classes.toolbar}>
    <ul className={classes.list}>
      {toolbarList.map((item) => (
        <li key={item.key}>{item.element}</li>
      ))}
    </ul>
    <SendButton />
  </div>
);
