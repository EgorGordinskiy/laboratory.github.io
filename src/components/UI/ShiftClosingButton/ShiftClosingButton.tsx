import { FC, ButtonHTMLAttributes } from "react";
import classes from "./ShiftClosingButton.module.scss";

interface ShiftClosingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ShiftClosingButton: FC<ShiftClosingButtonProps> = ({
  ...rest
}) => (
  <button className={classes.shiftClosingButton} {...rest}>
    Закрыть смену
  </button>
);
