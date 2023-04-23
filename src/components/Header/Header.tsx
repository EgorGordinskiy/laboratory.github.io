import { FC } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import classes from "./Header.module.scss";
import { PersonalAccountButton } from "../UI/PersonalAccountButton";
import { BurgerButton } from "../UI/BurgerButton";

interface HeaderProps {
  handlerBurgerButton: () => void;
}

export const Header: FC<HeaderProps> = ({ handlerBurgerButton }) => (
  <div className={classes.header}>
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <BurgerButton onClick={() => handlerBurgerButton()} />
          <Logo />
        </div>
        <div className={classes.right}>
          <PersonalAccountButton />
        </div>
      </div>
    </Container>
  </div>
);
