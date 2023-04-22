import { FC, useState } from "react";
import classes from "./MyTable.module.scss";
import accepted from "../../assets/images/accepted.svg";
import message from "../../assets/images/message.svg";

interface MyTableProps {
  headers: string[];
  data: any[][];
}

export const MyTable: FC<MyTableProps> = ({ headers, data }) => {
  const acceptedIcon = <img src={accepted} alt="Принят" />;
  const sentIcon = <img src={message} alt="Принят" />;

  function getCellValue(cellData: any) {
    switch (cellData) {
      case "Принят":
        return acceptedIcon;
      case "Отправлен":
        return sentIcon;
      default:
        return cellData;
    }
  }

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead className={classes.header}>
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
