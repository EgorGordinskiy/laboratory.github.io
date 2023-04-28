import { FC } from "react";
import { AcceptButton } from "../UI/AcceptButton";
import { CancelButton } from "../UI/CancelButton";
import classes from "./ModalForm.module.scss";

interface ModalFormProps {
  handlerClickAccept: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlerClickCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ModalForm: FC<ModalFormProps> = ({
  handlerClickAccept,
  handlerClickCancel,
}) => (
  <form className={classes.modalForm}>
    <h3>Вы уверены, что хотите закрыть смену?</h3>
    <div className={classes.btns}>
      <AcceptButton onClick={handlerClickAccept} isPrimaryBackground={true} />
      <CancelButton onClick={handlerClickCancel} isPrimaryBackground={false} />
    </div>
  </form>
);
