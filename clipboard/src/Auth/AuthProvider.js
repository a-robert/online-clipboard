import {createContext, useContext, useState} from 'react';
import AuthService from './authService';

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  let [user, setUser] = useState(null);

  const signIn = (newUser, callback) => {
    return AuthService.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback) => {
    return AuthService.signOut(() => {
      setUser(null);
      callback();
    });
  };

  const value = {user, signIn, signOut};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
}
