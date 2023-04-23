import { FC } from "react";
import classes from "./UpdateButton.module.scss";
import update from "../../../assets/images/update.svg";

interface UpdateButtonProps {}

export const UpdateButton: FC<UpdateButtonProps> = () => (
  <button className={classes.updateButton}>
    <img src={update} alt="update" />
  </button>
);
