import { FC } from "react";
import classes from "./LoginForm.module.scss";

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => (
  <div className={classes.loginForm}></div>
);
