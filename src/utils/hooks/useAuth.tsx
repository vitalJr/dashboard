import { createContext, ReactElement, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

interface UserModel {}
interface ContextProps {
  user: UserModel | null;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<ContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

interface AuthProviderProps {
  children: ReactElement;
  userData: any;
}

export function AuthProvider({ userData, children }: AuthProviderProps) {
  const [user, setUser] = useLocalStorage('user', userData);
  const navigate = useNavigate();

  const login = async (data: any) => {
    setUser(data);
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
