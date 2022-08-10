import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/layout/Layout";
import MainPage from "pages/Main";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
