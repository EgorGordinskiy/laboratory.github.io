import { FC } from "react";
import { ToolbarElement } from "../../types/types";
import { SendButton } from "../UI/SendButton";
import classes from "./Toolbar.module.scss";
import { useState } from "react";
import { AddButton } from "../UI/AddButton";
import { ApprovalButton } from "../UI/ApprovalButton";
import { Dropdown } from "../UI/Dropdown";
import { MagazinePrintButton } from "../UI/MagazinePrintButton";
import { RejectButton } from "../UI/RejectButton";
import { ShiftClosingButton } from "../UI/ShiftClosingButton";
import { UpdateButton } from "../UI/UpdateButton";

interface ToolbarProps {
  // toolbarList: ToolbarElement[];
  handlerClickShiftClosing: () => void;
}

export const Toolbar: FC<ToolbarProps> = ({ handlerClickShiftClosing }) => {
  const toolbarList: ToolbarElement[] = [
    { element: <UpdateButton />, key: 3 },
    { element: <AddButton />, key: 2 },
    { element: <ApprovalButton />, key: 4 },
    { element: <RejectButton />, key: 5 },
    { element: <MagazinePrintButton />, key: 6 },
    { element: <Dropdown />, key: 1 },
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
