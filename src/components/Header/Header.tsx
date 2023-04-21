import { FC } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import classes from "./Header.module.scss";
import burger from "../../assets/images/burger2.svg";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={classes.header}>
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={burger} alt="burger" className={classes.icon} />
          <Logo />
        </div>
      </div>
    </Container>
  </div>
);
