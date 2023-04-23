import { FC } from "react";
import classes from "./ShiftClosingButton.module.scss";

interface ShiftClosingButtonProps {}

export const ShiftClosingButton: FC<ShiftClosingButtonProps> = () => (
  <button className={classes.shiftClosingButton}>Закрыть смену</button>
);
