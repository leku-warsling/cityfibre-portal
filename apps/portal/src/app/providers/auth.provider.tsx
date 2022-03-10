import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import { auth, AuthCredentials } from '../api';
import store from 'store';
import { FC, Dispatch, SetStateAction } from 'react';
import { useToast } from '@chakra-ui/react';
import { otherwise, andThen as then, pipe, tap } from 'ramda';
import { useContext } from 'react';

export type AuthContextProps = {
  user: Record<string, any> | null;
  token: string | null;
  setUser: Dispatch<SetStateAction<Record<string, any> | null>>;
  setToken: Dispatch<SetStateAction<string | null>>;
  login: (params: AuthCredentials) => void;
  logout: () => void;
  isLoading: boolean
};

const AuthContext = createContext<AuthContextProps>(null!);

export default AuthContext;

const AuthProvider: FC = ({ children }) => {
  const toast = useToast();
  const storedToken: string | null = store.get('access_token', null);
  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(
    storedToken ? decode<Record<string, any>>(storedToken) : null
  );
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate();

  const authSuccessHandler = ({ data }: any) => {
    store.set('access_token', data.access_token);
    setToken(data.access_token);
    setUser(decode(data.access_token));
    setLoading(false)
    navigate('/');
  };

  const authFailureHandler = (err: any) => {
    setLoading(false)
    toast({
      title: err?.title ?? 'Login Failed',
      description: err?.message ?? 'Invalid username or password',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  const login = pipe(
    tap(() => setLoading(true)),
    auth,
    then(authSuccessHandler),
    otherwise(authFailureHandler)
  );

  const logout = () => {
    setToken(null);
    setUser(null);
    store.clearAll();
    navigate('/login', { replace: true });
  };

  const context = {
    user,
    token,
    setUser,
    setToken,
    login,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
