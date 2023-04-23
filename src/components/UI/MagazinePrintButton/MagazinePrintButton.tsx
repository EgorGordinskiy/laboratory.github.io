import { FC } from "react";
import classes from "./MagazinePrintButton.module.scss";

interface MagazinePrintButtonProps {}

export const MagazinePrintButton: FC<MagazinePrintButtonProps> = () => (
  <button className={classes.magazinePrintButton}>Печать журнала</button>
);
