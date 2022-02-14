import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import '../antdstyle.css';

class Overview extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Helmet>
          <title>Overview - HRMS Admin Template</title>
          <meta name='description' content='Login page' />
        </Helmet>
        {/* Page Content */}
        <div className='content container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card-group m-b-30'>
                <div className='card'>
                  <div className='card-body'>
                    <div class='container'>
                      <div class='row'>
                        <div class='col-sm'>
                          <div class='container'>
                            <h3>Job Details</h3>
                            <div class='row'>
                              <div class='col-sm-4'>
                                <div style={{ fontWeight: 'bold' }}>Gender</div>
                                <div style={{ fontWeight: 'bold' }}>
                                  Date of Birth
                                </div>
                                <div style={{ fontWeight: 'bold' }}> Age</div>
                                <div style={{ fontWeight: 'bold' }}>
                                  Hispani or Latino
                                </div>
                                <div style={{ fontWeight: 'bold' }}>
                                  Race / Ethinicity
                                </div>
                              </div>
                              <div class='col-sm'>
                                <div>Female</div>
                                <div>04/11/1998</div>
                                <div>30</div>
                                <div>Hello</div>
                                <div>
                                  White (Not Hispani or Latino)(United States of
                                  America)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='col-sm'>
                          <div class='container'>
                            <h3>Contact Information - Public</h3>
                            <div class='row'>
                              <div class='col-sm-4'>
                                <div style={{ fontWeight: 'bold' }}>Email</div>
                                <div style={{ fontWeight: 'bold' }}>
                                  Work Address
                                </div>
                              </div>
                              <div class='col-sm'>
                                <div>prathmeshsadake@gmail.com</div>
                                <div>
                                  714 Lowes Alley, Saint Clairsville Ohio,
                                  United States
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Overview;
