import { FC } from "react";
import classes from "./SearchBar.module.scss";
import search from "../../assets/images/search.svg";

interface SearchBarProps {
  searchTerm: string;
  handlerSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  searchTerm,
  handlerSearch,
}) => {
  return (
    <div className={classes.searchBar}>
      <img src={search} alt="search" />
      <input
        type="text"
        placeholder="Поиск по документации"
        value={searchTerm}
        onChange={handlerSearch}
      />
    </div>
  );
};
