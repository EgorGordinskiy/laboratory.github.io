import { FC, useState } from "react";
import classes from "./MyTable.module.scss";

interface MyTableProps {
  headers: string[];
  data: any[][];
}

export const MyTable: FC<MyTableProps> = ({ headers, data }) => (
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
              <td key={index}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
