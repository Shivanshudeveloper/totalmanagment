import Head from "next/head";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import TrafficByDevice from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const demoRecentProjects = [
  { title: "Office Management", desc: "1 open tasks, 9 tasks completed" },
  { title: "Project Management", desc: "2 open tasks, 4 tasks completed" },
  { title: "Video Calling App", desc: "3 open tasks, 13 tasks completed" },
  { title: "Digital Marketplace", desc: "1 open tasks, 19 tasks completed" },
];

const demoInvoices = [
  {
    id: "#INV-0001",
    client: "Global Technologies",
    dueDate: "11 Mar 2019",
    total: "$380",
    status: "Partially Paid",
  },
  {
    id: "#INV-0001",
    client: "T Technologies",
    dueDate: "11 Mar 2019",
    total: "$380",
    status: "Unpaid",
  },
  {
    id: "#INV-0001",
    client: "Docsup Technologies",
    dueDate: "11 Mar 2019",
    total: "$380",
    status: "Paid",
  },
];

const demoPayments = [
  {
    id: "#INV-0001",
    client: "Global Technologies",
    dueDate: "11 Mar 2019",
    paymentType: "Paypal",
    paidAmount: "$380",
  },
  {
    id: "#INV-0001",
    client: "T Technologies",
    dueDate: "11 Mar 2019",
    paymentType: "Paypal",
    paidAmount: "$380",
  },
  {
    id: "#INV-0001",
    client: "Docsup Technologies",
    dueDate: "11 Mar 2019",
    paymentType: "Paypal",
    paidAmount: "$380",
  },
];

