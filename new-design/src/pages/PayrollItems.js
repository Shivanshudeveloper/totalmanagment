import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Container,
  Grid,
  TextField,
  FormControl,
  CardHeader,
  MenuItem,
  Button,
  Dialog
} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import AddIcon from '@mui/icons-material/Add';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const demoInvoices = [
  {
    id: '#INV-0001',
    client: 'Global Technologies',
    dueDate: '11 Mar 2019',
    total: '$380',
    status: 'Partially Paid'
  },
  {
    id: '#INV-0001',
    client: 'T Technologies',
    dueDate: '11 Mar 2019',
    total: '$380',
    status: 'Unpaid'
  },
  {
    id: '#INV-0001',
    client: 'Docsup Technologies',
    dueDate: '11 Mar 2019',
    total: '$380',
    status: 'Paid'
  }
];

const PayrollItems = () => {
  const [value, setvalue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
              Payroll Items
            </Typography>
          </Container>
          <Container>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                  <Tab label="Additions" {...a11yProps(0)} />
                  <Tab label="Overtime" {...a11yProps(1)} />
                  <Tab label="Deductions" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={tabValue} index={0}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleOpen}
                  sx={{ float: 'right' }}
                >
                  <AddIcon />
                  <Typography variant="h6">Add Addition</Typography>
                </Button>
                <Container sx={{ display: 'flex', flexDirection: 'column', paddingY: '25px' }}>
                  <TableContainer sx={{ minWidth: '100%' }}>
                    <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="left">Category</TableCell>
                          <TableCell align="center">Default/Unit Amount</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {demoInvoices.map((invoice) => (
                          <TableRow
                            key={invoice.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align="left" component="th" scope="row">
                              Leave balance amount
                            </TableCell>
                            <TableCell align="left">Monthly remuneration</TableCell>
                            <TableCell align="center">$5</TableCell>
                            <TableCell align="right">
                              <MoreVertIcon />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleOpen}
                  sx={{ float: 'right' }}
                >
                  <AddIcon />
                  <Typography variant="h6">Add Overtime</Typography>
                </Button>
                <Container sx={{ display: 'flex', flexDirection: 'column', paddingY: '25px' }}>
                  <TableContainer sx={{ minWidth: '100%' }}>
                    <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="left">Rate</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {demoInvoices.map((invoice) => (
                          <TableRow
                            key={invoice.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align="left">Normal day OT 1.5x</TableCell>
                            <TableCell align="left">Hourly 1.5</TableCell>
                            <TableCell align="right">
                              <MoreVertIcon />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleOpen}
                  sx={{ float: 'right' }}
                >
                  <AddIcon />
                  <Typography variant="h6">Add Deduction</Typography>
                </Button>
                <Container sx={{ display: 'flex', flexDirection: 'column', paddingY: '25px' }}>
                  <TableContainer sx={{ minWidth: '100%' }}>
                    <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Name</TableCell>
                          <TableCell align="center">Default/Unit Amount</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {demoInvoices.map((invoice) => (
                          <TableRow
                            key={invoice.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell align="left">Absent amount</TableCell>
                            <TableCell align="center">$12</TableCell>
                            <TableCell align="right">
                              <MoreVertIcon />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </TabPanel>
            </Box>
          </Container>
        </Container>
      </Box>
    </>
  );
};

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default PayrollItems;
