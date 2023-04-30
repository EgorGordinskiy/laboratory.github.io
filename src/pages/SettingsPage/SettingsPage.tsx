import { FC } from "react";
import { Container } from "../../components/Container";
import classes from "./SettingsPage.module.scss";

interface SettingsPageProps {}

export const SettingsPage: FC<SettingsPageProps> = () => (
  <section className={classes.settingsPage}>
    <Container>Настройки</Container>
  </section>
);
