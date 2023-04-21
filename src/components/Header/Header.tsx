import { FC } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import classes from "./Header.module.scss";
import { PersonalAccountButton } from "../UI/PersonalAccountButton";
import { BurgerButton } from "../UI/BurgerButton";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={classes.header}>
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <BurgerButton />
          <Logo />
        </div>
        <div className={classes.right}>
          <PersonalAccountButton />
        </div>
      </div>
    </Container>
  </div>
);
