import Box from '@mui/material/Box';
import * as React from 'react';
import { LTabContentProps } from './models';

export function LTabContent({
    value,
    visible,
    children
}: LTabContentProps) {
  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${value}`}
      hidden={!visible}
      aria-labelledby={`simple-tab-${value}`}
    >
        {
            visible && (
              <Box>
                {children}
              </Box>
            )
        }
        
    </div>
  );
}
