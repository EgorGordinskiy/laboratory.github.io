import { FC } from "react";
import classes from "./TemplateName.module.scss";

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => (
  <section className={classes.templateName}></section>
);

export default TemplateName;
