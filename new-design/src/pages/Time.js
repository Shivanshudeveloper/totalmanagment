import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  AppBar,
  IconButton,
  Button,
  Toolbar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Time = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1
        // py: 8,
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <CardContent>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h5">
                    Enter Time
                  </Typography>
                  <Box sx={{ p: 2 }}>
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        This Week (5.121308 Hours)
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Last Week (33.121308 Hours)
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Select Week
                      </Button>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <CardContent>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h5">
                    View
                  </Typography>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    My Time Off
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Time Off Balance
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <CardContent>
                  <Typography align="left" color="textPrimary" gutterBottom variant="h5">
                    View
                  </Typography>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Manage and Correct Time in Workday Job Aid (US and CAN Hourly Support)
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Enter Time by Week
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    My Schedule
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
);

// Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Time;
