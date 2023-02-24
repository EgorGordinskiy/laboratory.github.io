import { FC } from "react";
import classes from "./Logo.module.scss";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => (
  <div className={classes.logo}>Журнал регистрации проб</div>
);
