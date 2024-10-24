import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Bem vindo(a) a Página de Dashboards</h1>
      <h4>Selecione a opção desejada</h4>
      <div className="buttons">
        <Link to="/energy-dashboard">
          <button>Dashboard - Consumo de Energia</button>
        </Link>
        <Link to="/financial-dashboard">
          <button>Dashboard Financeiro</button>
        </Link>
        <Link to="/invoices-library">
          <button>Consulta a Faturas</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