const Dashboard = () => (
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
      <Container maxWidth={false}>
        <Typography gutterBottom variant="h5">
          Welcome Admin!
        </Typography>
        <Typography gutterBottom variant="h6">
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>
          <Grid item xs={6}>
            <Sales />
          </Grid>
          <Grid item xs={6}>
            <TrafficByDevice />
          </Grid>
          {/* <Grid item xs={6}>
            <LatestOrders />
          </Grid>
          <Grid item xs={6}>
            <LatestOrders />
          </Grid> */}

          <Grid item sm={3}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography variant="body2">New Employees</Typography>
              <Typography variant="h5">10</Typography>
              <Typography variant="body1">Overall Employees 218</Typography>
            </Container>
          </Grid>
          <Grid item sm={3}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography variant="body2">New Employees</Typography>
              <Typography variant="h5">10</Typography>
              <Typography variant="body1">Overall Employees 218</Typography>
            </Container>
          </Grid>
          <Grid item sm={3}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography variant="body2">New Employees</Typography>
              <Typography variant="h5">10</Typography>
              <Typography variant="body1">Overall Employees 218</Typography>
            </Container>
          </Grid>
          <Grid item sm={3}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography variant="body2">New Employees</Typography>
              <Typography variant="h5">10</Typography>
              <Typography variant="body1">Overall Employees 218</Typography>
            </Container>
          </Grid>
          <Grid item sm={4}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography>Statistics</Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: ".5rem",
                  padding: "1rem",
                  border: "0.5px solid #e0e0e0",
                }}
              >
                <div>Today Leave</div>
                <div>28/84</div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: ".5rem",
                  padding: "1rem",
                  border: "0.5px solid #e0e0e0",
                }}
              >
                <div>Pending Invoice</div>
                <div>6/12</div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: ".5rem",
                  padding: "1rem",
                  border: "0.5px solid #e0e0e0",
                }}
              >
                <div>Completed Projects</div>
                <div>61/122</div>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: ".5rem",
                  padding: "1rem",
                  border: "0.5px solid #e0e0e0",
                }}
              >
                <div>Open Tickets</div>
                <div>36/212</div>
              </div>{" "}
            </Container>
          </Grid>
          <Grid item sm={4}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography variant="h5">Task Statistics</Typography>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem",
                      border: "0.5px solid #e0e0e0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Total Tasks </Typography>
                    <Typography variant="h5">385</Typography>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      border: "0.5px solid #e0e0e0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Overdue Tasks</Typography>
                    <Typography variant="h5">15</Typography>
                  </div>
                </div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}
                  >
                    <div>Completed Tasks</div>
                    <div>166</div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}
                  >
                    <div> Inprogress Tasks</div>
                    <div>126</div>
                  </div>{" "}
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}
                  >
                    <div>On Hold Tasks</div>
                    <div>6</div>
                  </div>{" "}
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}
                  >
                    <div>Pending Tasks</div>
                    <div>29</div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginTop: ".5rem" }}
                  >
                    <div>Review Tasks</div>
                    <div>89</div>
                  </div>
                </div>
              </div>
            </Container>
          </Grid>
          <Grid item sm={4}>
            <Container sx={{ backgroundColor: "#fff", padding: "1rem" }}>
              <Typography variant="h5">Today Absent</Typography>
              <div style={{ border: "0.25px solid #e0e0e0", padding: "1rem", marginTop: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // backgroundColor: "#fff",
                  }}
                >
                  <Avatar sx={{ width: 35, height: 35, marginRight: "5px" }} />
                  <div
                    style={{
                      padding: "5px",
                    }}
                  >
                    <Typography variant="body1">John Doe</Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="body1">4 Sep 2019</Typography>
                    <Typography variant="body2">Leave Date</Typography>
                  </div>
                  <div>
                    <p
                      style={{
                        backgroundColor: "#FFE5E8",
                        color: "#FF0000",
                        borderRadius: "3px",
                        padding: "2px 4px",
                        fontSize: "12px",
                      }}
                    >
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ border: "0.25px solid #e0e0e0", padding: "1rem", marginTop: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // backgroundColor: "#fff",
                  }}
                >
                  <Avatar sx={{ width: 35, height: 35, marginRight: "5px" }} />
                  <div
                    style={{
                      padding: "5px",
                    }}
                  >
                    <Typography variant="body1">John Doe</Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="body1">4 Sep 2019</Typography>
                    <Typography variant="body2">Leave Date</Typography>
                  </div>
                  <div>
                    <p
                      style={{
                        backgroundColor: "#FFE5E8",
                        color: "#FF0000",
                        borderRadius: "3px",
                        padding: "2px 4px",
                        fontSize: "12px",
                      }}
                    >
                      Pending
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardHeader title="Invoices" />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell align="left">Client</TableCell>
                      <TableCell align="left">Due Date</TableCell>
                      <TableCell align="left">Total</TableCell>
                      <TableCell align="left">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {demoInvoices.map((invoice) => (
                      <TableRow
                        key={invoice.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {invoice.id}
                        </TableCell>
                        <TableCell align="left">{invoice.client}</TableCell>
                        <TableCell align="left">{invoice.dueDate}</TableCell>
                        <TableCell align="left">{invoice.total}</TableCell>
                        <TableCell align="left">{invoice.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardHeader title="Payments" />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell align="left">Client</TableCell>
                      <TableCell align="left">Payment Type</TableCell>
                      <TableCell align="left">Paid Date</TableCell>
                      <TableCell align="left">Paid Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {demoPayments.map((payment) => (
                      <TableRow
                        key={payment.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {payment.id}
                        </TableCell>
                        <TableCell align="left">{payment.client}</TableCell>
                        <TableCell align="left">{payment.paymentType}</TableCell>
                        <TableCell align="left">{payment.dueDate}</TableCell>
                        <TableCell align="left">{payment.paymentType}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardHeader title="Clients" />
            </Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
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
                              padding: "5px",
                            }}
                          >
                            <Typography variant="body1">John Doe</Typography>
                            <Typography gutterBottom variant="body2">
                              CEO
                            </Typography>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">johndoe@domainname.com</TableCell>
                      <TableCell align="right">Active</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <CardHeader title="Recent Projects" />
              <TableContainer component={Paper}>
                <Table sx={{ Width: "100%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name </TableCell>
                      <TableCell align="right">Progress</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {demoRecentProjects.map((data) => (
                      <TableRow
                        key={data.title}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography variant="h6">{data.title}</Typography>
                          <Typography variant="body2">{data.desc}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <DoneOutlineIcon />
                        </TableCell>
                        <TableCell align="center">
                          <MoreVertIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
