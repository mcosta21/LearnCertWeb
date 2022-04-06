import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private.routes';
import { RouterKey } from './routekeys';

import CertificationPage from '../pages/CertificationPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path={RouterKey.Home}
          element={<HomePage />}
        />

        <Route
          path={RouterKey.Certification}
          element={<PrivateRoute component={<CertificationPage />} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
