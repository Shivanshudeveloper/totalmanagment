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

const Dashboard = () => {
  const [value, setvalue] = React.useState("");
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
  const clients = [1, 2, 3, 4, 5, 6, 7, 8];
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
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Last-Name-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Username-point-basic"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Email-point-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Password-point-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Confirm-Password-basic"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Client-ID-basic"
                  label="Client ID"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Phone-point-basic"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Company-Name-point-basic"
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button color="error" onClick={handleClose} autoFocus>
              Cancel
            </Button>
            <Button color="primary" onClick={handleClose} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Container maxWidth={false}>
          <Container fullWidth sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h4">
              Clients
            </Typography>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              <AddIcon />
              <Typography variant="h6">Add Client</Typography>
            </Button>
          </Container>
          <Grid container spacing={2} sx={{ marginY: "30px" }}>
            <Grid item sm={3}>
              <TextField fullWidth id="outlined-basic" label="Client ID" variant="outlined" />
            </Grid>
            <Grid item sm={3}>
              <TextField fullWidth id="outlined-basic" label="Client Name" variant="outlined" />
            </Grid>
            <Grid item sm={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
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
            <Grid item sm={3}>
              <Button variant="contained" fullWidth sx={{ height: "100%" }}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            {clients.map((client) => (
              <Grid item sm={3}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: "primary.main",
                        height: 100,
                        width: 100,
                        marginBottom: "10px",
                      }}
                    >
                      {/* <AttachMoneyIcon /> */}
                    </Avatar>
                    <Typography gutterBottom variant="h6">
                      Global Technologies
                    </Typography>
                    <Typography variant="body1">Barry Cuda</Typography>
                    <Typography gutterBottom variant="body2">
                      CEO
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                      <Button size="small" variant="outlined">
                        Outlined
                      </Button>
                      <Button size="small" variant="outlined">
                        Outlined
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
