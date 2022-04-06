import { ReactNode } from 'react';

interface PrivateRouteProps {
  component: ReactNode;
}

export function PrivateRoute({
  component
}: PrivateRouteProps) {
  return (
          <>
            {component}
          </>
  );
}
