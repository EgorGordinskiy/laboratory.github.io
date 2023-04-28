import { FC, useState } from "react";
import { Container } from "../../components/Container";
import { Modal } from "../../components/Modal";
import { ModalForm } from "../../components/ModalForm";
import { MyTable } from "../../components/MyTable";
import { Toolbar } from "../../components/Toolbar";
import dataTable from "../../data/dataTable";
import headersTable from "../../data/headersTable";
import toolbarList from "../../data/toolbarList";
import classes from "./Home.module.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const [modal, setModal] = useState(false);
  const handlerClickShiftClosing = () => setModal(true);
  const handlerClickAccept = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(false);
  };
  const handlerClickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModal(false);
  };

  return (
    <section className={classes.home}>
      <Container>
        <div className={classes.wrapper}>
          <Toolbar handlerClickShiftClosing={handlerClickShiftClosing} />
          <MyTable headers={headersTable} data={dataTable} isScroll={true} />
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
