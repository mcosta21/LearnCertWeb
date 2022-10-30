import { Button } from '@mui/material';
import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SButton = styled(Button)`
    border-radius: 50px !important;
    border-color: ${({ theme }: GlobalTheme) => theme.border} !important;
    background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary} !important;
    font-weight: 500 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px;

    span {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin-top: -1px;

        svg {
            transform: scale(0.9);
        }
    }
`;
