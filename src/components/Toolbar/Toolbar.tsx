import { FC, useState } from "react";
import { ToolbarElement } from "../../types/types";
import { SendButton } from "../UI/SendButton";
import classes from "./Toolbar.module.scss";
import { ApprovalButton } from "../UI/ApprovalButton";
import { Dropdown } from "../UI/Dropdown";
import { MagazinePrintButton } from "../UI/MagazinePrintButton";
import { RejectButton } from "../UI/RejectButton";
import { ShiftClosingButton } from "../UI/ShiftClosingButton";
import { UpdateButton } from "../UI/UpdateButton";
import { MyButton } from "../UI/MyButton";

interface ToolbarProps {
  handlerClickShiftClosing: () => void;
  hadlerFilterValue: (value: string) => void;
}

export const Toolbar: FC<ToolbarProps> = ({
  handlerClickShiftClosing,
  hadlerFilterValue,
}) => {
  const toolbarList: ToolbarElement[] = [
    { element: <UpdateButton />, key: 3 },
    { element: <MyButton>Добавить</MyButton>, key: 2 },
    { element: <MyButton>Редактировать</MyButton>, key: 8 },
    { element: <ApprovalButton />, key: 4 },
    { element: <RejectButton />, key: 5 },
    { element: <MagazinePrintButton />, key: 6 },
    {
      element: <Dropdown hadlerFilterValue={hadlerFilterValue} />,
      key: 1,
    },
    {
      element: <ShiftClosingButton onClick={handlerClickShiftClosing} />,
      key: 7,
    },
  ];

  return (
    <div className={classes.toolbar}>
      <ul className={classes.list}>
        {toolbarList.map((item) => (
          <li key={item.key}>{item.element}</li>
        ))}
      </ul>
      <SendButton />
    </div>
  );
};
