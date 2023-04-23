import { FC } from "react";
import classes from "./TemplateName.module.scss";

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => (
  <button className={classes.templateName}></button>
);
