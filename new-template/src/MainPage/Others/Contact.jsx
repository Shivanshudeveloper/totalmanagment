import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import '../antdstyle.css';

const Contact = () => {
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
                <div class='input-group mb-3'>
                  <select class='custom-select' id='inputGroupSelect01'>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </div>
                <h5 class='card-title'>Home Contact Information</h5>
                <table class='table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>Address</th>
                      <th scope='col'>Usage</th>
                      <th scope='col'>Visibility</th>
                      <th scope='col'>Shared With</th>
                      <th scope='col'> Effective Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi
                        96522 (257) 563-7401{' '}
                      </td>
                      <td>Home (Primary)</td>
                      <td>Private</td>
                      <td></td>
                      <td>2/27/2020</td>
                    </tr>
                  </tbody>
                </table>
                <table class='table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>Address</th>
                      <th scope='col'>Usage</th>
                      <th scope='col'>Visibility</th>
                      <th scope='col'>Shared With</th>
                      <th scope='col'> Effective Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi
                        96522 (257) 563-7401{' '}
                      </td>
                      <td>Home (Primary)</td>
                      <td>Private</td>
                      <td></td>
                      <td>2/27/2020</td>
                    </tr>
                  </tbody>
                </table>{' '}
                <table class='table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>Address</th>
                      <th scope='col'>Usage</th>
                      <th scope='col'>Visibility</th>
                      <th scope='col'>Shared With</th>
                      <th scope='col'> Effective Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi
                        96522 (257) 563-7401{' '}
                      </td>
                      <td>Home (Primary)</td>
                      <td>Private</td>
                      <td></td>
                      <td>2/27/2020</td>
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

export default Contact;
