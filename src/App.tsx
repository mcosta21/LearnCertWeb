import { CustomThemeProvider } from './contexts/CustomThemeProvider';
import { AppRoutes } from './routes';
import './services/i18nProvider';

function App() {
  return (
    <CustomThemeProvider>
        <AppRoutes />
    </CustomThemeProvider>)
}

export default App;
