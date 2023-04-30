import { FC } from "react";
import { Container } from "../../components/Container";
import classes from "./StatisticsPage.module.scss";

interface StatisticsPageProps {}

export const StatisticsPage: FC<StatisticsPageProps> = () => (
  <section className={classes.statisticsPage}>
    <Container>Статистика</Container>
  </section>
);
