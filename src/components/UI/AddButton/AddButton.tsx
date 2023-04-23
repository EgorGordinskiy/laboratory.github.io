import { FC } from "react";
import classes from "./AddButton.module.scss";

interface AddButtonProps {}

export const AddButton: FC<AddButtonProps> = () => (
  <button className={classes.addButton}>Добавить</button>
);
