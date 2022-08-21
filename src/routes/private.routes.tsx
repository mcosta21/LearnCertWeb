import { useUser } from '@hooks/useUser';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterKey } from './routekeys';

interface PrivateRouteProps {
  component: ReactNode;
}

export function PrivateRoute({
  component
}: PrivateRouteProps) {

  const { getAuthenticatedUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getAuthenticatedUser();
    if (!user) navigate(RouterKey.Login);
  });
  
  return (
          <>
            {component}
          </>
  );
}
