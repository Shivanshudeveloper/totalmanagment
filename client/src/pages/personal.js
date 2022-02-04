import Head from "next/head";

import { DashboardLayout } from "../components/dashboard-layout";
import { Container, Box, Card, CardContent, Button, Grid, Typography } from "@mui/material";

const Products = () => (
  <>
    <Head>
      <title>Products | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 4,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Button variant="contained" sx={{ mb: "20px" }}>
            Edit
          </Button>
          <Typography align="left" color="textPrimary" gutterBottom variant="h5">
            Personal
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={4}>
                <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                  Gender
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Typography align="left" color="textPrimary" variant="body1">
                  Female
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={4}>
                <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                  Date of Birth
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Typography align="left" color="textPrimary" variant="body1">
                  04/11/1998
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={4}>
                <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                  Age
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Typography align="left" color="textPrimary" variant="body1">
                  30
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={4}>
                <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                  Hispani or Latino
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Typography align="left" color="textPrimary" variant="body1">
                  Hello
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={4}>
                <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                  Race / Ethinicity
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Typography align="left" color="textPrimary" variant="body1">
                  White (Not Hispani or Latino)(United States of America)
                </Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </Box>
  </>
);

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
