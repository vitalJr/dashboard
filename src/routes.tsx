import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import Layout from './commons/layout';
import ProtectedRoute, { UserRoleEnum } from './commons/ProtectedRoute';

import Banner from './pages/banners';
import Affiliate from './pages/affiliated';
import AffiliateDetail from './pages/affiliated/AffiliateDetail';
import Dashboard from './pages/dashboard';
import LinkPage from './pages/links';
import Login from './pages/login';
import Manager from './pages/manager';
import ManagerDetail from './pages/manager/ManagerDetail';
import RecoveryPassword from './pages/recoveryPassword';
import CreatePassword from './pages/recoveryPassword/createPassword';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        index
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout dashboard title="Dashboard">
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/managers/details"
        element={
          <ProtectedRoute role={UserRoleEnum.ADMIN}>
            <Layout title="Manager Details">
              <ManagerDetail />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/managers"
        element={
          <ProtectedRoute role={UserRoleEnum.ADMIN}>
            <Layout title="Managers">
              <Manager />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/banners"
        element={
          <ProtectedRoute>
            <Layout title="Banners">
              <Banner />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/affiliates"
        element={
          <ProtectedRoute>
            <Layout title="Affiliates">
              <Affiliate />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/affiliates/details"
        element={
          <ProtectedRoute>
            <Layout title="Affiliate Manager">
              <AffiliateDetail />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/links"
        element={
          <ProtectedRoute>
            <Layout title="Links">
              <LinkPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<>Something went wrong</>} />
      <Route path="/login" element={<Login />} />
      <Route path="/recovery" element={<RecoveryPassword />} />
      <Route path="/recovery/password" element={<CreatePassword />} />
    </>
  )
);
export default router;
