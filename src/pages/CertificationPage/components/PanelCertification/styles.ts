import { GlobalTheme } from '@styles/theme';
import styled from 'styled-components';

export const SPanelContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 1366px;
    margin: auto;
    padding: ${({ theme }: GlobalTheme) => theme.dimensions.isMobile ? '1rem' : '1rem 2rem'};

    aside {
        width: 100%;
        display: flex;
        gap: 0.6rem;
    }
`;

export const BoxCard = styled.div`
    min-height: 100px;
    width: 100%;
`
