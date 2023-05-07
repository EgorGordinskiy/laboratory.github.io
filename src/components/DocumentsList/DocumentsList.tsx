import { FC } from "react";
import { DocumentElement } from "../../types/types";
import { DocumentItem } from "../DocumentItem";
import classes from "./DocumentsList.module.scss";

interface DocumentsListProps {
  list: DocumentElement[];
}

export const DocumentsList: FC<DocumentsListProps> = ({ list }) => (
  <ul className={classes.documentsList}>
    {list.map((item) => (
      <DocumentItem item={item} key={item.name} />
    ))}
  </ul>
);
