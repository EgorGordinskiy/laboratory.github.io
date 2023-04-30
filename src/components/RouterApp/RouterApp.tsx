import { FC } from "react";
import { Route, Routes } from "react-router";
import { DocumentationPage } from "../../pages/DocumentationPage";
import { GuidePage } from "../../pages/GuidePage";
import { HelpPage } from "../../pages/HelpPage";
import { LoginPage } from "../../pages/LoginPage";
import { SampleLogPage } from "../../pages/SampleLogPage";
import { SettingsPage } from "../../pages/SettingsPage";
import { StatisticsPage } from "../../pages/StatisticsPage";

interface RouterAppProps {}

export const RouterApp: FC<RouterAppProps> = () => {
  return (
    <Routes>
      <Route index path="/" element={<SampleLogPage />} />
      <Route index path="/login" element={<LoginPage />} />
      <Route index path="/help" element={<HelpPage />} />
      <Route index path="/documentation" element={<DocumentationPage />} />
      <Route index path="/settings" element={<SettingsPage />} />
      <Route index path="/guide" element={<GuidePage />} />
      <Route index path="/statistics" element={<StatisticsPage />} />
    </Routes>
  );
};
