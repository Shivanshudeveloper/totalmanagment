import React from 'react';

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
  Dialog
} from '@mui/material';

import { Avatar, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Projects = () => {
  const [value, setvalue] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [date, setdate] = React.useState(new Date());

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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
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
          <DialogTitle>Create Project</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ paddingY: '10px' }}>
              <Grid item sm={6}>
                <TextField
                  id="Project-Name-basic"
                  label="Project Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Client-basic"
                  label="Client"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <DesktopDatePicker
                  label="Start Date"
                  value={date}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setdate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item sm={6}>
                {' '}
                <DesktopDatePicker
                  label="End Date"
                  value={date}
                  minDate={new Date('2017-01-01')}
                  onChange={(newValue) => {
                    setdate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>

              <Grid item sm={6}>
                <TextField
                  id="Add-Project-Leader-point-basic"
                  label="Add Project Leader"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Add-Team-point-basic"
                  label="Add Team"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="Description-point-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ marginTop: '1rem' }}
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
          <Container fullWidth sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h4">
              Projects
            </Typography>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              <AddIcon />
              <Typography variant="h6">Create Project</Typography>
            </Button>
          </Container>
          <Grid container spacing={2} sx={{ marginY: '30px' }}>
            <Grid item sm={3}>
              <TextField fullWidth id="outlined-basic" label="Project Name" variant="outlined" />
            </Grid>
            <Grid item sm={3}>
              <TextField fullWidth id="outlined-basic" label="Employee Name" variant="outlined" />
            </Grid>
            <Grid item sm={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Designation</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label="Select Designation"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Web Developer</MenuItem>
                  <MenuItem value={20}>Web Designer</MenuItem>
                  <MenuItem value={30}>Android Developer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={3}>
              <Button variant="contained" fullWidth sx={{ height: '100%' }}>
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
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'start',
                      alignItems: 'start'
                    }}
                  >
                    <Typography gutterBottom variant="h6">
                      Office Management
                    </Typography>
                    <Typography variant="body2">Barry Cuda</Typography>
                    <Typography gutterBottom variant="body2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      When an unknown printer took a galley of type and scrambled it...
                    </Typography>
                    <Typography variant="h6">Deadline:</Typography>
                    <Typography gutterBottom variant="body2">
                      17 Apr 2019
                    </Typography>
                    <Typography variant="h6">Project Leader :</Typography>

                    <Avatar
                      sx={{
                        backgroundColor: 'primary.main',
                        height: 25,
                        width: 25,
                        marginBottom: '10px'
                      }}
                    >
                      {/* <AttachMoneyIcon /> */}
                    </Avatar>
                    <Typography variant="h6">Team :</Typography>
                    <div style={{ display: 'flex' }}>
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          height: 25,
                          width: 25,
                          marginX: '5px'
                        }}
                      >
                        {/* <AttachMoneyIcon /> */}
                      </Avatar>
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          height: 25,
                          width: 25,
                          marginX: '5px'
                        }}
                      >
                        {/* <AttachMoneyIcon /> */}
                      </Avatar>
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          height: 25,
                          width: 25,
                          marginX: '5px'
                        }}
                      >
                        {/* <AttachMoneyIcon /> */}
                      </Avatar>
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          height: 25,
                          width: 25,
                          marginX: '5px'
                        }}
                      >
                        {/* <AttachMoneyIcon /> */}
                      </Avatar>
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

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Projects;
