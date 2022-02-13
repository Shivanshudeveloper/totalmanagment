import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ContactsIcon from '@mui/icons-material/Contacts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

// ----------------------------------------------------------------------

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <DashboardIcon />
  },
  {
    title: 'account',
    path: '/dashboard/account',
    icon: <AdminPanelSettingsIcon />
  },
  {
    title: 'calendar',
    path: '/dashboard/calendar',
    icon: <CalendarTodayIcon />
  },
  {
    title: 'clients',
    path: '/dashboard/clients',
    icon: <PeopleAltIcon />
  },
  {
    title: 'compensation',
    path: '/dashboard/compensation',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'contact',
    path: '/dashboard/contact',
    icon: <ContactsIcon />
  },
  // {
  //   title: 'customer',
  //   path: '/dashboard/customer',
  //   icon: <DashboardIcon />
  // },
  {
    title: 'employee dashboard',
    path: '/dashboard/employee-dashboard',
    icon: <DashboardIcon />
  },
  {
    title: 'employee salary',
    path: '/dashboard/employee-salary',
    icon: <ConfirmationNumberIcon />
  },
  {
    title: 'expenses',
    path: '/dashboard/expenses',
    icon: <LocalAtmIcon />
  },
  {
    title: 'invoices',
    path: '/dashboard/invoices',
    icon: <ConfirmationNumberIcon />
  },
  {
    title: 'overview',
    path: '/dashboard/overview',
    icon: <ConfirmationNumberIcon />
  },
  {
    title: 'pay',
    path: '/dashboard/pay',
    icon: <MonetizationOnIcon />
  },
  {
    title: 'payments',
    path: '/dashboard/payments',
    icon: <AccountBalanceWalletIcon />
  },
  {
    title: 'payroll items',
    path: '/dashboard/payroll-items',
    icon: <AccountBalanceWalletIcon />
  },
  {
    title: 'pay slip',
    path: '/dashboard/pay-slip',
    icon: <AccountBalanceWalletIcon />
  },
  {
    title: 'personal',
    path: '/dashboard/personal',
    icon: <PeopleAltIcon />
  },
  {
    title: 'personal information',
    path: '/dashboard/personal-information',
    icon: <PeopleAltIcon />
  },
  {
    title: 'projects',
    path: '/dashboard/projects',
    icon: <PeopleAltIcon />
  },
  {
    title: 'tickets',
    path: '/dashboard/tickets',
    icon: <PeopleAltIcon />
  },
  {
    title: 'time',
    path: '/dashboard/time',
    icon: <AccessTimeIcon />
  },
  {
    title: 'time off',
    path: '/dashboard/time-off',
    icon: <TimerOffIcon />
  }
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: <PeopleAltIcon />
  // },
];

export default sidebarConfig;
