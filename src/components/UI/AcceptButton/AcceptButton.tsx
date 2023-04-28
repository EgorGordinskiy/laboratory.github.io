import { FC, ButtonHTMLAttributes } from "react";
import classes from "./AcceptButton.module.scss";
import icon from "../../../assets/images/checkmark.svg";

interface AcceptButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimaryBackground: boolean;
  children?: never;
}

export const AcceptButton: FC<AcceptButtonProps> = ({
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
    <img className={classes.icon} src={icon} alt="галочка" />
    <span>Да</span>
  </button>
);
