import { FC, useState } from "react";
import { DocumentElement } from "../../types/types";
import classes from "./DocumentItem.module.scss";
import { Modal } from "../Modal";
import download from "../../assets/images/download.svg";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface DocumentItemProps {
  item: DocumentElement;
}

export const DocumentItem: FC<DocumentItemProps> = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <>
      <li
        className={classes.documentItem}
        onClick={() => setModalVisible(!modalVisible)}
      >
        <div className={classes.top}>
          <div className={classes.documentImage}>
            <Document
              file={item.file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={"Загрузка..."}
              error={""}
            >
              <Page pageNumber={1} width={116} />
            </Document>
          </div>
          <div className={classes.documentName}>{item.name}</div>
        </div>
        <a href={item.file} onClick={handleLinkClick}>
          <img className={classes.icon} src={download} alt="download" />
        </a>
      </li>
      {modalVisible && (
        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <div className={classes.pdfContainer}>
            <Document
              file={item.file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={"Загрузка..."}
              error={""}
              noData={""}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={index + 1} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </Modal>
      )}
    </>
  );
};
