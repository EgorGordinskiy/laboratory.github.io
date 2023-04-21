import { FC } from "react";
import classes from "./PersonalAccountButton.module.scss";
import icon from "../../../assets/images/account.svg";

interface PersonalAccountButtonProps {}

export const PersonalAccountButton: FC<PersonalAccountButtonProps> = () => (
  <button className={classes.personalAccountButton}>
    <img src={icon} alt="button personal account" />
  </button>
);
