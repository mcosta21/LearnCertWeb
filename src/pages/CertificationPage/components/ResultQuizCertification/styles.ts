import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    gap: .5rem;
`;

export const SHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -45px;
    margin-bottom: 1rem;

    img {
        height: 90px;
    }
`;

export const SResultTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
`;

export const SResultSubTitle = styled.p`
    color: ${({ theme }: GlobalTheme) => theme.textSecondary};

    strong {
    font-weight: 700;
    }
`;

export const SFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
`
