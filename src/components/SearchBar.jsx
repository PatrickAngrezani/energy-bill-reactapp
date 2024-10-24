import React, { useState } from "react";
import { Button, TextField, Grid2, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [clientNumber, setClientNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(clientNumber, month.toUpperCase(), year);
    setClientNumber("");
    setMonth("");
    setYear("");
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Grid2 container spacing={2} alignItems="center">
        <Grid2 item>
          <TextField
            label="Número da UC"
            variant="outlined"
            value={clientNumber}
            onChange={(e) => setClientNumber(e.target.value)}
          />
        </Grid2>
        <Grid2 item>
          <TextField
            label="Mês (ex: SET)"
            variant="outlined"
            value={month.toUpperCase()}
            onChange={(e) => setMonth(e.target.value)}
          />
        </Grid2>
        <Grid2 item>
          <TextField
            label="Ano"
            variant="outlined"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Grid2>
        <Grid2 item>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ height: "100%" }}
          >
            Buscar
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SearchBar;
