import { IconButton } from '@mui/material';
import { GlobalTheme } from '@styles/theme';
import styled from 'styled-components';

export const SIconButton = styled(IconButton)`
    border-radius: 50px !important;

    &.icon-white svg {
        color: ${({ theme }: GlobalTheme) => theme.colors.white} !important;
    }
`;
