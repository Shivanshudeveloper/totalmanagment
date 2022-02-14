import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import '../antdstyle.css';

const TimeOff = () => {
  return (
    <div className='page-wrapper'>
      <Helmet>
        <title>Tickets - HRMS Admin Template</title>
        <meta name='description' content='Login page' />
      </Helmet>
      {/* Page Content */}
      <div className='content container-fluid'>
        <div class='row gx-5'>
          <div class='col-sm'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Balances Tracked in Hours</h5>
                <table class='table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>Absensce Plan</th>
                      <th scope='col'>Unit of Time</th>
                      <th scope='col'>Beginning Year Balance</th>
                      <th scope='col'>Accured to Date</th>
                      <th scope='col'>Absence Paid Year to Date</th>
                      <th scope='col'>Begining Period </th>
                      <th scope='col'>Balance Accured to Period</th>
                      <th scope='col'>Absence Paid Year to Period</th>
                      <th scope='col'>CarryOver Fortified in Period</th>
                      <th scope='col'>Ending Period Balance</th>
                      <th scope='col'>Ending Period Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope='row'>Previously Assured Sick leave Hours</td>
                      <td> 1,324,171,354</td>
                      <td>3,287,263</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                    </tr>
                    <tr>
                      <td scope='row'>Previously Assured Sick leave Hours</td>
                      <td> 1,324,171,354</td>
                      <td>3,287,263</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                      <td>402.82</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeOff;
