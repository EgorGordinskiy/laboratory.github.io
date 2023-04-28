import { FC } from "react";
import classes from "./Logo.module.scss";

interface LogoProps {
  name: string;
}

export const Logo: FC<LogoProps> = ({ name }) => (
  <div className={classes.logo}>{name}</div>
);
