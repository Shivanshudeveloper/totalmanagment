import { Button, Container } from '@mui/material';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Summary = () => (
  <>
   
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              //
              marginY: '10px'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3
                }}
              >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} xs={12}>
                  <Grid item xs={6}>
                    <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                      Supervitory Organization
                    </Typography>
                    <Typography align="left" color="textPrimary" variant="body2">
                      Hr supply chain (Brand Lindsey){' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                      Location
                    </Typography>
                    <Typography align="left" color="textPrimary" variant="body2">
                      699 Marlboro DC
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                      Manager
                    </Typography>
                    <Typography align="left" color="textPrimary" variant="body2">
                      Brandy Linseney
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                      Employee ID
                    </Typography>
                    <Typography align="left" color="textPrimary" variant="body2">
                      83408140
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginY: '10px'
            }}
          >
            <CardContent>
              <Typography align="left" color="textPrimary" gutterBottom variant="h5">
                Education
              </Typography>

              <Grid item xs={12} sx={{ paddingY: '10px' }}>
                <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                  National Volunteer Service
                </Typography>
                <Typography align="left" color="textPrimary" variant="body2">
                  American red cross - Present - 6 Months
                </Typography>
              </Grid>
              <Divider />
              <Grid item xs={12} sx={{ paddingY: '10px' }}>
                <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                  National Volunteer Service
                </Typography>
                <Typography align="left" color="textPrimary" variant="body2">
                  American red cross - Present - 6 Months
                </Typography>
              </Grid>
              <Divider />
              <Button
                variant="contained"
                component="span"
                sx={{ width: '100%', textAlign: 'center', marginY: '20px' }}
              >
                Add
              </Button>
              <Typography align="center" color="textPrimary" gutterBottom variant="h5"></Typography>
              <Typography align="center" color="textPrimary" variant="body1"></Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginY: '10px'
            }}
          >
            <CardContent>
              <Typography align="left" color="textPrimary" gutterBottom variant="h5">
                Upload my Experience
              </Typography>
              <Button variant="contained" component="span">
                Upload
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginY: '10px'
            }}
          >
            <CardContent>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent>
              <Typography align="left" color="textPrimary" gutterBottom variant="h5">
                Job History
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  // justifyContent: "center",
                  pb: 3
                }}
              >
                <Grid item xs={12}>
                  <Typography align="left" color="textPrimary" gutterBottom variant="body1">
                    National Volunteer Service
                  </Typography>
                  <Typography align="left" color="textPrimary" variant="body2">
                    American red cross - Present - 6 Months
                  </Typography>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </>
);

// Summary.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Summary;
