import { Avatar, Box, Container, Divider, Grid, Typography, Button } from '@mui/material';

import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import WorkIcon from '@mui/icons-material/Work';

const EmployeeDashboard = () => (
  <>
 
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pb: 8
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingY: '25px'
        }}
      >
        <Avatar sx={{ width: 75, height: 75 }} />
        <Container>
          <Typography variant="h5">Welcome, John Doe</Typography>
          <Typography gutterBottom variant="body1">
            Monday, 20 May 2019
          </Typography>
        </Container>
      </Container>

      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <Typography gutterBottom variant="h6" sx={{ marginY: '20px' }}>
              TODAY
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#fff',
                marginBottom: '12px',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <HourglassEmptyIcon fontSize="large" />
                <Typography gutterBottom variant="h5">
                  You are working from home today
                </Typography>
              </div>
              <Avatar />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#fff',
                marginBottom: '12px',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <HourglassEmptyIcon fontSize="large" />
                <Typography gutterBottom variant="h5">
                  You are working from home today
                </Typography>
              </div>
              <Avatar />
            </div>

            <Typography gutterBottom variant="h6" sx={{ marginY: '20px' }}>
              TOMORROW
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 1rem',
                backgroundColor: '#fff',
                marginBottom: '12px',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <WorkIcon fontSize="large" />
                <Typography gutterBottom variant="h5">
                  Two People will be on leave tomorrow
                </Typography>
              </div>
              <Avatar />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#fff',
                marginBottom: '12px',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <WorkIcon fontSize="large" />
                <Typography gutterBottom variant="h5">
                  You are working from home today
                </Typography>
              </div>
              <Avatar />
            </div>

            <Typography gutterBottom variant="h6" sx={{ marginY: '20px' }}>
              NEXT SEVEN DAYS
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 1rem',
                backgroundColor: '#fff',
                marginBottom: '12px',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <WorkIcon fontSize="large" />
                <Typography gutterBottom variant="h5">
                  Two People will be on leave tomorrow
                </Typography>
              </div>
              <Avatar />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#fff',
                marginBottom: '12px',
                borderRadius: '10px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <WorkIcon fontSize="large" />
                <Typography gutterBottom variant="h5">
                  You are working from home today
                </Typography>
              </div>
              <Avatar />
            </div>
          </Grid>
          <Grid item sm={4}>
            <Typography gutterBottom variant="h6" sx={{ marginY: '20px' }}>
              PROJECTS
            </Typography>
            <Container sx={{ backgroundColor: '#fff', borderRadius: '10px', paddingY: '15px' }}>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '15px' }}
              >
                <Container sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5">
                    71
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    TOTAL TASKS
                  </Typography>
                </Container>
                <Divider orientation="vertical" flexItem />
                <Container sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5">
                    14
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    PENDING TASKS
                  </Typography>
                </Container>
              </Container>
              <Container sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5">
                  2
                </Typography>
                <Typography gutterBottom variant="body1">
                  TOTAL PROJECTS
                </Typography>
              </Container>
            </Container>
            <Typography gutterBottom variant="h6" sx={{ marginY: '20px' }}>
              YOUR LEAVE
            </Typography>
            <Container sx={{ backgroundColor: '#fff', borderRadius: '10px', paddingY: '15px' }}>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '15px' }}
              >
                <Container sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5">
                    4.5
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    LEAVE TAKEN
                  </Typography>
                </Container>
                <Divider orientation="vertical" flexItem />
                <Container sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5">
                    12
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    REMAINING
                  </Typography>
                </Container>
              </Container>
              <Container sx={{ textAlign: 'center' }}>
                <Button variant="contained">Apply Leave</Button>
              </Container>
            </Container>{' '}
            <Typography gutterBottom variant="h6" sx={{ marginY: '20px' }}>
              YOUR TIME OFF ALLOWANCE
            </Typography>
            <Container sx={{ backgroundColor: '#fff', borderRadius: '10px', paddingY: '15px' }}>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '15px' }}
              >
                <Container sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5">
                    5.0 Hours
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    APPROVED
                  </Typography>
                </Container>
                <Divider orientation="vertical" flexItem />
                <Container sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5">
                    15 Hours
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    REMAINING
                  </Typography>
                </Container>
              </Container>
              <Container sx={{ textAlign: 'center' }}>
                <Button variant="contained">Apply Time Off</Button>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default EmployeeDashboard;
