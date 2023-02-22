import { FC } from "react";
import classes from "./TemplateName.module.scss";

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => (
  <div className={classes.templateName}></div>
);

export default TemplateName;
