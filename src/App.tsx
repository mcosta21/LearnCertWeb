import { UserProvider } from '@contexts/UserContext/UserContext';
import { CustomThemeProvider } from './contexts/CustomThemeProvider';
import { AppRoutes } from './routes';
import './services/i18nProvider';

function App() {
  return (
    <CustomThemeProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </CustomThemeProvider>)
}

export default App;
