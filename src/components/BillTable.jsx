import React from "react";

const BillTable = ({ bills }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Client Number</th>
          <th>Month</th>
          <th>Year</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill) => (
          <tr key={bill.id}>
            <td>{bill.accountNumber}</td>
            <td>{bill.month}</td>
            <td>{bill.year}</td>
            <td>
              <a
                href={`http://localhost:4000/invoice/download?clientNumber=${bill.accountNumber}&month=${bill.month}&year=${bill.year}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BillTable;
