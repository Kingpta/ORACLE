import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Admin/Dashboard";
import StaffPage from "./Admin/StaffPage";
import GlobalStyle from "./shared/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

