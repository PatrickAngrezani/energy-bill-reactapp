import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [clientNumber, setClientNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    onSearch(clientNumber, month.toUpperCase(), year);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Account Number"
        value={clientNumber}
        onChange={(e) => setClientNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Month (e.g. SET)"
        value={month.toUpperCase()}
        onChange={(e) => setMonth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
