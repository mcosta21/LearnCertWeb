import { api } from '@config/api';
import { AuthenticatedUser } from '@contexts/UserContext/UserContext';

const root = 'Login';

const config = {
  headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
  }
} 

export async function internalAuthentication(email, password): Promise<AuthenticatedUser> {
  const data = {
    email,
    password
  }

  const response = await api.post<AuthenticatedUser>(`${root}/Authenticate`,
    { ...data },
    config
  );

  return response.data;
}

export async function gitHubAuthentication(code: string): Promise<AuthenticatedUser> {
    const response = await api.post<AuthenticatedUser>(`${root}/AuthenticateWithGithub`,
      { code },
      config
    );

    return response.data;
}