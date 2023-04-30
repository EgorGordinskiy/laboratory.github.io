import { FC, ButtonHTMLAttributes } from "react";
import classes from "./MyButton.module.scss";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MyButton: FC<MyButtonProps> = ({ ...rest }) => (
  <button className={classes.button} {...rest}></button>
);
