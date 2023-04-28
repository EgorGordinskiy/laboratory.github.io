import { FC, ButtonHTMLAttributes } from "react";
import classes from "./CancelButton.module.scss";
import icon from "../../../assets/images/cross.svg";

interface CancelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimaryBackground: boolean;
  children?: never;
}

export const CancelButton: FC<CancelButtonProps> = ({
  isPrimaryBackground,

  ...rest
}) => (
  <button
    className={
      isPrimaryBackground
        ? [classes.btn, classes.primary].join(" ")
        : [classes.btn, classes.secondary].join(" ")
    }
    {...rest}
  >
    <img className={classes.icon} src={icon} alt="крестик" />
    <span>Нет</span>
  </button>
);
