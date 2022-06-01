import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export const SAccordion = styled(Accordion)`
    background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary} !important;
    color: ${({ theme }: GlobalTheme) => theme.text} !important;

    svg {
        color: ${({ theme }: GlobalTheme) => theme.text} !important;
    }
    
    .l-input {
        margin-right: 1rem
    }
`;
