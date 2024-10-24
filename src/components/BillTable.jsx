import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const BillTable = ({ bills }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome da UC</TableCell>
            <TableCell>Número da UC</TableCell>
            <TableCell>Distribuidora</TableCell>
            <TableCell>Consumidor</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.ucName}</TableCell>
              <TableCell>{bill.accountNumber}</TableCell>
              <TableCell>{bill.distributor}</TableCell>
              <TableCell>{bill.ucName}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  href={`http://localhost:4000/invoice/download?clientNumber=${bill.accountNumber}&month=${bill.month}&year=${bill.year}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillTable;
