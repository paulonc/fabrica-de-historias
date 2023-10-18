import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import FormPage from "./page/FormPage";
import HistoriaPage from "./page/HistoriaPage";
import ErrorPage from "./page/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<FormPage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/error" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
