import { FC, useState, useEffect } from "react";
import { Container } from "../../components/Container";
import classes from "./DocumentationPage.module.scss";
import { DocumentsList } from "../../components/DocumentsList";
import documentsList from "../../data/documentsList";
import { SearchBar } from "../../components/SearchBar";
import { DocumentElement } from "../../types/types";

interface DocumentationPageProps {}

const filterDocuments = (
  searchText: string,
  listOfDocuments: DocumentElement[]
) => {
  if (!searchText) {
    return listOfDocuments;
  }
  return listOfDocuments.filter((document) =>
    document.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const DocumentationPage: FC<DocumentationPageProps> = () => {
  const [documentList, setDocumentsList] = useState(documentsList);
  const [searchTerm, setSearchTerm] = useState("");
  const handlerSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtredDocuments = filterDocuments(searchTerm, documentsList);
      setDocumentsList(filtredDocuments);
    }, 300);

    return () => clearInterval(Debounce);
  }, [searchTerm]);

  return (
    <section className={classes.documentationPage}>
      <Container>
        <div className={classes.wrapper}>
          <SearchBar
            searchTerm={searchTerm}
            handlerSearch={handlerSearchTerm}
          />
          <DocumentsList list={documentList} />
        </div>
      </Container>
    </section>
  );
};
