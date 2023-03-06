import { Alert } from '@mui/material';
import { Suspense } from 'react';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../utils/hooks/useAuth';

export function AuthLayout() {
  const { userPromise } = useLoaderData() as any;

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Await
        resolve={userPromise}
        errorElement={<Alert severity="error">Something went wrong!</Alert>}
        // eslint-disable-next-line react/no-children-prop
        children={(user) => (
          <AuthProvider userData={user}>
            <Outlet />
          </AuthProvider>
        )}
      />
    </Suspense>
  );
}
