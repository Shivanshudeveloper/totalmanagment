import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import '../antdstyle.css';

class Tickets extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Helmet>
          <title>Tickets - HRMS Admin Template</title>
          <meta name='description' content='Login page' />
        </Helmet>
        {/* Page Content */}
        <div className='content container-fluid'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card-group m-b-30'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='d-flex mb-3'>
                      <div>
                        <h3 className='d-block'>Personal</h3>
                      </div>
                    </div>
                    <div class='container'>
                      <div class='row'>
                        <div class='col-sm-4'>
                          <div>Gender</div>
                          <div>Date of Birth</div>
                          <div> Age</div>
                          <div>Hispani or Latino</div>
                          <div>Race / Ethinicity</div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tickets;
