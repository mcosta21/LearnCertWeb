import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private.routes';
import { RouterKey } from './routekeys';

import CertificationLearnPage from '@pages/CertificationPage';
import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import CertificationFormPage from '@pages/CertificationFormPage';
import CertificationListPage from '@pages/CertificationListPage';
import LoginPage from '@pages/LoginPage';
import ManagementPage from '@pages/ManagementPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path={RouterKey.Home}
          element={<HomePage />}
        />

        <Route
          path={RouterKey.Login}
          element={<LoginPage />}
        />

        <Route
          path={`${RouterKey.CertificationLearn}/:id`}
          element={<CertificationLearnPage />}
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
          element={<CertificationListPage />}
        />

        <Route
          path={RouterKey.Management}
          element={<PrivateRoute component={<ManagementPage />} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
