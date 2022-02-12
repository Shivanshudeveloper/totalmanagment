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
    client: 'Bernardo Galaviz',
    paymentType: 'Paypal',
    pdate: '1 Jan 2014',
    pAmount: '$1335'
  },
  {
    client: 'Bernardo Galaviz',
    paymentType: 'Paypal',
    pdate: '1 Jan 2014',
    pAmount: '$1335'
  },
  {
    client: 'Bernardo Galaviz',
    paymentType: 'Paypal',
    pdate: '1 Jan 2014',
    pAmount: '$1335'
  }
];

const Payments = () => {
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
        <Container maxWidth={false}>
          <Typography gutterBottom variant="h4">
            Payments
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Invoice ID</TableCell>
                  <TableCell align="left">Client</TableCell>
                  <TableCell align="left">Payment Type</TableCell>
                  <TableCell align="left">Paid Date</TableCell>
                  <TableCell align="left">Paid Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 5, 3, 4].map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">#INV-0001</TableCell>
                    <TableCell align="left">Global Technologies </TableCell>
                    <TableCell align="left">Paypal</TableCell>
                    <TableCell align="left">8 Feb 2019</TableCell>
                    <TableCell align="left">$500</TableCell>
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

export default Payments;
