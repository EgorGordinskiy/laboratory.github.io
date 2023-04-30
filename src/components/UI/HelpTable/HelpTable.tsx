import { FC } from "react";
import classes from "./HelpTable.module.scss";

interface HelpTableProps {}

export const HelpTable: FC<HelpTableProps> = () => (
  <button className={classes.helpTable}></button>
);
