import { FC } from "react";
import classes from "./ApprovalButton.module.scss";

interface ApprovalButtonProps {}

export const ApprovalButton: FC<ApprovalButtonProps> = () => (
  <button className={classes.approvalButton}>Утвердить</button>
);
