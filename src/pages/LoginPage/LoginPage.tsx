import { FC } from "react";
import classes from "./LoginPage.module.scss";

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => (
  <section className={classes.loginPage}></section>
);
