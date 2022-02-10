import Head from "next/head";
import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
} from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { Avatar, Card, CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DatePicker from "@mui/lab/DatePicker";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const demoData = [
  {
    invoiceNo: "#13413",
    client: "Bernand D'souza",
    cdate: "1 Jan 2022",
    ddate: "1 Feb 2022",
    amount: "$3200",
    status: "Paid",
  },
];

const Dashboard = () => {
  const [fromvalue, setfromvalue] = React.useState("");
  const [value, setvalue] = React.useState("");
  const [tovalue, settovalue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Head>
        <title>Dashboard | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          fullWidth
          maxWidth="sm"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Add Invoice</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ paddingY: "10px" }}>
              <Grid item sm={6}>
                <TextField
                  id="First-Name-basic"
                  label="Client"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Last-Name-basic"
                  label="Project"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Username-point-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Email-point-basic"
                  label="Tax"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Password-point-basic"
                  label="Client Address"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Confirm-Password-basic"
                  label="Billing Address"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <DatePicker
                  label="Invoice Date"
                  value={fromvalue}
                  onChange={(newValue) => {
                    setfromvalue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>

              <Grid item sm={6}>
                <DatePicker
                  label="Due Date"
                  value={tovalue}
                  onChange={(newValue) => {
                    settovalue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button color="primary" onClick={handleClose} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Container maxWidth={false}>
          <Container fullWidth sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h4">
              Invoices
            </Typography>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              <AddIcon />
              <Typography variant="h6">Add Invoice</Typography>
            </Button>
          </Container>
          <Grid container spacing={2} sx={{ marginY: "30px" }}>
            <Grid item sm={3}>
              <DatePicker
                label="From"
                value={fromvalue}
                onChange={(newValue) => {
                  setfromvalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={3}>
              <DatePicker
                label="To"
                value={tovalue}
                onChange={(newValue) => {
                  settovalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label="Select Company"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Pending</MenuItem>
                  <MenuItem value={20}>Paid</MenuItem>
                  <MenuItem value={30}>Partially Paid</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={3}>
              <Button variant="contained" fullWidth sx={{ height: "100%" }}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="left">Invoice Number</TableCell>
                  <TableCell align="left">Client</TableCell>
                  <TableCell align="left">Created Date</TableCell>
                  <TableCell align="left">Due Date</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...demoData, ...demoData, ...demoData, ...demoData].map((row, idx) => (
                  <TableRow
                    key={row.invoiceNo}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {idx + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.invoiceNo}
                    </TableCell>
                    <TableCell align="left">{row.client}</TableCell>
                    <TableCell align="left">{row.cdate}</TableCell>
                    <TableCell align="left">{row.ddate}</TableCell>
                    <TableCell align="left">{row.amount}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">
                      <MoreVertIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
