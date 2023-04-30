import { FC } from "react";
import { Container } from "../../components/Container";
import classes from "./DocumentationPage.module.scss";

interface DocumentationPageProps {}

export const DocumentationPage: FC<DocumentationPageProps> = () => (
  <section className={classes.documentationPage}>
    <Container>Документация</Container>
  </section>
);
