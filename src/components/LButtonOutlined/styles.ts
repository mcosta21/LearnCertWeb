import { Button } from '@mui/material';
import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SButton = styled(Button)`
    border-radius: 50px !important;
    border-color: ${({ theme }: GlobalTheme) => theme.border} !important;
    font-weight: 500 !important;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        width: 100%;
        gap: 8px;
    }

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
