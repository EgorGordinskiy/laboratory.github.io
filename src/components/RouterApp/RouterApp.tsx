import { FC } from "react";
import { Route, Routes } from "react-router";
import { HelpPage } from "../../pages/HelpPage";
import { Home } from "../../pages/Home";
import { LoginPage } from "../../pages/LoginPage";

interface RouterAppProps {}

export const RouterApp: FC<RouterAppProps> = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route index path="/login" element={<LoginPage />} />
    <Route index path="/help" element={<HelpPage />} />
  </Routes>
);
