import { FC } from "react";
import { Container } from "../../components/Container";
import classes from "./GuidePage.module.scss";

interface GuidePageProps {}

export const GuidePage: FC<GuidePageProps> = () => (
  <section className={classes.guidePage}>
    <Container>Справочник</Container>
  </section>
);
