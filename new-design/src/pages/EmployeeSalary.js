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
import DatePicker from '@mui/lab/DatePicker';
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

const demoData = [
  {
    name: 'Bernardo Galaviz',
    email: 'bernand@gmail.com',
    date: '1 Jan 2014',
    salary: '$38400',
    role: 'Web Developer',
    employeeID: 'FT-0007'
  },
  {
    name: 'Bernardo Galaviz',
    email: 'bernand@gmail.com',
    date: '1 Jan 2014',
    salary: '$38400',
    role: 'Web Developer',
    employeeID: 'FT-0007'
  }
];

const EmployeeSalary = () => {
  const [fromvalue, setfromvalue] = React.useState('');
  const [value, setvalue] = React.useState('');
  const [tovalue, settovalue] = React.useState('');
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
          <DialogTitle>Add Client</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ paddingY: '10px' }}>
              <Grid item sm={6}>
                <TextField
                  id="First-Name-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Last-Name-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Username-point-basic"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Email-point-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Password-point-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Confirm-Password-basic"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Client-ID-basic"
                  label="Client ID"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Phone-point-basic"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: '1rem' }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="Company-Name-point-basic"
                  label="Company Name"
                  variant="outlined"
                  fullWidth
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
              Employee Salary
            </Typography>
            <Button size="medium" variant="contained" onClick={handleOpen}>
              <AddIcon />
              <Typography variant="h6">Add Salary</Typography>
            </Button>
          </Container>
          <Grid container spacing={2} sx={{ marginY: '30px' }}>
            <Grid item sm={2}>
              <TextField fullWidth id="outlined-basic" label="Employee Name" variant="outlined" />
            </Grid>
            <Grid item sm={2}>
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
            <Grid item sm={2}>
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
            <Grid item sm={2}>
              <DatePicker
                label="Basic example"
                value={fromvalue}
                onChange={(newValue) => {
                  setfromvalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={2}>
              <DatePicker
                label="Basic example"
                value={tovalue}
                onChange={(newValue) => {
                  settovalue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>

            <Grid item sm={2}>
              <Button variant="contained" fullWidth sx={{ height: '100%' }}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Employee</TableCell>
                  <TableCell align="left">Employee ID</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Join Date</TableCell>
                  <TableCell align="left">Role</TableCell>
                  <TableCell align="left">Salary</TableCell>
                  <TableCell align="left">Payslip</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...demoData, ...demoData, ...demoData, ...demoData].map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          backgroundColor: '#fff'
                        }}
                      >
                        <Avatar sx={{ width: 35, height: 35, marginRight: '5px' }} />
                        <div
                          style={{
                            padding: '3px'
                          }}
                        >
                          <Typography variant="body1">John Doe</Typography>
                          <Typography gutterBottom variant="body2">
                            CEO
                          </Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">{row.employeeID}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.salary}</TableCell>
                    <TableCell align="left">
                      <Button variant="contained" size="small">
                        Generate Slip
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default EmployeeSalary;
