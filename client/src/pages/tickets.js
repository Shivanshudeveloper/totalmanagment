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
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import TrafficByDevice from "../components/dashboard/traffic-by-device";
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
    name: "Bernardo Galaviz",
    date: "1 Jan 2014",
    lastReply: "1 Jan 2014",
    priority: "high",
    status: "new",
    subject: "Laptop Issue",
    ticketID: "FT-0007",
  },
];

const Dashboard = () => {
  const [fromvalue, setfromvalue] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [priority, setpriority] = React.useState("");
  const [tovalue, settovalue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleStatusChange = (e) => {
    setstatus(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setpriority(e.target.value);
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
          <DialogTitle>
            <Typography variant="h5" align="center">
              Add Ticket
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ paddingY: "10px" }}>
              <Grid item sm={6}>
                <TextField
                  id="First-Name-basic"
                  label="Ticket Subject"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Last-Name-basic"
                  label="Ticket ID"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Username-point-basic"
                  label="Assign Staff"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Email-point-basic"
                  label="Client"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Password-point-basic"
                  label="Priority"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Confirm-Password-basic"
                  label="CC"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Client-ID-basic"
                  label="Assign"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Phone-point-basic"
                  label="Add Followers"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="Company-Name-point-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button color="primary" variant="contained" onClick={handleClose} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Container maxWidth={false}>
          <Container fullWidth sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h4">
              Tickets
            </Typography>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              <AddIcon />
              <Typography variant="h6">Add Ticket</Typography>
            </Button>
          </Container>
          <Grid container spacing={1} sx={{ my: 2 }}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Grid item sm={9}>
                      <Typography variant="h6">New Tickets</Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography color="green" variant="h6">
                        +19%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h5">112</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Grid item sm={9}>
                      <Typography variant="h6">Solved Tickets</Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography color="green" variant="h6">
                        +12.5%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h5">70</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Grid item sm={9}>
                      <Typography variant="h6">Open Tickets</Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography color="red" variant="h6">
                        -1.9%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h5">100</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Grid item sm={9}>
                      <Typography variant="h6">Pending Tickets</Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography color="red" variant="h6">
                        +79%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h5">123</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginY: "30px" }}>
            <Grid item sm={2}>
              <TextField fullWidth id="outlined-basic" label="Employee Name" variant="outlined" />
            </Grid>
            <Grid item sm={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Select Company"
                  onChange={handleStatusChange}
                >
                  <MenuItem value={10}>Pending</MenuItem>
                  <MenuItem value={20}>Approved</MenuItem>
                  <MenuItem value={30}>Returned</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="Select Company"
                  onChange={handlePriorityChange}
                >
                  <MenuItem value={10}>High</MenuItem>
                  <MenuItem value={20}>Low</MenuItem>
                  <MenuItem value={30}>Medium</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2}>
              <DatePicker
                label="From"
                value={fromvalue}
                onChange={(newValue) => {
                  setfromvalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={2}>
              <DatePicker
                label="To"
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
                  <TableCell>Ticket Id</TableCell>
                  <TableCell align="left">Ticket Subject</TableCell>
                  <TableCell align="left">Assigned Staff</TableCell>
                  <TableCell align="left">Created Date</TableCell>
                  <TableCell align="left">Last Reply</TableCell>
                  <TableCell align="left">Priority</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...demoData, ...demoData, ...demoData, ...demoData].map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.ticketID}</TableCell>
                    <TableCell align="left">{row.subject}</TableCell>
                    <TableCell component="th" scope="row">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          backgroundColor: "#fff",
                        }}
                      >
                        <Avatar sx={{ width: 35, height: 35, marginRight: "5px" }} />
                        <div
                          style={{
                            padding: "3px",
                          }}
                        >
                          <Typography variant="body1">John Doe</Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.lastReply}</TableCell>
                    <TableCell align="left">{row.priority}</TableCell>
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
