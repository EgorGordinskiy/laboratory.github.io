import { useState } from "react";
import { AddButton } from "../components/UI/AddButton";
import { ApprovalButton } from "../components/UI/ApprovalButton";
import { Dropdown } from "../components/UI/Dropdown";
import { MagazinePrintButton } from "../components/UI/MagazinePrintButton";
import { RejectButton } from "../components/UI/RejectButton";
import { ShiftClosingButton } from "../components/UI/ShiftClosingButton";
import { UpdateButton } from "../components/UI/UpdateButton";
import { ToolbarElement } from "../types/types";

const [modal, setModal] = useState(false);

const handlerClick = () => setModal(true);

const toolbarList: ToolbarElement[] = [
  { element: <UpdateButton />, key: 3 },
  { element: <AddButton />, key: 2 },
  { element: <ApprovalButton />, key: 4 },
  { element: <RejectButton onClick={handlerClick} />, key: 5 },
  { element: <MagazinePrintButton />, key: 6 },
  { element: <Dropdown />, key: 1 },
  { element: <ShiftClosingButton />, key: 7 },
];

export default toolbarList;
