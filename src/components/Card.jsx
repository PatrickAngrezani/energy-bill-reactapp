import { Card, CardContent, Typography, Grid } from "@mui/material";
import React from "react";

const SummaryCard = ({ title, value }) => {
  return (
    <Card variant="outlined" style={{ margin: "10px", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
