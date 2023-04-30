import { FC, useEffect, useState } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import classes from "./Header.module.scss";
import { PersonalAccountButton } from "../UI/PersonalAccountButton";
import { BurgerButton } from "../UI/BurgerButton";
import { useLocation } from "react-router";

interface HeaderProps {
  handlerBurgerButton: () => void;
}

export const Header: FC<HeaderProps> = ({ handlerBurgerButton }) => {
  const [pageTitle, setPageTitle] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("Журнал регистрации проб");
        break;
      case "/help":
        setPageTitle("Справка");
        break;
      case "/documentation":
        setPageTitle("Документация");
        break;
      case "/guide":
        setPageTitle("Справочник");
        break;
      case "/statistics":
        setPageTitle("Статистика");
        break;
      case "/settings":
        setPageTitle("Настройки");
        break;
      default:
        setPageTitle("Упс! А такой странички нет :(");
        break;
    }
  }, [location.pathname]);

  return (
    <div className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <BurgerButton onClick={() => handlerBurgerButton()} />
            <Logo name={pageTitle} />
          </div>
          <div className={classes.right}>
            <PersonalAccountButton />
          </div>
        </div>
      </Container>
    </div>
  );
};
