import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import {
  Container,
  Grid,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const demoEarnings = [
  { title: "Basic Salary", amount: "$6500" },
  { title: "House Rent Allowance (H.R.A.)", amount: "$55" },
  { title: "Conveyance", amount: "$55" },
  { title: "Other Allowance", amount: "$55" },
  { title: "Total Earnings", amount: "$55" },
];
const demoDeductions = [
  { title: "Tax Deducted at Source (T.D.S.)", amount: "$0" },
  { title: "Provident Fund", amount: "$0" },
  { title: "Provident Fund", amount: "$0" },
  { title: "ESI", amount: "$5" },
  { title: "Total Deductions", amount: "$5" },
];

const Payslip = () => {
  return (
    <>
      <Container fullWidth sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h4">
          Payroll Items
        </Typography>
      </Container>
      <Card sx={{ maxWidth: "100%", margin: "2rem", padding: "1rem" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 18, textDecoration: "underline", fontWeight: "bold" }}
            gutterBottom
            align="center"
          >
            PAYSLIP FOR THE MONTH OF FEB 2022
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem 0" }}>
            <div>
              <Typography variant="body1">Dreamguy's Technologies</Typography>
              <Typography variant="body1">3864 Quiet Valley Lane,</Typography>
              <Typography variant="body1">Sherman Oaks, CA, 91403</Typography>

              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body1">Web Designer</Typography>
              <Typography variant="body1">Employee ID: FT-0009</Typography>
              <Typography variant="body1">Joining Date: 1 Jan 2013</Typography>
            </div>
            <div>
              <Typography variant="h4">PAYSLIP #49029</Typography>
              <Typography variant="h6">Salary Month: March, 2019</Typography>
            </div>
          </div>
          <Grid container spacing={3} sx={{ marginY: "25px" }}>
            <Grid item xs={6}>
              <Typography variant="h5">Earnings</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableBody>
                    {demoEarnings.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell align="left">
                          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} gutterBottom>
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} gutterBottom>
                            {row.amount}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h5">Deductions</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableBody>
                    {demoDeductions.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell align="left">
                          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} gutterBottom>
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} gutterBottom>
                            {row.amount}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <p>
            <span style={{ fontWeight: "bold" }}>Net Salary: $59698</span>
            (Fifty nine thousand six hundred and ninety eight only.)
          </p>
        </CardContent>
      </Card>
    </>
  );
};

// Payslip.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Payslip;
