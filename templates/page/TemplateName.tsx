import { FC } from "react";
import { Container } from "../../components/Container";
import classes from "./TemplateName.module.scss";

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => (
  <section className={classes.templateName}>
    <Container></Container>
  </section>
);
