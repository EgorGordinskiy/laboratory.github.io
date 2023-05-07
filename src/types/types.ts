export interface ToolbarElement {
  element: JSX.Element;
  key: number;
}

export interface FilterElement {
  name: string;
}

export interface NavigationElement {
  name: string;
  path: string;
  icon: string;
  description: string;
}

export enum EntryStatus {
  accepted = "Принята",
  checked = "Проверяется",
  rejected = "Забракована",
}

export enum MessageStatus {
  sent = "Отправлено",
  unsent = "Не отправлено",
}

export enum ModalFormButtonBackgrounds {
  primary = "primary",
  secondary = "secondary",
}

export interface DocumentElement {
  name: string;
  file: string;
}
