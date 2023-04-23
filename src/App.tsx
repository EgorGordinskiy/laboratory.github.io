import { FC } from "react";
import { BurgerMenu } from "./components/BurgerMenu";
import { Header } from "./components/Header";
import navigationList from "./data/navigationList";
import { Home } from "./pages/Home";
import { useState } from "react";

const App: FC = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const handlerBurgerButton = () => setBurgerMenuActive(!burgerMenuActive);

  return (
    <>
      <Header handlerBurgerButton={handlerBurgerButton} />
      <main>
        <Home />
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