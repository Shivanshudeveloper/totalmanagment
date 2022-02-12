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

const PersonalInformation = () => (
  <>
 
    <Box
      component="main"
      sx={{
        flexGrow: 1
      }}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Personal Information
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
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
                    Change
                  </Typography>
                  <Box sx={{ p: 2 }}>
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Contact Information
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Personal Information
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Emergency Contacts
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Photo
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Legal Name
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Preferred Name
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Govt IDs
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Passport and Visa
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                        Social Networks
                      </Button>
                      <Button sx={{ width: '100%', marginY: '5px' }} color="primary">
                        Less (4)
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
                    About Me
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Addresses
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Email Address
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Address Change
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Name
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Phone Numbers
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} variant="contained">
                    Worker Documents
                  </Button>
                  <Button sx={{ width: '100%', marginY: '5px' }} color="primary">
                    Less (2)
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

export default PersonalInformation;
