import React from 'react';
import {
  Box,
  Container,
  Grid,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Contact = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#7c7c7c',
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));

  function createData(address, usage, visibility, sharedwith, date) {
    return { address, usage, visibility, sharedwith, date };
  }

  const rows = [
    createData(
      'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401',
      'Home (Primary)',
      'Private',
      '',
      '2/27/2020'
    )
  ];

  return (
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
            <Container maxWidth={false}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Edit"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="h6" color="inherit" component="div" sx={{ marginY: '20px' }}>
                Home Contact Information
              </Typography>

              <TableContainer component={Paper} sx={{ marginY: '50px' }}>
                <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Address</StyledTableCell>
                      <StyledTableCell align="left">Usage</StyledTableCell>
                      <StyledTableCell align="left">Visibility</StyledTableCell>
                      <StyledTableCell align="left">Shared With</StyledTableCell>
                      <StyledTableCell align="left">Effective Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.address}>
                        <StyledTableCell component="th" scope="row">
                          {row.address}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.usage}</StyledTableCell>
                        <StyledTableCell align="left">{row.visibility}</StyledTableCell>
                        <StyledTableCell align="left">{row.sharedwith}</StyledTableCell>
                        <StyledTableCell align="left">{row.date}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer component={Paper} sx={{ marginY: '50px' }}>
                <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Address</StyledTableCell>
                      <StyledTableCell align="left">Usage</StyledTableCell>
                      <StyledTableCell align="left">Visibility</StyledTableCell>
                      <StyledTableCell align="left">Shared With</StyledTableCell>
                      <StyledTableCell align="left">Effective Date</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.address}>
                        <StyledTableCell component="th" scope="row">
                          {row.address}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.usage}</StyledTableCell>
                        <StyledTableCell align="left">{row.visibility}</StyledTableCell>
                        <StyledTableCell align="left">{row.sharedwith}</StyledTableCell>
                        <StyledTableCell align="left">{row.date}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer component={Paper} sx={{ marginY: '50px' }}>
                <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Address</StyledTableCell>
                      <StyledTableCell align="left">Usage</StyledTableCell>
                      <StyledTableCell align="left">Visibility</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.address}>
                        <StyledTableCell component="th" scope="row">
                          {row.address}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.calories}</StyledTableCell>
                        <StyledTableCell align="left">{row.usage}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

// Contact.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Contact;
