import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import User from './pages/User';
import NotFound from './pages/Page404';
import Account from './pages/Account';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Compensation from './pages/Compensation';
import TimeOff from './pages/TimeOff';
import Clients from './pages/Clients';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeSalary from './pages/EmployeeSalary';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import Overview from './pages/Overview';
import Pay from './pages/Pay';
import PayrollItems from './pages/PayrollItems';
import Payslip from './pages/PaySlip';
import Personal from './pages/Personal';
import PersonalInformation from './pages/PersonalInformation';
import Tickets from './pages/Tickets';
import Time from './pages/Time';
import Projects from './pages/Projects';
import Payments from './pages/Payments';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'account', element: <Account /> },
        { path: 'calendar', element: <Calendar /> },
        { path: 'clients', element: <Clients /> },
        { path: 'compensation', element: <Compensation /> },
        { path: 'contact', element: <Contact /> },
        { path: 'employee-dashboard', element: <EmployeeDashboard /> },
        { path: 'employee-salary', element: <EmployeeSalary /> },
        { path: 'expenses', element: <Expenses /> },
        { path: 'invoices', element: <Invoices /> },
        { path: 'overview', element: <Overview /> },
        { path: 'pay', element: <Pay /> },
        { path: 'payments', element: <Payments /> },
        { path: 'payroll-items', element: <PayrollItems /> },
        { path: 'pay-slip', element: <Payslip /> },
        { path: 'personal', element: <Personal /> },
        { path: 'personal-information', element: <PersonalInformation /> },
        { path: 'tickets', element: <Tickets /> },
        { path: 'time', element: <Time /> },
        { path: 'time-off', element: <TimeOff /> },
        { path: 'projects', element: <Projects /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
