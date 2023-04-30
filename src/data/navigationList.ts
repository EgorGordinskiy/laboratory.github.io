import flask from "../assets/images/flask.svg";
import calendar from "../assets/images/calendar.svg";
import table from "../assets/images/table.svg";
import references from "../assets/images/references.svg";
import statistics from "../assets/images/statistics.svg";
import settings from "../assets/images/settings.svg";
import reference from "../assets/images/reference.svg";
import { NavigationElement } from "../types/types";

const navigationList: NavigationElement[] = [
  {
    name: "Журнал регистрации проб",
    path: "/",
    icon: flask,
    description: "",
  },
  {
    name: "Документация",
    path: "/documentation",
    icon: table,
    description: "",
  },
  {
    name: "Справочник",
    path: "/guide",
    icon: references,
    description: "",
  },
  {
    name: "Статистика",
    path: "/statistics",
    icon: statistics,
    description: "",
  },
  {
    name: "Настройки",
    path: "/settings",
    icon: settings,
    description: "",
  },
  {
    name: "Справка",
    path: "/help",
    icon: reference,
    description: "",
  },
];

export default navigationList;
