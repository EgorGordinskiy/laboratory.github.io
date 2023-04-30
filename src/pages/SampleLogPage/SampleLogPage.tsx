import { FC, useState } from "react";
import { Container } from "../../components/Container";
import { Modal } from "../../components/Modal";
import { ModalForm } from "../../components/ModalForm";
import { MyTable } from "../../components/MyTable";
import { Toolbar } from "../../components/Toolbar";
import dataTable from "../../data/dataTable";
import headersTable from "../../data/headersTable";
import classes from "./SampleLogPage.module.scss";

interface SampleLogPageProps {}

export const SampleLogPage: FC<SampleLogPageProps> = () => {
  const [modal, setModal] = useState(false);
  const [filterValue, setFilterValue] = useState("Все");
  const handlerClickShiftClosing = () => setModal(true);
  const handlerClickAccept = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(false);
  };
  const handlerClickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(false);
  };

  const hadlerFilterValue = (value: string) => setFilterValue(value);

  function filterTable(list: any[][], value: string): any[][] {
    let listResult: any[][] = [[]];
    switch (value) {
      case "Все":
        listResult = list;
        break;
      case "Отправленные":
        listResult = list.filter((item) => item.includes("Отправлено"));
        break;
      case "Незаполненные":
        listResult = list.filter(
          (item) => item.includes("") && !item.includes("Забракована")
        );
        break;
      case "Ожидают проверки":
        listResult = list.filter((item) => item.includes("Проверяется"));
        break;
      case "Утвержденные":
        listResult = list.filter((item) => item.includes("Принята"));
        break;
      case "Забракованные":
        listResult = list.filter((item) => item.includes("Забракована"));
        break;
      default:
        listResult = list;
        break;
    }
    return listResult;
  }

  console.log(filterTable(dataTable, filterValue));

  return (
    <section className={classes.home}>
      <Container>
        <div className={classes.wrapper}>
          <Toolbar
            handlerClickShiftClosing={handlerClickShiftClosing}
            hadlerFilterValue={hadlerFilterValue}
          />
          <MyTable
            headers={headersTable}
            data={filterTable(dataTable, filterValue)}
            isScroll={true}
            isHeaderSticky={true}
          />
        </div>
      </Container>
      <Modal visible={modal} setVisible={setModal}>
        <ModalForm
          handlerClickAccept={handlerClickAccept}
          handlerClickCancel={handlerClickCancel}
        />
      </Modal>
    </section>
  );
};
