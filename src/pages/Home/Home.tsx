import { FC } from "react";
import { Container } from "../../components/Container";
import { MyTable } from "../../components/MyTable";
import { Toolbar } from "../../components/Toolbar";
import dataTable from "../../data/dataTable";
import headersTable from "../../data/headersTable";
import toolbarList from "../../data/toolbarList";
import classes from "./Home.module.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => (
  <section className={classes.home}>
    <Container>
      <div className={classes.wrapper}>
        <Toolbar toolbarList={toolbarList} />
        <MyTable headers={headersTable} data={dataTable} isScroll={true} />
      </div>
    </Container>
  </section>
);
