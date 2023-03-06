import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAuth } from '../../utils/hooks/useAuth';

type UserRole = 'manager' | 'admin';

export interface ProtectedRouteProps {
  children: ReactElement;
  role?: UserRole;
}

interface UserRoleEnumProps {
  [k: string]: UserRole;
}
export const UserRoleEnum: UserRoleEnumProps = {
  MANAGER: 'manager',
  ADMIN: 'admin',
};

export default function ProtectedRoute({
  children,
  role = UserRoleEnum.MANAGER,
}: ProtectedRouteProps) {
  // if (role === UserRoleEnum.ADMIN && auth.user.role !== UserRoleEnum.ADMIN) {
  //   <Navigate to="/error" />;
  // }

  return children;
}
