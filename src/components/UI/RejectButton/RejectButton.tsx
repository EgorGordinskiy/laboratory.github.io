import { FC } from "react";
import classes from "./RejectButton.module.scss";

interface RejectButtonProps {}

export const RejectButton: FC<RejectButtonProps> = () => (
  <button className={classes.rejectButton}>Забраковать</button>
);
