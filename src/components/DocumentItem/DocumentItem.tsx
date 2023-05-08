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
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  function goToPrevPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }

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
        <a href={item.file} onClick={handleLinkClick} target="_blank">
          <img className={classes.icon} src={download} alt="download" />
        </a>
      </li>
      {modalVisible && (
        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <div className={classes.pdfContainer}>
            <Document
              className={classes.pdfPage}
              file={item.file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={"Загрузка..."}
              error={""}
              noData={""}
            >
              <Page key={pageNumber} pageNumber={pageNumber} />
            </Document>
            {numPages > 1 && (
              <div className={classes.pdfBtns}>
                <button disabled={pageNumber <= 1} onClick={goToPrevPage}>
                  {"<"}
                </button>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={goToNextPage}
                >
                  {">"}
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
