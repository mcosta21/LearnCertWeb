import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SIconButton = styled(IconButton)`
    border-radius: 50px !important;
    border-color: ${({ theme }: GlobalTheme) => theme.border} !important;
    background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary} !important;
`;
