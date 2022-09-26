import { Button } from '@mui/material';
import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SButton = styled(Button)`
    border-radius: 50px !important;
    border-color: ${({ theme }: GlobalTheme) => theme.border} !important;

`;
