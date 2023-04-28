import { FC, ButtonHTMLAttributes } from "react";
import classes from "./RejectButton.module.scss";

interface RejectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const RejectButton: FC<RejectButtonProps> = ({ ...rest }) => (
  <button className={classes.rejectButton} {...rest}>
    Забраковать
  </button>
);
