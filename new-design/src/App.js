// routes
import Router from './routes';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { LocalizationProvider } from '@mui/lab';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Router />
      </LocalizationProvider>
    </ThemeConfig>
  );
}
