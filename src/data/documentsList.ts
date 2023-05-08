import { DocumentElement } from "../types/types";
import file from "../assets/documents/doc.pdf";
import mat from "../assets/documents/mat.pdf";

const documentsList: DocumentElement[] = [
  {
    name: "Форма. Акт отбора проб. Пример",
    file: mat,
  },
  {
    name: "Форма журнала. Регистрация проб",
    file: file,
  },
  {
    name: "Акт на списание образцов (проб)",
    file: file,
  },
  {
    name: "Акт отбора образцов (проб)",
    file: file,
  },
  {
    name: "Форма. Акт передачи пробы. Пример",
    file: file,
  },
  {
    name: "Форма. Акт приема пробы. Пример",
    file: file,
  },
  {
    name: "Форма журнала. Регистрация рез-в",
    file: file,
  },
  {
    name: "Форма журнала. Лаб. контроль",
    file: file,
  },
];

export default documentsList;
