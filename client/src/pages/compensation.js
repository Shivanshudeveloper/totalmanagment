import Head from "next/head";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DashboardLayout } from "../components/dashboard-layout";

const Products = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#7c7c7c",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(address, usage, visibility, sharedwith, date) {
    return { address, usage, visibility, sharedwith, date };
  }

  const rows = [
    createData(
      "Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401",
      "Home (Primary)",
      "Private",
      "",
      "2/27/2020"
    ),
  ];

  return (
    <>
      <Head>
        <title>Products | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent>
            <Container maxWidth={false}>
              <Typography variant="h6" color="inherit" component="div" sx={{ marginTop: "20px" }}>
                Total 1 items
              </Typography>

              <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
                <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Total Salray and Allowance</StyledTableCell>
                      <StyledTableCell align="left">Total base pay</StyledTableCell>
                      <StyledTableCell align="left">Base pay basis</StyledTableCell>
                      <StyledTableCell align="left">Currency </StyledTableCell>
                      <StyledTableCell align="left">Frequency</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.address}>
                        <StyledTableCell component="th" scope="row">
                          30.0
                        </StyledTableCell>
                        <StyledTableCell align="left">30.0</StyledTableCell>
                        <StyledTableCell align="left">30.0</StyledTableCell>
                        <StyledTableCell align="left">USD</StyledTableCell>
                        <StyledTableCell align="left">Hourly</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 7 }}
                sx={{ marginY: "30px" }}
              >
                <Grid item xs={12}>
                  <Typography
                    align="left"
                    color="textPrimary"
                    gutterBottom
                    variant="h5"
                    sx={{ marginBottom: "20px" }}
                  >
                    Compensation
                  </Typography>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Employee ID
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        23841300
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Supervisiory Organization
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        Nocovda Top Supervisor Org
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Position
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        Recurting Coord 1
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Business Title
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        Recurting Coord 1
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Job Profile
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        Recurting Coord 1
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Location
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        699 Malboro
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                        Employee Type
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <Typography align="left" color="textPrimary" variant="body1">
                        Regular
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Typography variant="h6" color="inherit" component="div" sx={{ marginTop: "20px" }}>
                Total 1 items
              </Typography>
              <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
                <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Effective Date</StyledTableCell>
                      <StyledTableCell align="left">Plan Type</StyledTableCell>
                      <StyledTableCell align="left">Compensation Plan</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.address}>
                        <StyledTableCell component="th" scope="row">
                          12/23/2022
                        </StyledTableCell>
                        <StyledTableCell align="left">Hourly</StyledTableCell>
                        <StyledTableCell align="left">Hourly</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
