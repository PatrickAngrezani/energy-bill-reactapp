import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import BillTable from "./BillTable";

const InvoicesLibrary = () => {
  const [bills, setBills] = useState([]);

  const handleSearch = async (clientNumber, month, year) => {
    try {
      const response = await axios.get("http://localhost:4000/energy-bill", {
        params: { clientNumber, month, year },
      });

      setBills(response.data.energyBills);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setBills([]);
        alert("Nenhuma Fatura foi encontrada!");
      } else {
        console.error("Error fetching bills:", error);
      }
    }
  };

  return (
    <div>
      <h1>Consulte sua Fatura</h1>
      <SearchBar onSearch={handleSearch} />
      {bills.length > 0 ? (
        <BillTable bills={bills} />
      ) : (
        <p>
          Nenhuma Fatura encontrada. Por favor, pesquise através do formulário
          acima.
        </p>
      )}
    </div>
  );
};

export default InvoicesLibrary;
