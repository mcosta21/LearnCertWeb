/* eslint-disable camelcase */
import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '@config/api';

interface User {
  name: string;
  email: string;
  role: string;
  id: string;
}

interface AuthUserResponse {
  token: string;
  user: User;
}

interface UserContextData {
  getAuthenticatedUser: () => User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export function logout() {
  Cookies.remove('@learn-cert:token');
  Cookies.remove('@learn-cert:user');

  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export function UserProvider({ children }: UserProviderProps) {

  async function login(email: string, password: string) {

      const data = {
        email,
        password
      }
  
      const config = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },
      } 
      const response = await api.post<AuthUserResponse>(
        'Login/Login',
        { ...data },
        config
      );

      const authenticatedUser = response.data.user;
      const token = response.data.token;
  
      Cookies.set('@learn-cert:token', token);
  
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(authenticatedUser)
  }

  function handleLogout() {
    logout();
    setUser(undefined);
  }

  function getUser(): User | null {
    const loggedUser = Cookies.get('@learn-cert:user');
    if (!loggedUser) return null;
    return JSON.parse(loggedUser);
  }

  function setUser(user: User | undefined) {
    if(user === undefined) {
      Cookies.remove('@learn-cert:user');
      return;
    }
    Cookies.set('@learn-cert:user', JSON.stringify(user));
  }


  useEffect(() => {
    const localUser = getUser();
    if (localUser) setUser(localUser);

    const token = Cookies.get('@learn-cert:token');
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  return (
    <UserContext.Provider
      value={{ getAuthenticatedUser: getUser, login, logout: handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
