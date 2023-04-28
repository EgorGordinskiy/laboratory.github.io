import { FC } from "react";
import { Container } from "../../components/Container";
import { MyTable } from "../../components/MyTable";
import dataButtonsHelpTable from "../../data/dataButtonsHelpTable";
import dataSymbolsHelpTable from "../../data/dataSymbolsHelpTable";
import headersButtonsHelpTable from "../../data/headersButtonsHelpTable";
import headersSymbolsHelpTable from "../../data/headersSymbolsHelpTable";
import classes from "./HelpPage.module.scss";

interface HelpPageProps {}

export const HelpPage: FC<HelpPageProps> = () => (
  <section className={classes.helpPage}>
    <Container>
      <div className={classes.wrapper}>
        <p>
          В этом разделе описан функционал программы, а именно условные
          обозначения в таблице журнала регистрации проб и кнопки.
        </p>
        <MyTable
          headers={headersSymbolsHelpTable}
          data={dataSymbolsHelpTable}
          isScroll={false}
        />
        {/* <MyTable
          headers={headersButtonsHelpTable}
          data={dataButtonsHelpTable}
          isScroll={false}
        /> */}
      </div>
    </Container>
  </section>
);
