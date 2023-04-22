import { FC, ButtonHTMLAttributes } from "react";
import classes from "./BurgerButton.module.scss";
import icon from "../../../assets/images/burger2.svg";

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BurgerButton: FC<BurgerButtonProps> = ({ ...rest }) => (
  <button {...rest} className={classes.burgerButton}>
    <img src={icon} alt="button burger" />
  </button>
);
