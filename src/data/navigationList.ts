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
  },
  {
    name: "Планирование",
    path: "/",
    icon: calendar,
  },
  {
    name: "Документация",
    path: "/",
    icon: table,
  },
  {
    name: "Справочник",
    path: "/",
    icon: references,
  },
  {
    name: "Статистика",
    path: "/",
    icon: statistics,
  },
  {
    name: "Настройки",
    path: "/",
    icon: settings,
  },
  {
    name: "Справка",
    path: "/help",
    icon: reference,
  },
];

export default navigationList;
