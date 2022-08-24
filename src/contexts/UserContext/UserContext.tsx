/* eslint-disable camelcase */
import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '@config/api';

interface AthenticatedUser {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

interface UserContextData {
  getAuthenticatedUser: () => AthenticatedUser | undefined;
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
  api.defaults.headers.common.Authorization = '';

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
      const response = await api.post<AthenticatedUser>(
        'Login/Authenticate',
        { ...data },
        config
      );

      const authenticatedUser = response.data;
  
      api.defaults.headers.common.Authorization = `Bearer ${authenticatedUser.token}`;

      setUser(authenticatedUser)
  }

  function handleLogout() {
    logout();
    setUser(undefined);
  }

  function getUser(): AthenticatedUser | undefined {
    const loggedUser = Cookies.get('@learn-cert:user');
    if (!loggedUser) return undefined;
    return JSON.parse(loggedUser);
  }

  function setUser(user: AthenticatedUser | undefined) {
    if(user === undefined) {
      Cookies.remove('@learn-cert:user');
      return;
    }
    Cookies.set('@learn-cert:user', JSON.stringify(user));
  }


  useEffect(() => {
    const localUser = getUser();
    if (!localUser) return;

    setUser(localUser);

    api.defaults.headers.common.Authorization = `Bearer ${localUser.token}`;
  }, []);

  return (
    <UserContext.Provider
      value={{ getAuthenticatedUser: getUser, login, logout: handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
