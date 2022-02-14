/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;
    return (
      <div className='sidebar' id='sidebar'>
        <div className='sidebar-inner slimscroll'>
          <div id='sidebar-menu' className='sidebar-menu'>
            <ul>
              <li className='menu-title'>
                <span>Main</span>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-dashboard' /> <span> Dashboard</span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('main/dashboard') ? 'active' : ''
                      }
                      href='/orange/app/main/dashboard'
                    >
                      Admin Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('main/employee-') ? 'active' : ''
                      }
                      href='/orange/app/main/employee-dashboard'
                    >
                      Employee Dashboard
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-cube' /> <span> Apps</span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a href='/orange/conversation/chat'>Chat</a>
                  </li>
                  <li className='submenu'>
                    <a href='#'>
                      <span> Calls</span> <span className='menu-arrow' />
                    </a>
                    <ul style={{ display: 'none' }}>
                      <li>
                        <a href='/orange/conversation/voice-call'>Voice Call</a>
                      </li>
                      <li>
                        <a href='/orange/conversation/video-call'>Video Call</a>
                      </li>
                      <li>
                        <a href='/orange/conversation/outgoing-call'>
                          Outgoing Call
                        </a>
                      </li>
                      <li>
                        <a href='/orange/conversation/incoming-call'>
                          Incoming Call
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('apps/calendar') ? 'active' : ''
                      }
                      href='/orange/app/apps/calendar'
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('contacts') ? 'active' : ''}
                      href='/orange/app/apps/contacts'
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href='/orange/email/inbox'>Email</a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('file-manager') ? 'active' : ''
                      }
                      href='/orange/app/apps/file-manager'
                    >
                      File Manager
                    </a>
                  </li>
                </ul>
              </li>
              <li className='menu-title'>
                <span>Employees</span>
              </li>
              <li className='submenu'>
                <a href='#' className='noti-dot'>
                  <i className='la la-user' /> <span> Employees</span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('allemployees')
                          ? 'active'
                          : pathname.includes('employees-list')
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/employee/allemployees'
                    >
                      All Employees
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('holidays') ? 'active' : ''}
                      href='/orange/app/employee/holidays'
                    >
                      Holidays
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('es-admin') ? 'active' : ''}
                      href='/orange/app/employee/leaves-admin'
                    >
                      Leaves (Admin){' '}
                      <span className='badge badge-pill bg-primary float-right'>
                        1
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('ves-employee') ? 'active' : ''
                      }
                      href='/orange/app/employee/leaves-employee'
                    >
                      Leaves (Employee)
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('e-settings') ? 'active' : ''
                      }
                      href='/orange/app/employee/leave-settings'
                    >
                      Leave Settings
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('nce-admin') ? 'active' : ''}
                      href='/orange/app/employee/attendance-admin'
                    >
                      Attendance (Admin)
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('ce-employee') ? 'active' : ''
                      }
                      href='/orange/app/employee/attendance-employee'
                    >
                      Attendance (Employee)
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('departments') ? 'active' : ''
                      }
                      href='/orange/app/employee/departments'
                    >
                      Departments
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('designations') ? 'active' : ''
                      }
                      href='/orange/app/employee/designations'
                    >
                      Designations
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('timesheet') ? 'active' : ''}
                      href='/orange/app/employee/timesheet'
                    >
                      Timesheet
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('shift-scheduling') ||
                        pathname.includes('shift-list')
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/employee/shift-scheduling'
                    >
                      Shift &amp; Schedule
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('overtime') ? 'active' : ''}
                      href='/orange/app/employee/overtime'
                    >
                      Overtime
                    </a>
                  </li>
                </ul>
              </li>
              <li className={pathname.includes('clients') ? 'active' : ''}>
                <a href='/orange/app/employees/clients'>
                  <i className='la la-users' /> <span>Clients</span>
                </a>
              </li>
              <li className={pathname.includes('personal') ? 'active' : ''}>
                <a href='/orange/app/others/personal'>
                  <i className='la la-users' /> <span>Personal</span>
                </a>
              </li>
              <li
                className={
                  pathname.includes('personalinformation') ? 'active' : ''
                }
              >
                <a href='/orange/app/others/personalinformation'>
                  <i className='la la-users' />{' '}
                  <span>Personal Information</span>
                </a>
              </li>
              <li className={pathname.includes('compensation') ? 'active' : ''}>
                <a href='/orange/app/others/compensation'>
                  <i className='la la-users' /> <span>Compensation</span>
                </a>
              </li>
              <li className={pathname.includes('contact') ? 'active' : ''}>
                <a href='/orange/app/others/contact'>
                  <i className='la la-users' /> <span>Contact</span>
                </a>
              </li>
              <li className={pathname.includes('overview') ? 'active' : ''}>
                <a href='/orange/app/others/overview'>
                  <i className='la la-users' /> <span>Overview</span>
                </a>
              </li>
              <li className={pathname.includes('time') ? 'active' : ''}>
                <a href='/orange/app/others/time'>
                  <i className='la la-users' /> <span>Time</span>
                </a>
              </li>

              <li className={pathname.includes('timeoff') ? 'active' : ''}>
                <a href='/orange/app/others/timeoff'>
                  <i className='la la-users' /> <span>Time Off</span>
                </a>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-rocket' /> <span> Projects</span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('t_dashboard')
                          ? 'active'
                          : pathname.includes('projects-list')
                          ? 'active'
                          : pathname.includes('cts-view')
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/projects/project_dashboard'
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href='/orange/tasks/tasks'>Tasks</a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('task-board') ? 'active' : ''
                      }
                      href='/orange/app/projects/task-board'
                    >
                      Task Board
                    </a>
                  </li>
                </ul>
              </li>
              <li className={pathname.includes('leads') ? 'active' : ''}>
                <a href='/orange/app/employees/leads'>
                  <i className='la la-user-secret' /> <span>Leads</span>
                </a>
              </li>
              <li className={pathname.includes('tickets') ? 'active' : ''}>
                <a href='/orange/app/employees/tickets'>
                  <i className='la la-ticket' /> <span>Tickets</span>
                </a>
              </li>
              <li className='menu-title'>
                <span>HR</span>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-files-o' /> <span> Sales </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={pathname.includes('estimates') ? 'active' : ''}
                      href='/orange/app/sales/estimates'
                    >
                      Estimates
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('invoices') ? 'active' : ''}
                      href='/orange/app/sales/invoices'
                    >
                      Invoices
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('payments') ? 'active' : ''}
                      href='/orange/app/sales/payments'
                    >
                      Payments
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('expenses') ? 'active' : ''}
                      href='/orange/app/sales/expenses'
                    >
                      Expenses
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('provident-fund') ? 'active' : ''
                      }
                      href='/orange/app/sales/provident-fund'
                    >
                      Provident Fund
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('taxes') ? 'active' : ''}
                      href='/orange/app/sales/taxes'
                    >
                      Taxes
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-files-o' /> <span> Accounting </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('categories') ||
                        pathname.includes('sub-category')
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/accounts/categories'
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('budgets') ? 'active' : ''}
                      href='/orange/app/accounts/budgets'
                    >
                      Budgets
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('budget-expenses') ? 'active' : ''
                      }
                      href='/orange/app/accounts/budget-expenses'
                    >
                      Budget Expenses
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('budget-revenues') ? 'active' : ''
                      }
                      href='/orange/app/accounts/budget-revenues'
                    >
                      Budget Revenues
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-money' /> <span> Payroll </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={pathname.includes('_salary') ? 'active' : ''}
                      href='/orange/app/payroll/_salary'
                    >
                      {' '}
                      Employee Salary{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('y-view') ? 'active' : ''}
                      href='/orange/app/payroll/salary-view'
                    >
                      {' '}
                      Payslip{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('payroll-items') ? 'active' : ''
                      }
                      href='/orange/app/payroll/payroll-items'
                    >
                      {' '}
                      Payroll Items{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className={pathname.includes('policies') ? 'active' : ''}>
                <a href='/orange/app/hr/policies'>
                  <i className='la la-file-pdf-o' /> <span>Policies</span>
                </a>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-pie-chart' /> <span> Reports </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={pathname.includes('expense-') ? 'active' : ''}
                      href='/orange/app/reports/expense-reports'
                    >
                      {' '}
                      Expense Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('invoice-') ? 'active' : ''}
                      href='/orange/app/reports/invoice-reports'
                    >
                      {' '}
                      Invoice Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('payments-') ? 'active' : ''}
                      href='/orange/app/reports/payments-reports'
                    >
                      {' '}
                      Payments Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('project-') ? 'active' : ''}
                      href='/orange/app/reports/project-reports'
                    >
                      {' '}
                      Project Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('task-') ? 'active' : ''}
                      href='/orange/app/reports/task-reports'
                    >
                      {' '}
                      Task Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('user-') ? 'active' : ''}
                      href='/orange/app/reports/user-reports'
                    >
                      {' '}
                      User Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('employee-') ? 'active' : ''}
                      href='/orange/app/reports/employee-reports'
                    >
                      {' '}
                      Employee Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('payslip-') ? 'active' : ''}
                      href='/orange/app/reports/payslip-reports'
                    >
                      {' '}
                      Payslip Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('attendance-') ? 'active' : ''
                      }
                      href='/orange/app/reports/attendance-reports'
                    >
                      {' '}
                      Attendance Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('leave-') ? 'active' : ''}
                      href='/orange/app/reports/leave-reports'
                    >
                      {' '}
                      Leave Report{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('daily-') ? 'active' : ''}
                      href='/orange/app/reports/daily-reports'
                    >
                      {' '}
                      Daily Report{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='menu-title'>
                <span>Performance</span>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-graduation-cap' />{' '}
                  <span> Performance </span> <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('-indicator') ? 'active' : ''
                      }
                      href='/orange/app/performances/performance-indicator'
                    >
                      {' '}
                      Performance Indicator{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('-review') ? 'active' : ''}
                      href='/orange/app/performances/performance-review'
                    >
                      {' '}
                      Performance Review{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('-appraisal') ? 'active' : ''
                      }
                      href='/orange/app/performances/performance-appraisal'
                    >
                      {' '}
                      Performance Appraisal{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-crosshairs' /> <span> Goals </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={pathname.includes('-tracking') ? 'active' : ''}
                      href='/orange/app/goals/goal-tracking'
                    >
                      {' '}
                      Goal List{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('l-type') ? 'active' : ''}
                      href='/orange/app/goals/goal-type'
                    >
                      {' '}
                      Goal Type{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-edit' /> <span> Training </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('training-list') ? 'active' : ''
                      }
                      href='/orange/app/training/training-list'
                    >
                      {' '}
                      Training List{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('trainer') ? 'active' : ''}
                      href='/orange/app/training/trainer'
                    >
                      {' '}
                      Trainers
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('training-type') ? 'active' : ''
                      }
                      href='/orange/app/training/training-type'
                    >
                      {' '}
                      Training Type{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className={pathname.includes('promotion') ? 'active' : ''}>
                <a href='/orange/app/performance/promotion'>
                  <i className='la la-bullhorn' /> <span>Promotion</span>
                </a>
              </li>
              <li className={pathname.includes('resignation') ? 'active' : ''}>
                <a href='/orange/app/performance/resignation'>
                  <i className='la la-external-link-square' />{' '}
                  <span>Resignation</span>
                </a>
              </li>
              <li className={pathname.includes('termination') ? 'active' : ''}>
                <a href='/orange/app/performance/termination'>
                  <i className='la la-times-circle' /> <span>Termination</span>
                </a>
              </li>
              <li className='menu-title'>
                <span>Administration</span>
              </li>
              <li className={pathname.includes('assets') ? 'active' : ''}>
                <a href='/orange/app/administrator/assets'>
                  <i className='la la-object-ungroup' /> <span>Assets</span>
                </a>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-briefcase' /> <span> Jobs </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('user-dashboard') ||
                        pathname.includes('user-all-jobs') ||
                        pathname.includes('saved-jobs') ||
                        pathname.includes('applied-jobs') ||
                        pathname.includes('interviewing') ||
                        pathname.includes('offered-jobs') ||
                        pathname.includes('visited-jobs') ||
                        pathname.includes('archived-jobs') ||
                        pathname.includes('job-aptitude') ||
                        pathname.includes('questions')
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/administrator/user-dashboard'
                    >
                      {' '}
                      User Dasboard{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('jobs-dashboard') ? 'active' : ''
                      }
                      href='/orange/app/administrator/jobs-dashboard'
                    >
                      {' '}
                      Jobs Dasboard{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname === '/app/administrator/jobs' ? 'active' : ''
                      }
                      href='/orange/app/administrator/jobs'
                    >
                      {' '}
                      Manage Jobs{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('manage-resumes') ? 'active' : ''
                      }
                      href='/orange/app/administrator/manage-resumes'
                    >
                      {' '}
                      Manage Resumes{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('shortlist-candidates')
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/administrator/shortlist-candidates'
                    >
                      {' '}
                      Shortlist Candidates{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname === '/app/administrator/interview-questions'
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/administrator/interview-questions'
                    >
                      {' '}
                      Interview Questions{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('offer_approvals') ? 'active' : ''
                      }
                      href='/orange/app/administrator/offer_approvals'
                    >
                      {' '}
                      Offer Approvals{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('experiance-level') ? 'active' : ''
                      }
                      href='/orange/app/administrator/experiance-level'
                    >
                      {' '}
                      Experience Level{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname === '/app/administrator/candidates'
                          ? 'active'
                          : ''
                      }
                      href='/orange/app/administrator/candidates'
                    >
                      {' '}
                      Candidates List{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('schedule-timing') ? 'active' : ''
                      }
                      href='/orange/app/administrator/schedule-timing'
                    >
                      {' '}
                      Schedule timing{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('apptitude-result') ? 'active' : ''
                      }
                      href='/orange/app/administrator/apptitude-result'
                    >
                      {' '}
                      Aptitude Results{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={pathname.includes('knowledgebase') ? 'active' : ''}
              >
                <a href='/orange/app/administrator/knowledgebase'>
                  <i className='la la-question' /> <span>Knowledgebase</span>
                </a>
              </li>
              <li className={pathname.includes('activities') ? 'active' : ''}>
                <a href='/orange/app/administrator/activities'>
                  <i className='la la-bell' /> <span>Activities</span>
                </a>
              </li>
              <li
                className={
                  pathname.includes('administrator/users') ? 'active' : ''
                }
              >
                <a href='/orange/app/administrator/users'>
                  <i className='la la-user-plus' /> <span>Users</span>
                </a>
              </li>
              <li>
                <a href='/orange/settings/companysetting'>
                  <i className='la la-cog' /> <span>Settings</span>
                </a>
              </li>
              <li className='menu-title'>
                <span>Pages</span>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-user' /> <span> Profile </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('profile/employee-') ? 'active' : ''
                      }
                      href='/orange/app/profile/employee-profile'
                    >
                      {' '}
                      Employee Profile{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('client-') ? 'active' : ''}
                      href='/orange/app/profile/client-profile'
                    >
                      {' '}
                      Client Profile{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-key' /> <span> Authentication </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a href='/orange/login'> Login </a>
                  </li>
                  <li>
                    <a href='/orange/register'> Register </a>
                  </li>
                  <li>
                    <a href='/orange/forgotpassword'> Forgot Password </a>
                  </li>
                  <li>
                    <a href='/orange/otp'> OTP </a>
                  </li>
                  <li>
                    <a href='/orange/lockscreen'> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-exclamation-triangle' />{' '}
                  <span> Error Pages </span> <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a href='/orange/error-404'>404 Error </a>
                  </li>
                  <li>
                    <a href='/orange/error-500'>500 Error </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-hand-o-up' /> <span> Subscriptions </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('subscriptionadmin') ? 'active' : ''
                      }
                      href='/orange/app/subscription/subscriptionadmin'
                    >
                      Subscriptions (Admin){' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('subscriptioncompany') ? 'active' : ''
                      }
                      href='/orange/app/subscription/subscriptioncompany'
                    >
                      Subscriptions (Company){' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('subscribedcompanies') ? 'active' : ''
                      }
                      href='/orange/app/subscription/subscribedcompanies'
                    >
                      Subscribed Companies
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-columns' /> <span> Pages </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('pages/search') ? 'active' : ''
                      }
                      href='/orange/app/pages/search'
                    >
                      {' '}
                      Search{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('pages/faq') ? 'active' : ''}
                      href='/orange/app/pages/faq'
                    >
                      {' '}
                      FAQ{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('pages/terms') ? 'active' : ''
                      }
                      href='/orange/app/pages/terms'
                    >
                      {' '}
                      Terms{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('privacypolicy') ? 'active' : ''
                      }
                      href='/orange/app/pages/privacypolicy'
                    >
                      {' '}
                      Privacy Policy{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('pages/blank') ? 'active' : ''
                      }
                      href='/orange/app/pages/blank'
                    >
                      {' '}
                      Blank Page{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='menu-title'>
                <span>UI Interface</span>
              </li>
              <li>
                <a href='/orange/ui-components'>
                  <i className='la la-puzzle-piece' /> <span>Components</span>
                </a>
              </li>
              <li className='submenu'>
                <a href='#'>
                  <i className='la la-object-group' /> <span> Forms </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('basicinputs') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/forms/basicinputs'
                    >
                      Basic Inputs{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('inputgroups') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/forms/inputgroups'
                    >
                      Input Groups{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('horizontalform') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/forms/horizontalform'
                    >
                      Horizontal Form{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('verticalform') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/forms/verticalform'
                    >
                      {' '}
                      Vertical Form{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={pathname.includes('formmask') ? 'active' : ''}
                      href='/orange/app/ui-interface/forms/formmask'
                    >
                      {' '}
                      Form Mask{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('formvalidation') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/forms/formvalidation'
                    >
                      {' '}
                      Form Validation{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='submenu'>
                <a href='/orange/app/ui-interface/tables/basic'>
                  <i className='la la-table' /> <span> Tables </span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li>
                    <a
                      className={
                        pathname.includes('tables/basic') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/tables/basic'
                    >
                      Basic Tables{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      className={
                        pathname.includes('tables/data-table') ? 'active' : ''
                      }
                      href='/orange/app/ui-interface/tables/data-table'
                    >
                      Data Table{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='menu-title'>
                <span>Extras</span>
              </li>
              <li>
                <a href='#'>
                  <i className='la la-file-text' /> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href=''>
                  <i className='la la-info' /> <span>Change Log</span>{' '}
                  <span className='badge badge-primary ml-auto'>v3.4</span>
                </a>
              </li>
              <li className='submenu'>
                <a href=''>
                  <i className='la la-share-alt' /> <span>Multi Level</span>{' '}
                  <span className='menu-arrow' />
                </a>
                <ul style={{ display: 'none' }}>
                  <li className='submenu'>
                    <a href=''>
                      {' '}
                      <span>Level 1</span> <span className='menu-arrow' />
                    </a>
                    <ul style={{ display: 'none' }}>
                      <li>
                        <a href=''>
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className='submenu'>
                        <a href=''>
                          {' '}
                          <span> Level 2</span> <span className='menu-arrow' />
                        </a>
                        <ul style={{ display: 'none' }}>
                          <li>
                            <a href=''>Level 3</a>
                          </li>
                          <li>
                            <a href=''>Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href=''>
                          {' '}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=''>
                      {' '}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
