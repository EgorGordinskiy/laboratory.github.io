import { FC, ReactChild } from "react";
import classes from "./Container.module.scss";

interface ContainerProps {
  children: ReactChild;
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={classes.container}>{children}</div>
);
