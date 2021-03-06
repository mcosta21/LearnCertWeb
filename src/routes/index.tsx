import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private.routes';
import { RouterKey } from './routekeys';

import CertificationPage from '@pages/CertificationPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import CertificationFormPage from '@pages/CertificationFormPage';
import CertificationListPage from '@pages/CertificationListPage';

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

        <Route
          path={RouterKey.CertificationForm}
          element={<PrivateRoute component={<CertificationFormPage />} />}
        />

        <Route
          path={`${RouterKey.CertificationForm}/:id`}
          element={<PrivateRoute component={<CertificationFormPage />} />}
        />

        <Route
          path={RouterKey.CertificationList}
          element={<PrivateRoute component={<CertificationListPage />} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
