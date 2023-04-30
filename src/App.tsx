import { FC } from "react";
import { BurgerMenu } from "./components/BurgerMenu";
import { Header } from "./components/Header";
import navigationList from "./data/navigationList";
import { useState } from "react";
import { RouterApp } from "./components/RouterApp";

const App: FC = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const handlerBurgerButton = () => setBurgerMenuActive(!burgerMenuActive);

  return (
    <>
      <Header handlerBurgerButton={handlerBurgerButton} />
      <main>
        <RouterApp />
      </main>
      <BurgerMenu
        active={burgerMenuActive}
        setActive={setBurgerMenuActive}
        items={navigationList}
      />
    </>
  );
};

export default App;
