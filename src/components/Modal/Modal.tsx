import { FC } from "react";
import classes from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: any;
}

export const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  return (
    <div
      className={
        visible ? [classes.modal, classes.active].join(" ") : classes.modal
      }
      onClick={() => setVisible(false)}
    >
      <div
        className={
          visible
            ? [classes.content, classes.active].join(" ")
            : classes.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
