import { FC } from "react";
import { Route, Routes } from "react-router";
import { DocumentationPage } from "../../pages/DocumentationPage";
import { HelpPage } from "../../pages/HelpPage";
import { LoginPage } from "../../pages/LoginPage";
import { SampleLogPage } from "../../pages/SampleLogPage";

interface RouterAppProps {}

export const RouterApp: FC<RouterAppProps> = () => {
  return (
    <Routes>
      <Route index path="/" element={<SampleLogPage />} />
      <Route index path="/login" element={<LoginPage />} />
      <Route index path="/help" element={<HelpPage />} />
      <Route index path="/documentation" element={<DocumentationPage />} />
    </Routes>
  );
};
