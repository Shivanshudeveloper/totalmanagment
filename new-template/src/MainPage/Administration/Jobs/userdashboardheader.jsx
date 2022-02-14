/**
 * Signin Firebase
 */

 import React, { Component } from 'react';
 import { withRouter } from 'react-router-dom';
 
 class UserDashboardHeader extends Component {
 
    render() {
      
    const {  location } = this.props
    let pathname = location.pathname
       return (  
            <div className="card">
                <div className="card-body">
                    <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('user-dashboard') ?"active" :""}`} href="/orange/app/administrator/user-dashboard">Dashboard</a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('user-all-jobs') ?"active" :""}`} href="/orange/app/administrator/user-all-jobs">All </a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('saved-jobs') ?"active" :""}`} href="/orange/app/administrator/saved-jobs">Saved</a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('applied-jobs') ?"active" :""}`} href="/orange/app/administrator/applied-jobs">Applied</a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname === ('/app/administrator/interviewing') 
                        ||pathname.includes('job-aptitude') || pathname.includes('questions') ?"active" :""}`} href="/orange/app/administrator/interviewing">Interviewing</a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('offered-jobs') ?"active" :""}`} href="/orange/app/administrator/offered-jobs">Offered</a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('visited-jobs') ?"active" :""}`} href="/orange/app/administrator/visited-jobs">Visitied </a></li>
                        <li className="nav-item"><a className={`nav-link ${pathname.includes('archived-jobs') ?"active" :""}`} href="/orange/app/administrator/archived-jobs">Archived </a></li>
                    </ul>
                </div>
            </div>
       );
    }
 }
 
 export default withRouter(UserDashboardHeader);
 