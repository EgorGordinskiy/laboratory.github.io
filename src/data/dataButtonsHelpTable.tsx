import { MyButton } from "../components/UI/MyButton";
import { BurgerButton } from "../components/UI/BurgerButton";
import { PersonalAccountButton } from "../components/UI/PersonalAccountButton";
import { UpdateButton } from "../components/UI/UpdateButton";
import { ApprovalButton } from "../components/UI/ApprovalButton";
import { RejectButton } from "../components/UI/RejectButton";
import { MagazinePrintButton } from "../components/UI/MagazinePrintButton";
import { ShiftClosingButton } from "../components/UI/ShiftClosingButton";
import { SendButton } from "../components/UI/SendButton";
import navigationList from "./navigationList";
import { NavigationLink } from "../components/UI/NavigationLink";

const dataButtonsHelpTable = [
  [
    <BurgerButton />,
    "Меню, из которого можно перейти на разделы: Журнал регистрации проб, Планирование, Документация, Справочники, Статистика, Настройки, Справка.",
  ],
  [<PersonalAccountButton />, "Личный кабинет пользователя (лаборанта)."],
  [<UpdateButton />, "Обновить таблицу журнала регистрации проб."],
  [
    <MyButton>Добавить</MyButton>,
    "Добавить запись в таблицу журнала регистрации проб.",
  ],
  [
    <MyButton>Редактировать</MyButton>,
    "Редактировать запись в таблице журнала регистрации проб.",
  ],
  [<ApprovalButton />, "Утвердить запись в таблице журнала регистрации проб."],
  [<RejectButton />, "Забраковать запись в таблице журнала регистрации проб."],
  [<MagazinePrintButton />, "Распечатать журнал регистрации проб."],
  [
    <ShiftClosingButton />,
    "Закрыть возможность совершения всевозможных операций с записями в журнале регистрации проб за определенную смену.",
  ],
  [
    <SendButton />,
    "Отправить запись из таблицы журнала регистрации проб рабочему на засыпных ямах.",
  ],
];

export default dataButtonsHelpTable;
