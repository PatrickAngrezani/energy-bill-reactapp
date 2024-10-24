import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EnergyDashboard from "./components/EnergyDashboard";
import FinancialDashboard from "./components/FinancialDashboard";
import InvoicesLibrary from "./components/InvoicesLibrary";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energy-dashboard" element={<EnergyDashboard />} />
          <Route path="/financial-dashboard" element={<FinancialDashboard />} />
          <Route path="/invoices-library" element={<InvoicesLibrary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
