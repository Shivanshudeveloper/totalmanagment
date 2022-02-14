import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import '../antdstyle.css';

const PersonalInformation = () => {
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
                <h5 class='card-title'>Change</h5>
                <div>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn w-100 my-1'>
                    Less (4)
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class='col-sm'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>View</h5>
                <div>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>{' '}
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn btn-primary w-100 my-1'>
                    Primary
                  </button>
                  <button type='button' class='btn w-100 my-1'>
                    Less (4)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
