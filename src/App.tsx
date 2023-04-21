import { FC } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { MyTable } from "./components/MyTable";
import { Toolbar } from "./components/Toolbar";
import toolbarList from "./data/toolbarList";
import { Home } from "./pages/Home";

const App: FC = () => {
  const headers = [
    "Статус",
    "№ пробы",
    "№ транспорта",
    "№ ямы",
    "Сорт зерна",
    "Влажность",
    "Дата",
    "Выполнил",
    "№ Смены",
  ];
  const data = [
    ["John Doe", 25, "New York"],
    ["Jane Smith", 30, "Los Angeles"],
    ["Bob Johnson", 45, "Chicago"],
    ["Sally Brown", 20, "Miami"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
    ["Tom Wilson", 35, "San Francisco"],
  ];

  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
