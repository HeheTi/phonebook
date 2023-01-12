import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuthRoute } from './RequireAuthRoute';
import Loader from 'components/Loader';
import { RequireNotAuthRoute } from './RequireNotAuthRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const SharedLayout = lazy(() => import('components/SharedLayout'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const AllRouts = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <RequireAuthRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="register"
              element={
                <RequireNotAuthRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RequireNotAuthRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AllRouts;
