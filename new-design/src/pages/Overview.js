// import { Box, Container, Grid, Pagination } from "@mui/material";
import { Container, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Overview = () => (
  <>
   
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <CardContent>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid item xs={6}>
              <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                Job Details
              </Typography>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Employee ID
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
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
                  {' '}
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
                  {' '}
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
                  {' '}
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
                  {' '}
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
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    <LocationOnIcon />
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
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    Regular
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Hire Date
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    12/12/2020
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Original Hire Date
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    12/12/2020
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Continuous Service Date
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    12/12/2020
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Management Level
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    Level 12 - Individual Contributor Track
                  </Typography>
                </Grid>
              </Grid>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Length of Service
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    0 year(s), 11 Month(s), 23 Day(s)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                Contact Information - Public
              </Typography>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                    Email
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  {' '}
                  <Typography align="left" color="textPrimary" variant="body1">
                    <MailOutlineIcon />
                    prathmeshsadake@gmail.com
                  </Typography>
                </Grid>
              </Grid>
              <Typography align="left" color="textPrimary" gutterBottom variant="h6">
                Work Address
              </Typography>
              <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                <LocationOnIcon />
                714 Lowes Alley, Saint Clairsville Ohio, United States
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  </>
);

// Overview.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Overview;
