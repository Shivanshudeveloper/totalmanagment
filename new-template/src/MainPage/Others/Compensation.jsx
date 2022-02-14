import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import '../antdstyle.css';

class Compensation extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Helmet>
          <title>Compensation - HRMS Admin Template</title>
          <meta name='description' content='Login page' />
        </Helmet>
        {/* Page Content */}
        <div className='content container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card-group m-b-30'>
                <div className='card'>
                  <div className='card-body'>
                    <div class='row gx-5'>
                      <div class='col-sm'>
                        <div class='card'>
                          <div class='card-body'>
                            <h5 class='card-title'>Total 1 items</h5>
                            <table class='table table-striped'>
                              <thead>
                                <tr>
                                  <th scope='col'>
                                    Total Salray and Allowance
                                  </th>
                                  <th scope='col'>Total base pay</th>
                                  <th scope='col'>Base pay basis</th>
                                  <th scope='col'>Currency</th>
                                  <th scope='col'>Frequency</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>30.0</td>
                                  <td>30.0</td>
                                  <td>30.0</td>
                                  <td>USD</td>
                                  <td>Hourly</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='d-flex mb-3'>
                      <div>
                        <h3 className='d-block'>Personal</h3>
                      </div>
                    </div>

                    <div class='row'>
                      <div class='col-sm-4'>
                        <div>Employee ID</div>
                        <div>Supervisiory Organization</div>
                        <div>Position</div>
                        <div>Business Title</div>
                        <div>Job Profile</div>
                        <div>Location</div>
                        <div>Employee Type</div>
                      </div>
                      <div class='col-sm'>
                        <div>23841300</div>
                        <div>Nocovda Top Supervisor Org</div>
                        <div>Recurting Coord 1</div>
                        <div>Recurting Coord 1</div>
                        <div>Recurting Coord 1</div>

                        <div>699 Malboro</div>
                        <div>Regular</div>
                      </div>
                    </div>

                    <div class='card my-5'>
                      <div class='card-body'>
                        <h5 class='card-title'>Total 1 items</h5>
                        <table class='table table-striped'>
                          <thead>
                            <tr>
                              <th scope='col'>Effective Date</th>
                              <th scope='col'>Plan Type</th>
                              <th scope='col'>Compensation Plan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>12/23/2022</td>
                              <td>Hourly</td>
                              <td>Hourly</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compensation;
