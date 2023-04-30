import { FC, useState } from "react";
import classes from "./MyTable.module.scss";
import accepted from "../../assets/images/accepted.svg";
import sent from "../../assets/images/sent.svg";
import unsent from "../../assets/images/unsent.svg";
import checked from "../../assets/images/checked.svg";
import rejected from "../../assets/images/rejected.svg";
import { EntryStatus, MessageStatus } from "../../types/types";

interface MyTableProps {
  headers: string[];
  data: any[][];
  isScroll: boolean;
  isHeaderSticky: boolean;
}

export const MyTable: FC<MyTableProps> = ({
  headers,
  data,
  isScroll,
  isHeaderSticky,
}) => {
  const acceptedIcon = <img src={accepted} alt="Запись одобрена" />;
  const sentIcon = <img src={sent} alt="Сообщение отправлено" />;
  const unsentIcon = <img src={unsent} alt="Сообщение не отправлено" />;
  const checkedIcon = <img src={checked} alt="Сообщение не отправлено" />;
  const rejectedIcon = <img src={rejected} alt="Сообщение не отправлено" />;

  function getCellValue(cellData: any) {
    switch (cellData) {
      case EntryStatus.accepted:
        return acceptedIcon;
      case EntryStatus.checked:
        return checkedIcon;
      case EntryStatus.rejected:
        return rejectedIcon;
      case MessageStatus.sent:
        return sentIcon;
      case MessageStatus.unsent:
        return unsentIcon;
      default:
        return cellData;
    }
  }

  return (
    <div
      className={
        isScroll
          ? [classes.tableContainer, classes.scroll].join(" ")
          : classes.tableContainer
      }
    >
      <table className={classes.table}>
        <thead
          className={
            isHeaderSticky
              ? [classes.header, classes.sticky].join(" ")
              : classes.header
          }
        >
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.body}>
          {data.map((rowData, index) => (
            <tr key={index}>
              {rowData.map((cellData, index) => (
                <td key={index}>{getCellValue(cellData)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
