import { CustomThemeProvider } from './contexts/CustomThemeProvider';
import { AppRoutes } from './routes';

function App() {
  return (
    <CustomThemeProvider>
        <AppRoutes />
    </CustomThemeProvider>)
}

export default App;
