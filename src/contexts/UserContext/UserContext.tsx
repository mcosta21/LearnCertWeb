/* eslint-disable camelcase */
import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import * as AuthenticationService from '@services/authentication/authentication.service';
import { api } from '@config/api';

export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

interface UserContextData {
  getAuthenticatedUser: () => AuthenticatedUser | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loginWithGitHub: (code: string) => Promise<void>;
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
      const authenticatedUser = await AuthenticationService.internalAuthentication(email, password);
      api.defaults.headers.common.Authorization = `Bearer ${authenticatedUser.token}`;
      setUser(authenticatedUser)
  }

  async function loginWithGitHub(code: string) {
      const authenticatedUser = await AuthenticationService.gitHubAuthentication(code);
      api.defaults.headers.common.Authorization = `Bearer ${authenticatedUser.token}`;
      setUser(authenticatedUser)
  }

  function handleLogout() {
    logout();
    setUser(undefined);
  }

  function getUser(): AuthenticatedUser | undefined {
    const loggedUser = Cookies.get('@learn-cert:user');
    if (!loggedUser) return undefined;
    return JSON.parse(loggedUser);
  }

  function setUser(user: AuthenticatedUser | undefined) {
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
      value={{ getAuthenticatedUser: getUser, login, logout: handleLogout, loginWithGitHub }}
    >
      {children}
    </UserContext.Provider>
  );
}
