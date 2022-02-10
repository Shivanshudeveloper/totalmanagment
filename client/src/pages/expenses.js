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
import { setDate } from "date-fns";

const demoData = [
  {
    item: "MacBook Pro",
    pfrom: "Amazon",
    pdate: "1 Jan 2022",
    amt: "$300",
    pby: "Bernardo Galaviz",
    paidby: "Cash",
    status: "Pending",
  },
];

const Dashboard = () => {
  const [fromvalue, setfromvalue] = React.useState("");
  const [date, setdate] = React.useState("");

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
          <DialogTitle>Add Client</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ paddingY: "10px" }}>
              <Grid item sm={6}>
                <TextField
                  id="First-Name-basic"
                  label="Item Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Last-Name-basic"
                  label="Purchased From"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <DatePicker
                  label="Basic example"
                  value={date}
                  onChange={(newValue) => {
                    setdate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Email-point-basic"
                  label="Purchased By"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Password-point-basic"
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Confirm-Password-basic"
                  label="Paid By"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Client-ID-basic"
                  label="Status"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button color="primary" onClick={handleClose} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Container maxWidth={false}>
          <Container fullWidth sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h4">
              Expenses
            </Typography>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              <AddIcon />
              <Typography variant="h6">Add Expense</Typography>
            </Button>
          </Container>
          <Grid container spacing={2} sx={{ marginY: "30px" }}>
            <Grid item sm={2}>
              <TextField fullWidth id="outlined-basic" label="Item Name" variant="outlined" />
            </Grid>
            <Grid item sm={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Purchased By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label="Select Company"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Global Technologies</MenuItem>
                  <MenuItem value={20}>T Technologies</MenuItem>
                  <MenuItem value={30}>Docs Technologies</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Paid By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label="Select Company"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Global Technologies</MenuItem>
                  <MenuItem value={20}>T Technologies</MenuItem>
                  <MenuItem value={30}>Docs Technologies</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2}>
              <DatePicker
                label="Basic example"
                value={fromvalue}
                onChange={(newValue) => {
                  setfromvalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={2}>
              <DatePicker
                label="Basic example"
                value={tovalue}
                onChange={(newValue) => {
                  settovalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={2}>
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
                  <TableCell>Item</TableCell>
                  <TableCell align="left">Purchase From</TableCell>
                  <TableCell align="left">Purchase Date</TableCell>
                  <TableCell align="left">Purchase By</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Paid By</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...demoData, ...demoData, ...demoData, ...demoData].map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.item}</TableCell>
                    <TableCell align="left">{row.pfrom}</TableCell>
                    <TableCell align="left">{row.pdate}</TableCell>
                    <TableCell align="left">{row.pby}</TableCell>
                    <TableCell align="left">{row.amt}</TableCell>
                    <TableCell align="left">{row.paidby}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="right">
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
