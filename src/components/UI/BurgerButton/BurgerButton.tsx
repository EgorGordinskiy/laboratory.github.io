import { FC } from "react";
import classes from "./BurgerButton.module.scss";
import icon from "../../../assets/images/burger2.svg";

interface BurgerButtonProps {}

export const BurgerButton: FC<BurgerButtonProps> = () => (
  <button className={classes.burgerButton}>
    <img src={icon} alt="button burger" />
  </button>
);
