import { FC } from "react";
import navigationList from "../../data/navigationList";
import toolbarList from "../../data/toolbarList";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { Toolbar } from "../Toolbar";
import classes from "./Header.module.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={classes.header}>
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Logo />
          <Toolbar toolbarList={toolbarList} />
        </div>
        <Navigation navigationList={navigationList} />
      </div>
    </Container>
  </div>
);
