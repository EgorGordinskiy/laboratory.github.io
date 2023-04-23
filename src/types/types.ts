import { ReactComponentElement } from "react";

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
}

enum EntryStatus {}
